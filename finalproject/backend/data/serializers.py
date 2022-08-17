from rest_framework import serializers
from .models import Task, User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['task_name', 'task_id','task_status','start_time','end_time' ,'created_date', 'approval_status', 'assigned_manager', 'task_description']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['full_name', 'username','user_id','is_superuser','department' ,'designation']   