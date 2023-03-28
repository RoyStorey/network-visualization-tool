from rest_framework import serializers
from .models import Earlkit

class EarlkitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Earlkit
        fields = ("uid","title", "url", "desc", "img", "tags")