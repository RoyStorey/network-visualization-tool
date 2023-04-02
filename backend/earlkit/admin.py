from django.contrib import admin
from .models import Earlkit
from .models import VisualizerSwitchList
from .models import VisualizerInterfaceList

class EarlAdmin(admin.ModelAdmin):
    list_display = ("uid","title", "url", "desc", "img", "tags")

class VisualizerAdmin(admin.ModelAdmin):
    list_display = ("switchuid","switch", "bldg", "room", "rack", "panel", "u", "mgmtip", "devtype", "ios", "sn")

class VisualizerInterfaceAdmin(admin.ModelAdmin):
    list_display = ("hostname", "interface", "description", "verified", "swportmode", "admindown")



admin.site.register(Earlkit,EarlAdmin)
admin.site.register(VisualizerSwitchList,VisualizerAdmin)
admin.site.register(VisualizerInterfaceList,VisualizerInterfaceAdmin)