# Generated by Django 4.1.7 on 2023-04-02 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0034_alter_earlkit_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='dcd1d38abd5c4484a4782e38af4bc04c', editable=False, max_length=15, unique=True),
        ),
    ]
