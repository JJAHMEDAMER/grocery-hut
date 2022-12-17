from django.contrib import admin

# Models
from grocery_hut.models import GroceryHut

# Register your models here.

class GroceryHutAdmin(admin.ModelAdmin):
    list_display = ('title',)  # must be list so add , after string
    
admin.site.register(GroceryHut, GroceryHutAdmin)