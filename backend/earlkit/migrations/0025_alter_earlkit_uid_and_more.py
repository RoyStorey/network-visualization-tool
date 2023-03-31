# Generated by Django 4.1.7 on 2023-03-29 13:05

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0024_remove_visualizerswitchlist_id_alter_earlkit_uid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='fd133aab19c74a118f4df9cb672c7ad6', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='switchuid',
            field=models.UUIDField(default=uuid.UUID('5582f368-6325-47ef-bd96-3a95bbbfaa06'), editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]