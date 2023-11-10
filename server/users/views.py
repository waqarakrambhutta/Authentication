from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args,**kwargs):
        response = super().post(request,*args,**kwargs)
        
        