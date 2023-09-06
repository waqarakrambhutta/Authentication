from django.shortcuts import render,HttpResponse

# Create your views here.
def home(requests):
    return render(requests,'home.html')