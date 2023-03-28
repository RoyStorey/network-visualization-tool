from django.contrib import admin
from .models import Earlkit

class EarlAdmin(admin.ModelAdmin):
    list_display = ("uid","title", "url", "desc", "img", "tags")

admin.site.register(Earlkit,EarlAdmin)
