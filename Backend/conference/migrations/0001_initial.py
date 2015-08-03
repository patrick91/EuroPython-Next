# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Conference',
            fields=[
                ('code', models.CharField(primary_key=True, serialize=False, max_length=10)),
                ('name', models.CharField(max_length=100)),
                ('conference_start', models.DateField(blank=True, null=True)),
                ('conference_end', models.DateField(blank=True, null=True)),
                ('cfp_start', models.DateField(blank=True, null=True)),
                ('cfp_end', models.DateField(blank=True, null=True)),
                ('voting_start', models.DateField(blank=True, null=True)),
                ('voting_end', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
