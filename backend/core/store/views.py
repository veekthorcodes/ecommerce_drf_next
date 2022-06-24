from django.shortcuts import render
from rest_framework import generics

from .serializers import ProductSerializer
from .models import (
    Category,
    Product
)


class ProductListView(generics.ListAPIView):
    queryset  = Product.objects.all()
    serializer_class = ProductSerializer


class Product(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
