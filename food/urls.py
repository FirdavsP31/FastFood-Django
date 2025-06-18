from django.urls import path
from . import views
urlpatterns = [
    path('',views.homepage,name ='home'),
    path('cart/',views.cart,name='cart'),
    path('add-to-cart/<int:product_id>/',views.add_to_cart,name='add_to_cart'),
    path('login/',views.log_in,name='login'),
    path('logout/',views.log_out,name='logout'),
    # path('detail/<int:id>/', views.detail, name='detail'),
    # path('reg/',views.registration,name = 'reg'),
    # path('logout/',views.log_out,name = 'logout'),
]
