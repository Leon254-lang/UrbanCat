from django.contrib import admin
from django.urls import include, path
from myapp.views import ContactMessageCreateView, ProjectInquiryCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
]