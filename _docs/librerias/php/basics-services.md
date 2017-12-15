---
layout: default
root: librerias
breadcrumbs: PHP SDK
group: php-sdk
subgroup: Guía Básica de Uso
title: Servicios Básicos del SDK
menu_title: Servicios SDK
menu_node: 
menu_order: 3
---
# {{page.title}}

## Llamados al los servicios por SDK 

Para utilizar los métodos se necesita tener una instancia de Service. La cual recibe de parámetro el objeto de Client.
 
{% highlight php %}
<?php
$compropagoService= new Compropago\Sdk\Service($compropagoClient);

{% endhighlight %}

## Métodos base del SDK

### Crear una nueva orden de Pago

{% highlight php %}
<?php

//Campos Obligatorios para poder realizar una nueva orden
$data = array(
		'order_id'    	     => 'testorderid',             // string para identificar la orden
		'order_price'        => '123.45',                  // float con el monto de la operación
		'order_name'         => 'Test Order Name',         // nombre para la orden
		'customer_name'      => 'Compropago Test',         // nombre del cliente
		'customer_email'     => 'test@compropago.com',     // email del cliente
		'payment_type'       => 'OXXO'                     // identificador de la tienda donde realizar el pago
);
//Obtenemos el JSON de la respuesta 
$response = $compropagoService->placeOrder($data);

{% endhighlight %}

### Verificar el Estatus de una orden

{% highlight php %}
<?php

//El número de orden que queremos verificar
$orderId= 'ch_xxxxx-xxxxx-xxxxx-xxxxx'

//Obtenemos el JSON de la respuesta 
$response = $compropagoService->verifyOrder( $orderId );

{% endhighlight %}

### Obtener el listado de las tiendas donde se puede realizar el Pago

{% highlight php %}
<?php

//Obtenemos el JSON de la respuesta 
$response = $compropagoService->getProviders( );

{% endhighlight %}