from django.db import models

# Create your models here.

class GroceryHut(models.Model):
    title = models.CharField(max_length=120)
    