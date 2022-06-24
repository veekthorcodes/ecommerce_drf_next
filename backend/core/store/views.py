from django.shortcuts import render
from rest_framework import generics

from .serializers import ProductSerializer, CategorySerializer
from . import models
from .models import Product, Category


class ProductListView(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = ProductSerializer


class Product(generics.RetrieveAPIView):
    queryset = models.Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'


class CategoryItemView(generics.ListAPIView):
    queryset = models.Category.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        slug = self.kwargs['slug']
        return models.Product.objects.filter(
            category__in=Category.objects.get(
                slug=slug).get_descendants(include_self=True)
        )


class CategoryListView(generics.ListAPIView):
    queryset = models.Category.objects.filter(level=1)
    serializer_class = CategorySerializer
