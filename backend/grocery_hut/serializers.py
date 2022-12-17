from rest_framework import serializers
from grocery_hut.models import GroceryHut

class GroceryHutSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryHut
        fields = ('id', 'title')