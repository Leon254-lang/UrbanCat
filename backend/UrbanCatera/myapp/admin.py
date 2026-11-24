from django.contrib import admin
from django.core.exceptions import PermissionDenied
from django.http import FileResponse
from django.urls import path, reverse
from django.shortcuts import get_object_or_404
from django.utils.html import format_html

from .models import ContactMessage, ProjectInquiry, ProjectInquiryAttachment


class ProjectInquiryAttachmentInline(admin.TabularInline):
    model = ProjectInquiryAttachment
    extra = 0
    fields = ["filename", "download_link", "uploaded_at"]
    readonly_fields = fields

    @admin.display(description="File")
    def filename(self, attachment):
        return attachment.file.name.rsplit("/", 1)[-1]

    @admin.display(description="Download")
    def download_link(self, attachment):
        url = reverse(
            "admin:myapp_projectinquiry_download_attachment",
            args=[attachment.inquiry_id, attachment.pk],
        )
        return format_html('<a href="{}">Download file</a>', url)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "subject", "created_at"]
    list_filter = ["created_at", "subject"]
    search_fields = ["name", "email", "message"]
    readonly_fields = ["created_at"]


@admin.register(ProjectInquiry)
class ProjectInquiryAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "service", "created_at"]
    list_filter = ["service", "created_at"]
    search_fields = ["name", "email", "details"]
    readonly_fields = ["created_at"]
    inlines = [ProjectInquiryAttachmentInline]

    def get_urls(self):
        custom_urls = [
            path(
                "<path:object_id>/attachments/<int:attachment_id>/download/",
                self.admin_site.admin_view(self.download_attachment),
                name="myapp_projectinquiry_download_attachment",
            ),
        ]
        return custom_urls + super().get_urls()

    def download_attachment(self, request, object_id, attachment_id):
        inquiry = self.get_object(request, object_id)
        if inquiry is None or not self.has_view_or_change_permission(request, inquiry):
            raise PermissionDenied
        attachment = get_object_or_404(
            ProjectInquiryAttachment,
            pk=attachment_id,
            inquiry=inquiry,
        )
        attachment.file.open("rb")
        filename = attachment.file.name.rsplit("/", 1)[-1]
        return FileResponse(attachment.file, as_attachment=True, filename=filename)
