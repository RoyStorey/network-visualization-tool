# Generated by Django 4.1.7 on 2023-03-29 13:16

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0025_alter_earlkit_uid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='37bf460eef6a486b96c68a00c9180877', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='switchuid',
            field=models.UUIDField(default=uuid.UUID('a65c9368-b6b7-467a-94e9-7dd1dec34dd0'), editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]