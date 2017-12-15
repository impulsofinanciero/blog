---
layout: default
group: internal
subgroup: Simplestore
title: Instalación
menu_title: Instalación
menu_order: 5
---

# {{page.title}}

`Compropago Simplestore` debe ser instalado mediante composer, esto permitira tener una experiencia `Out of the box` de esta
herramienta. Para poder instalarlo en su sitio, debe asegurarse de tener el gestor de composer instalado en su equipo, una vez
asegurada la existencia de la instalación de composer, en una terminal de sistema debera ejecutar los siguientes comandos.

{% highlight shell %}
$ composer require compropago/simplestore
$ composer dumpautoload -o
{% endhighlight %}

Esto generara en la ruta donde este posicionada su terminal la siguiente estructura.

{% highlight shell %}

/ vendor
|--> composer
|--> compropago
|  |--> php-sdk
|  |--> simplestore
|--> autoload.php
/ composer.json
/ composer.lock

{% endhighlight %}

Dentro de nueva estructura generada hay 2 carpetas importantes:

* <code>vendor/compropago/php-sdk/</code>: contiene todos los archivos y librerias de los servicios del SDK de Compropago.
* <code>vendor/compropago/simplestore/</code>: contiene la estructura ya mencionada de Compropago Simplestore
