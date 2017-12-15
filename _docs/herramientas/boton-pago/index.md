---
root: general
layout: default
group: general
subgroup: Herramientas
title: Botón de pago
menu_title: Botón de pago
menu_order: 1
menu_node: 
---

# {{page.title}}

El botón de pago es la manera más sencilla y rápida de recibir pagos en efectivo. Para visualizar su funcionamiento hemos creado el siguiente <a href="http://demo.compropago.com/" target="_new">ejemplo</a>.

![btn]({{site.baseurl}}/assets/images/docs/herramientas/payment-green-btn.png)

Esta solución es ideal si tienes un sitio web que tu administras, un blog o una página de Facebook para vender.

### Características

* No necesitas conocimientos de programación
* ComproPago se encarga de la seguridad del pago y la protección de los datos
* Tus clientes no necesitan registrarse para pagar
* Sólo necesitas copiar y pegar un enlace de pago


## Crear un botón de pago


1.- Ingresa a la sección panel/botones y da click en Agregar Botón de Pago.

![btn]({{site.baseurl}}/assets/images/docs/herramientas/guide_step1.jpg)

2.- Incluye al menos el nombre y el precio de tu artículo y da click en Crear Botón.

![btn]({{site.baseurl}}/assets/images/docs/herramientas/guide_step2.jpg)

3.- El nuevo botón aparecerá en la lista de botones de pago, da click en el botón Compartir.

![btn]({{site.baseurl}}/assets/images/docs/herramientas/guide_step3.jpg)

4.- ¡Listo! Copia y pega en tu sitio web alguno de los enlaces o el código para generar un botón.

![btn]({{site.baseurl}}/assets/images/docs/herramientas/guide_step4.jpg)



Puedes cambiar la apariencia del botón, ajustando el CSS que te proporcionamos al de tu sitio web. También puedes usar la siguiente imagen con el logo de ComproPago y el nombre de los puntos de cobro donde tus clientes pueden pagar:

![btn]({{site.baseurl}}/assets/images/docs/herramientas/compropago-boton-pago.png)


## Campos requeridos y opcionales

<section class="card endpoint">
  <header style="height: 31px;">
    <h2>
      <span>Definición de los campos en formulario</span>
    </h2>
  </header>
  <div class="card-description ep-description">
    <table>
      <caption><strong>Campos requeridos</strong></caption>
      <tbody>
      <tr>
        <th style="width:23%">order_price</th>
        <td>float</td>
        <td style="width:60%">Precio de la orden o servicio</td>
      </tr>
      <tr>
        <th style="width:23%">order_name</th>
        <td> string</td>
        <td style="width:70%">Nombre de la orden o servicio</td>
      </tr>
      <tr>
        <th style="width:23%">customer_name</th>
        <td>string</td>
        <td style="width:70%">En caso de que hayas creado el botón para un cliente determinado, agrega su nombre.</td>
      </tr>
      <tr>
        <th style="width:23%">customer_email</th>
        <td>string</td>
        <td style="width:70%">En caso de que hayas creado el botón para un cliente determinado, agrega su email.</td>
      </tr>
      </tbody>
    </table>
    <hr>
    <p style="color:#0090e6"><b>Campos opcionales</b></p>
    <table>
      <tbody>
      <tr>
        <th style="width:23%">order_id</th>
        <td>string</td>
        <td style="width:70%">ID de la orden o servicio. Este campo que te permite identificar tu orden</td>
      </tr>
      <tr>
        <th>image_url</th>
        <td>string</td>
        <td>Imagen del producto o servicio. Incluye una imagen de tu producto, brindará más confianza a tus clientes.</td>
      </tr>
      <tr>
        <th>success_url</th>
        <td>string URL</td>
        <td>URL de éxito. Agrega una URL para redireccionar a tu cliente a tu sitio web cuando la orden de pago se haya realizado con éxito.</td>
      </tr>
      <tr>
        <th>failed_url</th>
        <td>string URL</td>
        <td>URL de error. Agrega una URL para redireccionar a tu cliente a una página con un mensaje personalizado de error en caso de que exista algún problema en el proceso de pago.</td>
      </tr>
      </tbody>
    </table>
  </div>
</section>

{% include ayuda/helpLinks.md %}