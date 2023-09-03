from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

#creating choices for category so all above are the options 
class Categories(models.TextChoices):
    WORLD = 'world'
    ENVIRONMENT = 'environment'
    TECHNOLOGY = 'technology'
    CULTURE = 'culture'
    BUSINESS = 'business'
    POLITICS = 'politics'
    SCIENCE = 'science'
    HEALTH = 'health'
    TRAVEL = 'travel' 

class BlogPosts(models.Model): 
    title = models.CharField(max_length=50) 
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    image = models.ImageField(upload_to='photos/%Y/%m/%d/')
    describtion = models.CharField(max_length=150)
    month = models.CharField(max_length=10) 
    day = models.CharField(max_length=10)
    #This one next would handle the role of the summernote 
    #the content is that summernote widget 
    #set it on admin.py
    content = models.TextField()
    featured = models.BooleanField(default=False)
    #This is like combining time_created and time_updated
    date_created = models.DateTimeField(default=datetime.now, blank=True)
    
    



#automating slugfield instead of you manually doing it 
#and it also makes it unseeable

#verall, this custom save method ensures that each BlogPosts object has a unique slug. 
#If there are any conflicts with existing slugs, it appends a numeric suffix to the slug until a unique slug is found. 
#This process helps to prevent URL conflicts and ensures that each blog post can be accessed through a unique and readable URL.

#first overwrite the save method
    def save(self,*args, **kwargs):
        #slugifying the title
        original_slug = slugify(self.title)
        queryset = BlogPosts.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPosts.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug
         #while(queryset): This initiates a loop that will continue as 
         #long as there are other BlogPosts objects with the same slug as the current original_slug.
         #count = 1: This line initializes the count variable to 1. 
         #The count will be used to add a numeric suffix to the original_slug in case there are other posts with the same slug.
        #eg first-blog-post-1

        #Featured section 
        #THis ensures that only one BlogPosts object can be marked as featured at a time. 
        #If the current object is marked as featured (self.featured=True),
        #it checks for an existing featured post and sets its featured attribute to False before saving the current object. 
        #This prevents multiple blog posts from being marked as featured simultaneously. 
        if self.featured:
            try:
                #get retrieves a single item at a time
                temp = BlogPosts.objects.get(featured=True)
                if self != temp:
                    temp.featured=False
                    temp.save()
            except BlogPosts.DoesNotExist:
                pass  
        super(BlogPosts,self).save(*args, **kwargs)  #This line calls the save method of the parent class (super()) to perform
                                                     #the regular saving process for the BlogPosts object

    
    def __str__(self):
        return self.title











