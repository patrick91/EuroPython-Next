import factory

from django.contrib.auth.models import User


class UserFactory(factory.django.DjangoModelFactory):
    username = factory.Sequence(lambda n: "user_%d" % n)

    class Meta:
        model = User
