from django.shortcuts import render
from .models import Comment
import requests

# Create your views here.

def telegram_bot_sendtext(bot_message):
	bot_token = '5184089123:AAEH5YHYE3J0FHya9qTq8WNDUjOR2w8ETVk'
	bot_chatID = '1168299390'
	send_text = 'https://api.telegram.org/bot'+bot_token+'/sendMessage?chat_id='+bot_chatID+'&parse_mode=Markdown&text='+bot_message
	response = requests.get(send_text)
	return response.json()


def indexPageView(request):
	if request.method == 'POST':
		name = request.POST.get('name',None)
		phone = request.POST.get('phone',None)
		email = request.POST.get('email',None)
		message = request.POST.get('message',None)
		user = Comment.objects.create(
			userName = name,
			phone = phone,
			email = email,
			message = message
			)
		user.save()

		telegram_bot_sendtext(f"Ismi:{user}\nEmail:{email}\nTel:{phone}\nXabar:{message}")

	return render(
	request = request,
	template_name = 'index.html'
		)


