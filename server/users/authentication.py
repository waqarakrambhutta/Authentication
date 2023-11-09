from django.conf import settings
from rest_framework_simplejwt.authentication import JWTAuthentication

# this setup to use COOKIES for authorize request.
class CustomJWRAuthentication(JWTAuthentication):
    def authenticate(self, request):
        try:
            header = self.get_header(request)
            if header is None:
                new_token = request.COOKIES.get(settings.AUTH_COOKIE) 
            else:
                raw_token = self.get_raw_token(header)
                
            if raw_token is None:
                return None

            validated_token = self.get_validated_token(raw_token)

            return self.get_user(validated_token), validated_token
        except:
            return None
