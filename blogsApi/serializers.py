from rest_framework import serializers
from .models import BlogPosts

class BlogPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPosts
        fields = '__all__'
        #the lookup_field attribute is useful when you want to have more meaningful
        #and descriptive URLs for your API endpoints eg when retrieving a specific blog post, you would make a request 
        #like /api/blogposts/some-blog-post-slug/ instead of /api/blogposts/1/
        #Basically slug is for SEO purposes
        lookup_field = 'slug'
