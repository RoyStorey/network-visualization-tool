# Generated by Django 4.1.7 on 2023-03-29 14:26

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0030_alter_earlkit_uid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='e19317f099c94e6d87e471eb4a1826ee', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='switchuid',
            field=models.CharField(default=uuid.uuid4, editable=False, max_length=15, primary_key=True, serialize=False, unique=True),
        ),
    ]
