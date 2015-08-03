from conference.models import Conference
from rest_framework import serializers


class ConferenceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Conference
        fields = ('code', 'name')

