from django.contrib.auth.models import User
from django.core.urlresolvers import reverse

from rest_framework import status
from rest_framework.test import APITestCase

from .. import factories


class TestUserApi(APITestCase):
    def test_user_list_is_empty_when_not_authenticated(self):
        url = reverse('user-list')

        response = self.client.get(url)

        assert response.data['count'] == 0


class TestUserRegistration(APITestCase):
    def test_fails_with_no_password(self):
        url = reverse('user-list')

        response = self.client.post(url, {
            'username': 'patrick',
            'email': 'patrick@example.org',
        }, format='json')

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 0 == User.objects.count()

    def test_fails_when_username_is_taken(self):
        factories.UserFactory(username='patrick')

        url = reverse('user-list')

        response = self.client.post(url, {
            'username': 'patrick',
            'email': 'patrick@example.org',
            'password': '123456',
        }, format='json')

        # XXX: maybe this should give an HTTP_409_CONFLICT error

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 1 == User.objects.count()

    def test_works(self):
        url = reverse('user-list')

        response = self.client.post(url, {
            'username': 'patrick',
            'email': 'patrick@example.org',
            'password': '123456',
        }, format='json')

        assert response.status_code == status.HTTP_201_CREATED
        assert 1 == User.objects.count()
