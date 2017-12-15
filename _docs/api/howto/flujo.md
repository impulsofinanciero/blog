---
layout: default
root: api
group: api
subgroup: ¿Cómo Funciona?
title: Flujo de Llamadas al API
menu_title: Flujo de llamadas
menu_order: 6
menu_node:  
---

# {{page.title}}

En proceso "normal" de ecommerce el flujo de llamadas al API sucede de la siguiente manera:

![API flow]({{ site.baseurl }}/assets/images/docs/api/flujo-API.png)

## Paso A

En su plataforma el usuario llega a esté punto para la selección del método de pago. 

Para que el usuario tenga la opción de seleccionar un punto de pago, debe realizar un llamado al API de ComproPago para obtener la información de las tiendas disponibles. [GET providers/true]

Obtendra una respuesta tipo JSON que le permitirá mostrar la información [JSON providers]

## Paso B

Una vez que el usuario selecciono la tienda se procede a generar la nueva orden por API. [POST charges]

Nuevamente el API le contestara con un JSON con los datos de la orden creada en ComproPago.[JSON charges]

## Paso C

En este paso se le muestran las instrucciones de pago al usuario de su plataforma. Esto se puede realizar de la siguiente manera:

* [Recomendado] Insertando un iframe que invoca a la ruta de ComproPago pasandole el id de la orden que se obtuvo en la respuuesta del paso anterior (https://www.compropago.com/comprobante/?confirmation_id= ch_xxx-xxx-xxx)
* Toda la información que se encuentra en el recibo de ComproPago es obtenida como respuesta JSON en el paso anterior. Lo que le permitirá personalizar y ajustar la información conforme le sea conveniente


## Observaciones

Este flujo es un ejemplo representativo y no es requerimiento en el proceso de creación de ordenes.  







