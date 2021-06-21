from rest_framework import serializers
from .models import Members


class MembersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['id', 'name', 'surname', 'phone', 'photo']


class MembersSimpleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['id', 'name']