from django.db import models



class Comment(models.Model):
	userName = models.CharField(max_length = 300, null = True)
	phone = models.CharField(max_length = 20)
	email = models.CharField(max_length = 50)
	message = models.TextField()
	date = models.DateTimeField(auto_now_add = True)


	def __str__(self):
		return f'{self.userName}'
