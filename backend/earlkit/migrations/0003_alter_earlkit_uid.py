# Generated by Django 4.1.7 on 2023-02-15 19:48

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0002_alter_earlkit_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]