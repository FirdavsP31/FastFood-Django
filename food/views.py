from django.shortcuts import render,get_object_or_404,redirect
from . import models
from .forms import Registration,LoginForm
from django.contrib.auth import login,logout,authenticate
# from .forms import Registration,LoginForm,CommentForm
# from django.contrib.auth import login,logout,authenticate
# Create your views here.

def homepage(request):
    products = models.Product.objects.all()
    categories = models.Category.objects.all()
    return render(request,'index.html',{'products':products,
                                       'categories':categories})

def add_to_cart(request,product_id):
    if not request.user.is_authenticated:
        return redirect('login')
    
    product= get_object_or_404(models.Product, id=product_id)
    cart_item,created = models.CartItem.objects.get_or_create(
        user=request.user,
        product=product,
    )
    if not created:
        cart_item.quantity += 1
    cart_item.save()
    return redirect('cart')

def cart(request):
    if not request.user.is_authenticated:
        return redirect('login')
    
    cart_items = models.CartItem.objects.filter(user=request.user)
    total_price = sum(item.total_price() for item in cart_items)
    return render(request,'cart.html',{
        'cart_items': cart_items,
        'total_price':total_price
    })

def log_out(request):
    logout(request)
    return redirect('home')

def log_in(request):
    if request.method == 'POST':
        forms = LoginForm(request,request.POST)
        if forms.is_valid():
            user = forms.get_user()
            login(request,user)
            return redirect('home')
        
    else:
        forms = LoginForm()
    return render(request, 'login.html',{'forms':forms})

# def basepage(request):
#     categories = models.Category.objects.all()
#     return render(request,'base.html',{'categories': categories})