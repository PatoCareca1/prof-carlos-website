from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post, Comment


class BlogAPITests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass")

    def test_create_post(self):
        self.client.force_authenticate(user=self.user)
        data = {"author": self.user.id, "title": "First", "content": "Hi"}
        response = self.client.post("/api/posts/", data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(Post.objects.get().title, "First")

    def test_list_posts(self):
        Post.objects.create(author=self.user, title="A", content="B")
        Post.objects.create(author=self.user, title="C", content="D")
        response = self.client.get("/api/posts/", format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_create_comment(self):
        post = Post.objects.create(author=self.user, title="A", content="B")
        self.client.force_authenticate(user=self.user)
        data = {"post": post.id, "author": self.user.id, "text": "Nice"}
        response = self.client.post("/api/comments/", data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Comment.objects.count(), 1)
        self.assertEqual(Comment.objects.get().text, "Nice")

