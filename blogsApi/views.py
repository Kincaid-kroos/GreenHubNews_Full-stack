
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import BlogPosts
from .serializers import BlogPostsSerializer

class BlogPostsList(ListAPIView):
    queryset = BlogPosts.objects.order_by('-date_created')
    serializer_class = BlogPostsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostsLatest(ListAPIView):
    queryset = BlogPosts.objects.order_by('-date_created')
    serializer_class = BlogPostsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class BlogPostsDetails(RetrieveAPIView):
    queryset = BlogPosts.objects.all()
    serializer_class = BlogPostsSerializer
    lookup_field = 'slug'  # Use 'slug' as the lookup field
    permission_classes = (permissions.AllowAny, )


class BlogPostsFeatured(ListAPIView):
    queryset = BlogPosts.objects.all().filter(featured=True)
    serializer_class = BlogPostsSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )



class BlogPostsCategory(APIView):
    serializer_class = BlogPostsSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        id = request.data.get('id')  
        queryset = BlogPosts.objects.order_by('-date_created').filter(category__iexact=id)

        serializer = BlogPostsSerializer(queryset, many=True)

        return Response(serializer.data)
