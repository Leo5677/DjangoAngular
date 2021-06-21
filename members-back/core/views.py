from rest_framework import viewsets
from rest_framework.response import Response

from .models import Members
from .serializers import MembersSerializers, MembersSimpleSerializers


# Create your views here.


class MembersViewSet(viewsets.ModelViewSet):
    queryset = Members.objects.all()
    serializer_class = MembersSerializers

    def list(self, request, *args, **kwargs):
        queryset = Members.objects.all()
        serializer = MembersSimpleSerializers(queryset, many=True)
        return Response(serializer.data)
