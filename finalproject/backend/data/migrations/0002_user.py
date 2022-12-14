# Generated by Django 4.1 on 2022-08-09 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=250)),
                ('username', models.CharField(max_length=200)),
                ('user_id', models.IntegerField()),
                ('is_superuser', models.CharField(max_length=25)),
                ('department', models.CharField(max_length=250)),
                ('designation', models.CharField(max_length=250)),
            ],
        ),
    ]
