---
layout: default
root: librerias
breadcrumbs: PHP SDK
group: php-sdk
subgroup: Guía Básica de Uso
title: Manejo de Vistas
menu_title: Vistas ( tiendas & recibo)
menu_node: 
menu_order: 3
---
# {{page.title}}

## Selector de Tiendas

Obtener el HTML con los logos para que el usuario seleccione donde pagar

{% highlight php %}
<?php
$compropagoData['providers']=$compropagoService->getProviders(); //obtenemos el listado
$compropagoData['showlogo']='yes';                              //(yes|no) logos o select
$compropagoData['description']='Plugin Descriptor compropago';  // Título a mostrar
$compropagoData['instrucciones']='Compropago Instrucciones';    // texto de instrucciones
?>
<html>
<head>
	<!-- CSS de ComproPago-->
	<link rel="stylesheet" type="text/css" href="../assets/css/compropago.css">
</head>
<body>
	<?php
		//llamamos al controlador para mostrar el template 
		Compropago\Sdk\Controllers\Views::loadView('providers',$compropagoData);
	?>
</body>
</html>


{% endhighlight %}


