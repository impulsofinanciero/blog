---
layout: default
root: api
group: api
subgroup: 01_Introduction
title: ComproPago REST API
menu_title: Introducción
menu_order: 1
menu_node: parent
---
# {{page.title}}

## Introducción

ComproPago te ofrece un API tipo <a href="https://www.wikiwand.com/en/Representational_state_transfer" target="_new">REST</a> para integrar pagos en efectivo en tu comercio electrónico o tus aplicaciones.

La autenticación es vía HTTP por medio de llaves -API Keys- tanto en modo de pruebas como en modo activo. El API cuenta con métodos para accesar a los diferentes recursos -API Endpoints- los cuales actualmente te permiten realizar diversas operaciones, desde generar órdenes de pago hasta enviar instrucciones de pago vía SMS.

Nota: Si no cuentas con un desarrollador o requieres recibir pagos en seguida, te sugerimos procesar cargos mediante un ``botón de pago``, no necesitas hábilidades de programación y es tan sencillo como copiar y pegar una línea de código.

## URL base

La URL base del API es ``https://api.compropago.com``, recomendamos que todas las llamadas se realicen mediante ``https`` para reforzar la protección de tu información.

## Resumen de los recursos disponibles

<table class="table">
  <tbody>
  	<tr>
      <th style="background:#f4f4f4">Método</th>
      <th style="background:#f4f4f4">URL</th>
      <th style="background:#f4f4f4">Descripción</th>
    </tr>
    <tr>
      <td class="left-table-column">POST</td>
      <td class="type-table-column"><code>/v1/charges</code></td>
      <td class="right-table-column">crear un cargo</td>
    </tr>
    <tr>
      <td class="left-table-column">GET</td>
      <td class="type-table-column"><code>/v1/charges/{payment_id}</code></td>
      <td class="right-table-column">verificar un cargo existente</td>
    </tr>
    <tr>
      <td class="left-table-column">POST</td>
      <td class="type-table-column"><code>/v1/charges/{payment_id}/sms</code></td>
      <td class="right-table-column">enviar instrucciones vía SMS</td>
    </tr>
</tbody>
</table>

Actualmente estamos trabajando en incrementar los recursos del API para hacer más fácil la interacción de tu aplicación con ComproPago.

## Cómo usar los ejemplos del API

Para poder hacer uso de los ejemplos se requiere una terminal, incluida dentro de las utilidades de los sistemas operativos MacOSX y Linux, para el caso de Windows se requiere instalar <a href="https://curl.haxx.se/download.html" target="_new">cURL</a> en sus versión para Win32 o Win64 según sea el caso.

Para el siguiente ejemplo se ejecuta la creación de un cargo.

![Ejemplo Consulta]({{site.baseurl}}/assets/images/docs/api/intro_ejemplo-d333bb6c8310185ba0a71fbe8d776cea.png)

{% include ayuda/helpLinks.md %}