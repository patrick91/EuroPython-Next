from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from conference.models import Conference
from conference.serializers import ConferenceSerializer


class ConferenceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer
