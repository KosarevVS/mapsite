from django.shortcuts import render

def index(request):
    return render(request,'mainApp/homePage.html')

def contact(request):
    return render(request,'mainApp/basic.html',{'values':['Если у вас есть предложения или вопросы Вы можете написать на почту:','kosarev-vs@ranepa.ry']})
