---
layout: default
icon: prestashop
root: plugins
sidebarExtras: plugins

group: prestashop
subgroup: PrestaShop 1.6.1
title: Plugin para Prestashop
menu_title: Introducción
menu_order: 1
menu_node: 
---
{% assign plugin = site.data.plugins[page.group] %}

# {{page.title}}


## Descripción

Este modulo provee el servicio de ComproPago para poder generar intenciones de pago dentro de la plataforma PrestaShop. una vez instalado el plugin podra recibir pagos en OXXO, 7Eleven y muchas tiendas más en todo México.


{% include ayuda/helpLinks.md %}
			 



## Guía de Versiones

Última Versión: [{{plugin.version}}]({{plugin.download}})

| Version | Status      |  PrestaShop   | PHP     | Archivo                    | 
|---------|-------------|---------------|---------|----------------------------|
| 1.0.0   | EOL		| 1.5.x a 1.6.0 | 5.2 +   | [v1.0.0][compropago-1-0-0] |
| 2.0.2   | EOL      | 1.6.1.x + 	| 5.4 +   | [v2.0.2][compropago-2-0-2] |
| 2.0.x   | Latest      | 1.6.1.x + 	| 5.5 +   | [v2.0.x][compropago-2-0-x] |



[compropago-2-0-x]: https://s3.amazonaws.com/compropago/plugins/prestashop/compropago-ps-2-0-x.zip
[compropago-2-0-2]: https://s3.amazonaws.com/compropago/plugins/prestashop/compropago-ps-2-0-2.zip
[compropago-1-0-0]: https://s3.amazonaws.com/compropago/plugins/prestashop/compropago-ps-1-0-0.zip