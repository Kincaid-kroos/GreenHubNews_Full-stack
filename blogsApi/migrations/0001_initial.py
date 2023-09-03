# Generated by Django 4.2.3 on 2023-07-04 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPosts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('world', 'World'), ('environment', 'Environment'), ('technology', 'Technology'), ('culture', 'Culture'), ('business', 'Business'), ('politics', 'Politics'), ('opinion', 'Opinion'), ('science', 'Science'), ('health', 'Health'), ('style', 'Style'), ('travel', 'Travel')], default='world', max_length=50)),
                ('image', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('describtion', models.CharField(max_length=150)),
                ('month', models.CharField(max_length=10)),
                ('day', models.CharField(max_length=10)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('time_created', models.DateTimeField(auto_now_add=True)),
                ('time_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
