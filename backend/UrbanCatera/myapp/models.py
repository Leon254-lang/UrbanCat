from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.subject}"


class ProjectInquiry(models.Model):
    SERVICES = [
        ("web-development", "Custom Web Development"),
        ("ecommerce", "E-Commerce & M-Pesa"),
        ("mobile-app", "Mobile App Development"),
        ("ui-branding", "UI/UX & Branding"),
        ("seo-marketing", "SEO & Marketing"),
        ("other", "Other"),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    service = models.CharField(max_length=32, choices=SERVICES)
    budget = models.CharField(max_length=80, blank=True)
    details = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.get_service_display()}"


class ProjectInquiryAttachment(models.Model):
    inquiry = models.ForeignKey(
        ProjectInquiry,
        related_name="attachments",
        on_delete=models.CASCADE,
    )
    file = models.FileField(upload_to="project-inquiries/%Y/%m/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
