from django.urls import path

from .views import ArticleListView, ArticlDetailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<pk>', ArticlDetailView.as_view()),
]