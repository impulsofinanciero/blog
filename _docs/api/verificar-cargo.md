---
layout: default
root: api
group: api
subgroup: 06_Verify
title: Verificar un cargo existente
menu_title: Verificar cargo
menu_order: 6
menu_node: parent
---
# {{page.title}}

Verifica y obtén los detalles de un cargo existente, el único campo requerido es el `payment_id` que acompaña a cada orden de pago.

Nota: Este endpoint funciona solamente con la Llave Privada.

**GET /v1/charges/{payment_id}**

Ejemplo:

{% highlight shell %}

curl https://api.compropago.com/v1/charges/c90870de-55a2-4b50-bd6b-9c7887787b35 \
 -u 687881193b2423:

{% endhighlight %}

Respuesta:

{% highlight JSON %}

 {        
        "id": "ch_fe92a1a5-abec-49e3-877c-5024c1464dc3", 
        "type": "charge.pending",
        "object": "charge",            
        "created": "1424024955774",
        "paid": true,
        "amount": "150.00",
        "livemode": true,
        "currency": "mxn",
        "refunded": false,
        "fee": "7.50",
        "fee_details": {
          "amount": "7.50",
          "currency": "mxn",
          "type": "compropago_fee",
          "description": "Honorarios de ComproPago",
          "application": null,
          "amount_refunded": 0,
          "tax": "0.944"
        }
        "order_info": {
          "order_id": "SMGCURL1",
          "order_price": "150.00",
          "order_name": "SAMSUNG GOLD CURL",
          "payment_method": "cash",
          "store": "OXXO",
          "country": "MX",              
          "image_url": "https://test.amazon.com/5f4373",
          "success_url": ""              
        },
        "customer": {
          "customer_name": "Alejandra Leyva",
          "customer_email": "noreply@compropago.com",
          "customer_phone": "2221515801",
        },
        "captured": true,
        "failure_message": null,
        "failure_code": null,
        "amount_refunded": 0,
        "description": "Estado del pago - ComproPago",
        "dispute": null,
        "api_version": "1.1",
      }
        

{% endhighlight %}

| Campos Requeridos | |
| payment_id	| string ID único del pago |
