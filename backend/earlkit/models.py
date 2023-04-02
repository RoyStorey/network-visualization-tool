from django.db import models
import uuid
import PIL

class Earlkit(models.Model):
    uid=models.CharField(null=False,default=uuid.uuid4().hex,unique=True,editable=False,max_length=15)
    title=models.CharField(max_length=50)
    url=models.CharField(max_length=100)
    desc=models.TextField(default="",help_text='Please enter a description for the site\nMax 500 characters',max_length=500)
    img=models.ImageField(upload_to='images/',max_length=256)
    tags=models.CharField(default="",help_text='Please seperate all tags with a comma no spaces(ex tag1,tag2)\nMax 30 characters',max_length=30)
    
    def __self__(self):
        return self.title

class VisualizerSwitchList(models.Model):
    switchuid=models.CharField(primary_key=True,default=uuid.uuid4,unique=True,null=False,editable=False,max_length=15)
    switch=models.CharField(max_length=50)
    bldg=models.CharField(max_length=100)
    room=models.CharField(max_length=50)
    rack=models.CharField(max_length=50)
    panel=models.CharField(max_length=50)
    u=models.CharField(max_length=100)
    mgmtip=models.CharField(default="",max_length=50)
    devtype=models.CharField(default="", max_length=50)
    ios=models.CharField(default="",max_length=50)
    sn=models.CharField(default="",max_length=50)


    def __self__(self):
        return self.title

class VisualizerInterfaceList(models.Model):
    # switchUID=models.ForeignKey(switchuid)
    switchInterfaceUID=models.CharField(primary_key=True,default=uuid.uuid4,unique=True,null=False,editable=False,max_length=15)
    hostname=models.CharField(max_length=50, default='')
    interface=models.CharField(max_length=50)
    description=models.CharField(max_length=100)
    verified=models.CharField(max_length=50)
    swportmode=models.CharField(max_length=50)
    admindown=models.CharField(max_length=50)


    def __self__(self):
        return self.title