from django.contrib import admin
from django.urls import include, path
from myapp.views import ContactMessageCreateView, ProjectInquiryCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact-messages/', ContactMessageCreateView.as_view(), name='contact-messages'),
    path('api/project-inquiries/', ProjectInquiryCreateView.as_view(), name='project-inquiries'),
    path('api/payments/', include('Payments.urls')),
    path('api/products/', include('products.urls')),
]
