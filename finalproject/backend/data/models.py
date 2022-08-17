from django.db import models

# Create your models here.

class Task(models.Model):
    task_name = models.CharField(max_length=250)
    task_id = models.IntegerField(primary_key= True)
    task_status = models.CharField(max_length=250)
    start_time = models.TimeField()
    end_time = models.TimeField()
    created_date = models.DateField()
    approval_status = models.CharField(max_length=100)
    assigned_manager = models.CharField(max_length=300)
    task_description = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.task_name

class User(models.Model):
    full_name = models.CharField(max_length=250)
    username = models.CharField(max_length=200)
    user_id = models.IntegerField()
    is_superuser = models.CharField(max_length=25)
    department = models.CharField(max_length=250)
    designation = models.CharField(max_length=250)

    def __str__(self) -> str:
        return self.full_name

