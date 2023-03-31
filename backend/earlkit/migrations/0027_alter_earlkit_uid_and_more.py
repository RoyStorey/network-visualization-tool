# Generated by Django 4.1.7 on 2023-03-29 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0026_alter_earlkit_uid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='d2ba9031dbd245e49ecd9ec073d28839', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='switchuid',
            field=models.UUIDField(default=19052100379749913746324032126850001295, editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
