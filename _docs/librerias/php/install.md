---
layout: default
root: librerias
group: php-sdk
subgroup: 02_Instalacion
title: Instalación
menu_title: Instalación
menu_order: 2
menu_node: parent
---
# {{page.title}}

## Requerimientos

* [PHP >= 5.5](http://www.php.net/)
* [PHP JSON extension](http://php.net/manual/en/book.json.php)
* [PHP cURL extension](http://php.net/manual/en/book.curl.php)

## Instalación ComproPago SDK

Existen diferente métodos para instalar 

### Instalación usando Composer

La manera recomenda de instalar la SDK de ComproPago es por medio de Composer.

<a href="https://getcomposer.org/doc/00-intro.md" target="_blank">¿Cómo instalar Composer?</a>

Para instalar la última versión **Estable de la SDK**, ejecuta el comando de Composer:

{% highlight shell %}

composer require compropago/php-sdk

{% endhighlight %}





Posteriormente o en caso de erro de carga de archivos, volvemos a crear el autoload:
   
{% highlight shell %}

composer dumpautoload -o

{% endhighlight %}
   
O agregando manualmente al archivo composer.json

{% highlight JSON %}

"require": { 
		"compropago/php-sdk":"^1.1"
	}

{% endhighlight %}

A continuación ejecutar:

{% highlight bash %}

composer install

{% endhighlight %}

Después de la instalación para poder hacer uso de la librería es **necesario incluir** el autoloader de Composer:

{% highlight php %}
<?php

require 'vendor/autoload.php';

{% endhighlight %}

Para actualizar el SDK de ComproPago a la última versión estable ejecutar:

{% highlight bash %}

composer update

{% endhighlight %}


### Instalación descargando archivo ZIP

Descargar y descomprimir el archivo de la versión a utilizar:
[Última Estable] [compropago-estable-dl]


Para poder hacer uso de la librería es **necesario incluir** el autoloader que se encuentra dentro de la carpeta **vendor** del archivo que descomprimió:

{% highlight php %}
<?php
require 'vendor/autoload.php';

{% endhighlight %}


### Instalación por GitHub

Puede descargar alguna de las versiones que hemos publicado:
[Consultar Versiones Publicadas en GitHub](https://github.com/compropago/compropago-php/releases)

O si o lo desea puede obtener el repositorio

{% highlight bash %}

#repositorio en su estado actual (*puede no ser versón estable*)
git clone https://github.com/compropago/compropago-php.git

{% endhighlight %}

Para poder hacer uso de la librería es necesario que incluya **Todos** los archivos contenidos en la carpeta

## Guía de Versiones

| Version | Status      | Packagist            | Namespace    | PHP | Repo                      | Docs                      | 
|---------|-------------|----------------------|--------------|-----|---------------------------|---------------------------|
| 1.0.x   | Maintained  | `compropago/php-sdk` | `Compropago` | 5.3 + | [v1.0.x][compropago-repo-1-0-x] | [v1][compropago-1-docs]   | 
| 1.1.x   | Latest      | `compropago/php-sdk` | `Compropago\Sdk` | 5.5 + | [v1.1.x][compropago-repo] | [v1][compropago-1-docs]   |

[compropago-repo]: https://github.com/compropago/compropago-php
[compropago-repo-1-0-x]: https://github.com/compropago/compropago-php/tree/1.0.x
[compropago-1-docs]: https://compropago.com/documentacion/api
[compropago-estable-dl]: https://s3.amazonaws.com/compropago/libraries/php/compropago-php-sdk-1-1-0.zip