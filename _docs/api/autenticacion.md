---
layout: default
root: api
group: api
subgroup: 02_Autenticacion
title: Autenticación
menu_title: Autenticación
menu_order: 2
menu_node: parent
---
# {{page.title}}

Ponemos a tu disposición dos pares de llaves -API Keys- en la sección <a href="https://compropago.com/panel/configuracion" target="_new">panel/configuración</a>, con ellas puedes interactuar con nuestro sistema en sus diferentes ``modos de operación``.

Es posible utilizar más de una llave al mismo tiempo; es decir, puedes realizar cargos en modo activo o producción y al mismo tiempo tu equipo de desarrollo puede hacer cargos de prueba sin afectar la configuración de tu aplicación.

La autenticación de tu aplicación con ComproPago es por medio de <a href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="_new">HTTP Basic Authentication</a>: proporciona alguna de tus llaves como **username**, no necesitas proporcionar un password.

Por ejmeplo, suponiendo que 687881193b2423 es tu llave en modo activo y deseas verificar un cargo mediante el endpoint ``v1/charges/{payment_id}``, usando CURL desde tu terminal, copia y pega el siguiente código:

{% highlight shell %}

curl https://api.compropago.com/v1/charges/c90870de-55a2-4b50-bd6b-9c7887787b35 \
-u 687881193b2423:

{% endhighlight %}

El caracter -u indica que debes suministrar una cadena (string) compuesta por un username y un password (el caracter : después del username evita que el sistema exija un password).

Nota: Asegurate de mantener tus llaves en secreto y no las compartas con desconocidos. Realiza tus llamadas a través de ``https`` para encriptar tu información al momento de procesarla.

