---
layout: default
group: internal
subgroup: QA
title: PROCESO QA OPENCART
menu_title: Open Cart
menu_order: 2
menu_node: 
---

# {{page.title}}

## CREACION DEL ENTORNO tests

* Crear nueva base de datos (oc_qa)
* Crear carpeta QA en dentro de la carpeta opencart en el servidor.
* Subir contenido de fresh install en la carpeta QA
* Cambiar permisos de los archivos de la instalación a 777
* Proceder con la instalación normal
* Al finalizar la instalación, antes de cambiar de pantalla en el navegador, eliminar la carpeta install en el servidor.


## SUBIDA DEL PLUGIN

* Descargar el brach a generar QA
* Subir el contenido de la carpeta upload mediante ftp al servidor de prueba, respetando la estructura de carpetas para cada uno de los archivos.

## PROCESOS DE TEST

### TEST DE CONFIGURACION

* Dentro del panel de Opencart dirigirse al apartado Extensions > Payments y buscar en el listado el plugin de Compropago.
* De los controles Action click en el botón “+” (Instalar)
* Si no hay errores dar click en el botón Editar
* Copiar la dirección del Webhook y registrarlo en el panel de compropago.
* Llenar la configuración con os datos requeridos y guardar la configuración
* Si no hay errores deberá de regresar al listado de métodos de pago.
* Ingresar al panel de compropago y probar que el webhook creado anteriormente responda correctamente.

### TEST DE CHECKOUT

* Entrar a la tienda de Opencart y generar un proceso de checkout de manera normal y seleccionar como método de pago a Compropago.
* Si finalizo el proceso de compra de manera normal, revisar en el panel de compropago si el pedido fue registrado.
* Ingresar al panel de Opencart y revisar que la orden se muestre correctamente en el listado.
* Dentro del panel de compropago aprovar el pedido.
* Aprovado el pedido revisar en el panel de Opencart que el estatus de la orden aya sido modificado correctamente por el Webhook.
* Si fue actualizado correctamente realizar un nuevo proceso de Checkout co cualquier otro método de pago para descartar bloqueos.

## FIN DE QA
