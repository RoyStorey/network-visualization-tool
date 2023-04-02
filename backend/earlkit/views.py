from django.shortcuts import render

from rest_framework import viewsets
from .serializers import EarlkitSerializer
from .models import Earlkit
from .serializers import VisualizerSwitchListSerializer
from .models import VisualizerSwitchList
from .serializers import VisualizerInterfaceListSerializer
from .models import VisualizerInterfaceList

class EarlView(viewsets.ModelViewSet):
    serializer_class = EarlkitSerializer
    queryset = Earlkit.objects.all()
    http_method_names = ['get','head']
    
class VisualizerSwitchListView(viewsets.ModelViewSet):
    serializer_class = VisualizerSwitchListSerializer
    queryset = VisualizerSwitchList.objects.all()
    http_method_names = ['get','head']

class VisualizerInterfaceListView(viewsets.ModelViewSet):
    serializer_class = VisualizerInterfaceListSerializer
    queryset = VisualizerInterfaceList.objects.all()
    http_method_names = ['get','head']