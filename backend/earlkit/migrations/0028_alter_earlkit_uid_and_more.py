# Generated by Django 4.1.7 on 2023-03-29 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0027_alter_earlkit_uid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='55a7b481b4c94f9ea2cf53a252694432', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='switchuid',
            field=models.UUIDField(editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]