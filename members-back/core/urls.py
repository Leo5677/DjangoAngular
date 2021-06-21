from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MembersViewSet

router = DefaultRouter()
router.register('members', MembersViewSet)

urlpatterns = [
    path('api-auth', include('rest_framework.urls')),
    path('drf/', include(router.urls)),
]

