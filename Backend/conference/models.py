from django.db import models

# Create your models here.
class Conference(models.Model):
    code = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=100)
    conference_start = models.DateField(null=True, blank=True)
    conference_end = models.DateField(null=True, blank=True)
    cfp_start = models.DateField(null=True, blank=True)
    cfp_end = models.DateField(null=True, blank=True)
    voting_start = models.DateField(null=True, blank=True)
    voting_end = models.DateField(null=True, blank=True)

    def __unicode__(self):
        return self.code

    def days(self):
        output = []
        if self.conference_start and self.conference_end:
            d = self.conference_start
            step = datetime.timedelta(days=1)
            while d<= self.conference_end:
                output.append(d)
                d += step
        return output

    def clean(self):
        if self.conference_start and self.conference_end:
            if self.conference_start > self.conference_end:
                raise exceptions.ValidationError('range di date per la conferenza non valido') 
        if self.cfp_start and self.cfp_end:
            if self.cfp_start > self.cfp_end:
                raise exceptions.ValidationError('range di date per il cfp non valido') 
        if self.voting_start and self.voting_end:
            if self.voting_start > self.voting_end:
                raise exceptions.ValidationError('range di date per la votazione non valido') 

    def cfp(self):
        today = datetime.date.today()
        try:
            return self.cfp_start <= today <= self.cfp_end
        except TypeError:
            # date non impostate
            return False

    def voting(self):
        today = datetime.date.today()
        try:
            return self.voting_start <= today <= self.voting_end
        except TypeError:
            # date non impostate
            return False

    def conference(self):
        today = datetime.date.today()
        try:
            return self.conference_start <= today <= self.conference_end
        except TypeError:
            raise
            # date non impostate
            return False