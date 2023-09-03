from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPosts

class BlogPostsAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('id','title','category','date_created')
    list_display_links = ('id','title')
    search_fields = ('title',)
    list_per_page=20

    #The textfield named content on model.py on the Blogposts model would onle be the one having a the summernote widget
    summernote_fields = ('content',)

admin.site.register(BlogPosts, BlogPostsAdmin)
