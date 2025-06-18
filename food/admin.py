from django.contrib import admin
from .models import Product,Category
# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug':('category_name',)
    }

class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ['name','price','category']
    list_display_links = ['name']
    list_editable = ['price']
    search_fields = ['name']
    list_filter = ['category','price']

admin.site.register(Category,CategoryAdmin)
admin.site.register(Product,ProductAdmin)



