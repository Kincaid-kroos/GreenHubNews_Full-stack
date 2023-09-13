from django.urls import path
from . import views

urlpatterns = [
    path('',views.BlogPostsList.as_view()),
    path('featured',views.BlogPostsFeatured.as_view()),
    path('category',views.BlogPostsCategory.as_view()),
    path('<slug>',views.BlogPostsDetails.as_view()),
]
 