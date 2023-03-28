from django.shortcuts import render

from rest_framework import viewsets
from .serializers import EarlkitSerializer
from .models import Earlkit

class EarlView(viewsets.ModelViewSet):
    serializer_class = EarlkitSerializer
    queryset = Earlkit.objects.all()
    http_method_names = ['get','head']