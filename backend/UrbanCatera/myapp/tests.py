import tempfile

from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase, override_settings
from django.urls import reverse
from rest_framework.test import APIClient

from .models import ContactMessage, ProjectInquiry, ProjectInquiryAttachment


class ContactMessageAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_contact_message_is_saved_and_returned(self):
        response = self.client.post(
            "/api/contact-messages/",
            {
                "name": "Amina Client",
                "email": "amina@example.com",
                "phone": "+254700000000",
                "subject": "Custom Web Development",
                "message": "I need a new business website.",
            },
            format="json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["email"], "amina@example.com")
        self.assertEqual(ContactMessage.objects.count(), 1)

    def test_invalid_contact_message_is_rejected(self):
        response = self.client.post(
            "/api/contact-messages/",
            {"name": "Amina Client", "email": "not-an-email", "message": ""},
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(ContactMessage.objects.count(), 0)


class ProjectInquiryAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.media_dir = tempfile.TemporaryDirectory()
        self.settings = override_settings(MEDIA_ROOT=self.media_dir.name)
        self.settings.enable()

    def tearDown(self):
        self.settings.disable()
        self.media_dir.cleanup()

    def test_project_inquiry_and_attachment_are_saved(self):
        response = self.client.post(
            "/api/project-inquiries/",
            {
                "name": "Amina Client",
                "email": "amina@example.com",
                "phone": "+254700000000",
                "service": "web-development",
                "budget": "KES 50,000–150,000",
                "details": "A responsive business website.",
                "attachments": SimpleUploadedFile(
                    "reference.pdf",
                    b"%PDF-1.4 test document",
                    content_type="application/pdf",
                ),
            },
            format="multipart",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["service"], "web-development")
        self.assertEqual(ProjectInquiry.objects.count(), 1)
        self.assertEqual(ProjectInquiryAttachment.objects.count(), 1)

    def test_unsupported_attachment_is_rejected_without_saving_inquiry(self):
        response = self.client.post(
            "/api/project-inquiries/",
            {
                "name": "Amina Client",
                "email": "amina@example.com",
                "service": "web-development",
                "details": "A responsive business website.",
                "attachments": SimpleUploadedFile(
                    "program.exe",
                    b"not an allowed file",
                    content_type="application/octet-stream",
                ),
            },
            format="multipart",
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(ProjectInquiry.objects.count(), 0)

    def test_attachment_download_is_staff_only(self):
        response = self.client.post(
            "/api/project-inquiries/",
            {
                "name": "Amina Client",
                "email": "amina@example.com",
                "service": "web-development",
                "details": "A responsive business website.",
                "attachments": SimpleUploadedFile("reference.pdf", b"private reference"),
            },
            format="multipart",
        )
        inquiry = ProjectInquiry.objects.get(pk=response.data["id"])
        attachment = inquiry.attachments.get()
        download_url = reverse(
            "admin:myapp_projectinquiry_download_attachment",
            args=[inquiry.pk, attachment.pk],
        )

        self.assertEqual(self.client.get(download_url).status_code, 302)

        reviewer = get_user_model().objects.create_superuser(
            username="reviewer",
            email="reviewer@example.com",
            password="secure-test-password",
        )
        self.client.force_login(reviewer)
        download = self.client.get(download_url)

        self.assertEqual(download.status_code, 200)
        try:
            contents = b"".join(download.streaming_content)
        finally:
            download.close()
        self.assertEqual(contents, b"private reference")
