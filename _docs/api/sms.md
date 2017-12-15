---
layout: default
root: api
group: api
subgroup: 07_SMS
title: Enviar instrucciones de pago vía SMS
menu_title: Instruciones SMS
menu_order: 7
menu_node: parent
---
# {{page.title}}

Ofrece a tus usuarios la posibilidad de recibir las instrucciones de pago directo en su teléfono celular. Los únicos campos requeridos son el número de celular y su compañia teléfonica.

Nota: los mensajes de texto no tienen costo.

**POST /v1/charges/{payment_id}/sms**

Ejemplo:

{% highlight shell %}

curl https://api.compropago.com/v1/charges/f4172ff7-9125-4206-99c7-151480b036ad/sms \
     -u 687881193b2423: \
     -d customer_phone=2221515805 \
     -d customer_company_phone=TELCEL

{% endhighlight %}

Respuesta:

{% highlight JSON %}

{
  "type": "sms.success",
  "object": "event",
  "data": {
    "object": {
      "id": "ch_f4172ff7-9125-4206-99c7-151480",
      "object": "charge"
      "short_id": "04c651",
    }           
  }
}
        

{% endhighlight %}


Campos requeridos

customer_phone	string	Teléfono celular del cliente

Campos opcionales

customer_company_phone	string	Compañía: "TELCEL" "MOVISTAR" "IUSACELL" "NEXTEL"
