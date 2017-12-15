---
layout: default
group: internal
subgroup: Simplestore
title: Configuración
menu_title: Configuración
menu_order: 5
---

# {{page.title}}

Una vez instalado `Compropago Simplestore` debe proceder a configurarlo, para esto es necesario que edite los 2 archivos 
contenidos dentro de `vendor/compropago/simplestore/src/Simplestore/Libraries/`, **compropagoConfig.php** y **displayConfig.php**

#### compropagoConfig.php

Aqui se encuentran las confguraciones relacionadas con el SDK, que le permitiran tener acceso a los servicios correspondientes
de compropago, lo unico que debe de hacer, es reemplazar las llaves publica y privada por aquellas que le son proporcionadas
en su [panel de configuración Compropago][compropago-config-link]

{% highlight PHP %}
<?php
$compropagoConfig = array(
    # Llave publica generada por compropago
    'publickey'=>'pk_test_XXXXXXXXXXXXXXXXX',
    # Llave privada gerada por compropago
    'privatekey'=>'sk_test_XXXXXXXXXXXXXXXXX',
    # Estas generando pruebas? si no es asi cambia el valor a 'true'
    'live'=>false
);

{% endhighlight %}

#### displayConfig.php

En este archivo se encuentran las configurariones visuales del listado de proveedores.

{% highlight PHP %}
<?php
# Desea ocultar los logos de los proveedores? cambie el valor a 'no'
$comproData['showlogo'] = "yes";
# Ingrese una descripcion para la seccion de proveedores
$comproData['description'] = "";
# Ingrese las instrucciones que considere pertinentes para la seleccion de proveedores
$comproData['instrucciones'] = "Seleccione la tienda de conveniencia en la cual desea realizar su pago";

{% endhighlight %}

Una vez configurados estor archivos tendra a `Compropago Simplestore` funcionando y listao para usarse.
