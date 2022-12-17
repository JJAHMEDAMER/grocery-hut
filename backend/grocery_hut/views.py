from django.shortcuts import render
from rest_framework import viewsets
from grocery_hut.serializers import GroceryHutSerializer
from grocery_hut.models import GroceryHut

# Create your views here.

class GroceryHutView(viewsets.ModelViewSet):
    serializer_class = GroceryHutSerializer
    queryset = GroceryHut.objects.all()
    
'''
The viewsets base class provides the implementation for CRUD operations by default.
'''