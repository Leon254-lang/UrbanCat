
from django.urls import path
from Payments import views

urlpatterns = [
    #Mpesa URLs
    path("pay/", views.mpesa_payment, name="mpesa_payment"),
    path("callback/", views.mpesa_callback, name="mpesa_callback"),
    
]