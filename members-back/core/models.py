from django.db import models


# Create your models here.


class Members(models.Model):
    name = models.CharField('Name', max_length=100)
    surname = models.CharField('Surname', max_length=100)
    email = models.EmailField()
    phone = models.CharField('Phone', max_length=100)
    address = models.CharField(max_length=200)
    photo = models.ImageField(upload_to="members_profile", default="")

    def __str__(self):
        return f'{self.name} | {self.surname}'
