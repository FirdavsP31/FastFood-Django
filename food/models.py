from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    category_name = models.CharField(max_length=250, verbose_name='Название категории')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    name = models.CharField(max_length=250, verbose_name='Название блюда')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория', related_name='products')
    description = models.TextField(verbose_name='Описание')
    main_image = models.ImageField(upload_to='products/', verbose_name='Главное изображение')
    price = models.PositiveIntegerField(verbose_name='Цена')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'

class CartItem(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def total_price(self):
        return self.product.price * self.quantity
    
    def __str__(self):
        return f"{self.product.name} ({self.quantity})"