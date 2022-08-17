from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('task',views.TaskViewset.as_view(), name='task'),
    path('user',views.UserViewset.as_view(), name='User')
]
