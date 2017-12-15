---
layout: default
root: librerias
breadcrumbs: PHP SDK
group: php-sdk
subgroup: Guía Básica de Uso
title: Configuración
menu_title: Configuración
menu_node: 
menu_order: 3
---
# {{page.title}}

Se debe contar con una cuenta activa de ComproPago. [Registrarse en ComproPago ](https://compropago.com)

## General

Para poder hacer uso de la librería es necesario incluir el autoloader 

{% highlight php %}
<?php

require 'vendor/autoload.php';

{% endhighlight %}

El Namespace a utilizar dentro de la librería es **Compropago**.

{% highlight php %}
<?php

use Compropago\Sdk\Client; //Configuración de datos de conexión
use Compropago\Sdk\Service; //Llamados al API
 //Inclusión de vistas, ej. Mostrar template de las tiendas donde pagar
use Compropago\Sdk\Controllers\Views; 

{% endhighlight %}

Los Namespaces para los métodos se pueden ocupar a su conveniencia. Para mayor información consulte la <a href="http://php.net/manual/en/language.namespaces.basics.php" target="_new">documentación de PHP acerca de Namespaces</a> . ej:

{% highlight php %}
<?php
/* Unqualified name */
use Compropago\Sdk\Client; 
$compropagoClient= new Client($compropagoConfig);
/* Fully qualified name */
$compropagoClient= new Compropago\Sdk\Client($compropagoConfig);

{% endhighlight %}

## Configuración del Cliente
 
Para poder hacer uso del SDK y llamados al API es necesario que primero configure sus Llaves de conexión y crear un instancia de Client.
*Sus llaves las encontrara en su Panel de ComproPago en el menú Configuración.*

<a href="https://compropago.com/panel/configuracion" target="_new">Consulte Aquí sus Llaves</a>

{% highlight php %}
<?php
$compropagoConfig= array(
				//Llave pública
				'publickey'=>'pk_test_TULLAVEPUBLICA',
				//Llave privada 
				'privatekey'=>'sk_test_TULLAVE PRIVADA',
				//Esta probando?, utilice  'live'=>false
				'live'=>true 
				
		);

// Instancia del Client
$compropagoClient= new Compropago\Sdk\Client($compropagoConfig);

{% endhighlight %}


