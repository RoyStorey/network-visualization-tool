from django.apps import AppConfig


class EarlkitConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'earlkit'
    
class VisualizerSwitchListConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'visualizerSwitchList'

class VisualizerInterfaceListConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'visualizerInterfaceList'
