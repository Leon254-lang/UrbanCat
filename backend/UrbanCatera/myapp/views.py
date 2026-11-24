from django.db import transaction
from rest_framework import serializers, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage, ProjectInquiry, ProjectInquiryAttachment


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "phone", "subject", "message", "created_at"]
        read_only_fields = ["id", "created_at"]


class ProjectInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInquiry
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "service",
            "budget",
            "details",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]


class ContactMessageCreateView(APIView):
    parser_classes = [JSONParser]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()
        return Response(
            ContactMessageSerializer(message).data,
            status=status.HTTP_201_CREATED,
        )


class ProjectInquiryCreateView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    allowed_extensions = {".pdf", ".png", ".jpg", ".jpeg", ".gif", ".webp"}
    max_file_size = 10 * 1024 * 1024
    max_files = 5

    def post(self, request):
        files = request.FILES.getlist("attachments")
        if len(files) > self.max_files:
            return Response(
                {"attachments": [f"Upload no more than {self.max_files} files."]},
                status=status.HTTP_400_BAD_REQUEST,
            )

        for file in files:
            extension = "." + file.name.rsplit(".", 1)[-1].lower() if "." in file.name else ""
            if extension not in self.allowed_extensions:
                return Response(
                    {"attachments": [f"{file.name} is not an allowed file type."]},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            if file.size > self.max_file_size:
                return Response(
                    {"attachments": [f"{file.name} exceeds the 10 MB file limit."]},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        serializer = ProjectInquirySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        with transaction.atomic():
            inquiry = serializer.save()
            for file in files:
                ProjectInquiryAttachment.objects.create(inquiry=inquiry, file=file)

        return Response(
            ProjectInquirySerializer(inquiry).data,
            status=status.HTTP_201_CREATED,
        )
