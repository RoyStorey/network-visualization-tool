from rest_framework import serializers
from .models import Earlkit
from .models import VisualizerSwitchList
from .models import VisualizerInterfaceList

class EarlkitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Earlkit
        fields = ("uid","title", "url", "desc", "img", "tags")

class VisualizerSwitchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisualizerSwitchList
        fields = ("switchuid","switch", "bldg", "room", "rack", "panel", "u","mgmtip","devtype","ios","sn")

class VisualizerInterfaceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisualizerInterfaceList
        fields = ("hostname","interface", "description", "verified", "swportmode", "admindown")