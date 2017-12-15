---
layout: default
root: librerias
breadcrumbs: PHP SDK
group: php-sdk
subgroup: SDK-API
title: SDK para uso del API
menu_title: Uso del API
menu_node: parent
menu_order: 4
---

# {{page.title}}
 
> Para conocer los servicios del API visite la documentación: [API de ComproPago](https://www.compropago.com/documentacion/api)

Utilice el método estático ``Compropago\Http\Rest::doExecute`` para consumir directamente el API, su estructura es la siguiente:

{% highlight php %}
<?php
/**
 * @param Compropago\Client $client  // Objeto Cliente configurado
 * @param string $service            // Servicio del API a llamar
 * @param mixed$query                // Información a enviar: query string 'foo=bar' o Array Asociativo array( 'foo'=>'bar')
 * @param string $method             // método para consumir 'GET' o 'POST'
 * @return Array                    // asociativo con responseBody, responseHeaders, responseCode
 */
Compropago\Sdk\Http\Rest::doExecute(Client $client,$service=null,$query=FALSE,$method='GET');

{% endhighlight %}

Por ejemplo para realizar una nueva orden de pago llamando directamente al API.
Documentación: [API:Crear un Cargo](https://compropago.com/documentacion/api/crear-cargo)

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

// enviamos la información de la orden y obtenemos la respuesta del API 
$response=Compropago\Sdk\Http\Rest::doExecute($compropagoClient,'charges/',$data,'POST'); 

// El cuerpo de la respuesta, volvemos el objeto JSON para procesarlo
$body = json_decode( $response['responseBody'] ); 

// Los encabezados de la respuesta  
$headers = $response['responseHeaders'];  

// el código de la respuesta, 200 = Todo OK           
$code = $response['responseCode'];                 

/**
 * Coloque a continuación su lógica para evaluar y procesar el resultado. 
 */
 
{% endhighlight %}
