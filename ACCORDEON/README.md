#Аккордеон

Тестовое задание для курса js от loftschool
Сделать аккордеон на нативном js

[Посмотреть](http://accordion.loftschool.mitri4.pro/)

##Начало

###Зависимости

Необходимо установить

* [Ruby](https://www.ruby-lang.org/)
* [Sass](http://sass-lang.com/)
* [Susy](http://susydocs.oddbird.net/en/latest/)
* [Compass](http://compass-style.org/)
* [NodeJS](https://nodejs.org/)
* [Bower](https://bower.io/)
* [Pug](http://jade-lang.com/)
* [Python 3](https://www.python.org/) - для Деплоя
* [Nginx](https://nginx.org) - для Сервера

Для установки на OS X

```
$ brew install ruby
$ gem install sass
$ gem install compass
$ gem install susy
$ npm install -g bower
$ npm install jade --global
```

для установки NodeJS скачайте [установщик](https://nodejs.org/en/download/)

Для установки на другие платформы, поситите оффициальные сайты (ссылки выше)

###Установка

```
$ git https://github.com/mitrofun/accordion
$ cd accordion 
$ gulp build
```

###Запуск локально

```
$ git https://github.com/mitrofun/accordion
$ cd accordion && bin/local_run.sh
```


## Деплой

Для публикации сайта сделан скрипт для ubuntu.

```
$ virtualenv .env --no-site-packages -p python3
$ source .env/bin/activate
$ pip install -r requirements.txt
$ cp settings.py.example settings.py
$ fab deploy
```

## Авторы

* **Дмитрий Шестёркин** - [mitrofun](https://github.com/mitrofun)

Так же смотрите [соавторы](https://github.com/mitrofun/accordion/contributors).
