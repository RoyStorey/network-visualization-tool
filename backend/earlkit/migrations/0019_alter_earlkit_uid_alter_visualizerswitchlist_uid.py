# Generated by Django 4.1.7 on 2023-03-28 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0018_alter_earlkit_uid_alter_visualizerswitchlist_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='3b2537b525a745f99cc73b5281ee1467', editable=False, max_length=15, unique=True),
        ),
        migrations.AlterField(
            model_name='visualizerswitchlist',
            name='uid',
            field=models.CharField(default='35f5470af4fa490db8942c08f828981c', editable=False, max_length=15, unique=True),
        ),
    ]
