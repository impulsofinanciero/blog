---
layout: default
root: api
group: api
subgroup: 03_updates
title: Actualizaciones al API
menu_title: Actualizaciones
menu_order: 3
menu_node: parent
---
# {{page.title}}

Su versión del API controla el funcionamiento de los diferentes recursos o endpoints del API y la información contenida en la respuesta al invocar dichos recursos (por ejemplo: las propiedades que acompañan a la respuesta o los parámetros que se envían para cada una de las peticiones, etc).

La versión (del API) que usa actualmente, fue establecida en nuestro sistema cuando se registró por primera vez. Si decide cambiar a una nueva versión del API, nuestro equipo se asegura que el cambio no afecte su código actual y que sea totalmente funcional para versiones anteriores.

En las nuevas versiones del API se pueden encontrar mejoras en cuanto a rendimiento, nuevas funcionalidades, así como otros atributos que ofrecen una respuesta más completa al invocar o hacer una petición a alguno de los recursos.

A continuación se describen las actualizaciones para la versión mas reciente del API.

## Crear un Cargo - 16/Jun/15

cambio del nombre de parámetros que se envían cuando se crea un cargo.

<div class="webhook_receptor">
<ul id="myTab0" class="nav nav-tabs">
  <li class="active"><a href="#postch11" data-toggle="tab">Versión Actual</a></li>
  <li><a href="#postch10" data-toggle="tab">Versión Anterior</a></li>
</ul>
<div class="terminal">
<div id="myTabContent0" class="tab-content">
  <div class="tab-pane fade in active" id="postch11">
  <pre class="pre">  curl -H "Accept: application/compropago" \
  -H "Content-type: application/json" \
  -u 23976112561d20: \
  -X POST \
  -d '{
    "order_id": <span class="string">"SMGCURL1"</span>,
    "order_price": <span class="boolean">75.0</span>,
    "order_name": <span class="string">"SAMSUNG GOLD CURL"</span>,
    "image_url": <span class="string">"https://test.amazon.com/5f4373"</span>,
    "customer_name": <span class="string">"Alejandra Leyva"</span>,
    "customer_email": <span class="string">"noreply@compropago.com"</span>,
    "payment_type": <span class="string">"OXXO"</span>
  }' https://api.compropago.com/v1/charges
  </pre>
  </div>
  <div class="tab-pane fade" id="postch10">
  <pre class="pre">  curl -H "Accept: application/compropago" \
  -H "Content-type: application/json" \
  -u 23976112561d20: \
  -X POST \
  -d '{
    "product_id": <span class="string">"SMGCURL1"</span>,
    "product_price": <span class="boolean">75.0</span>,
    "product_name": <span class="string">"SAMSUNG GOLD CURL"</span>,
    "image_url": <span class="string">"https://test.amazon.com/5f4373"</span>,
    "customer_name": <span class="string">"Alejandra Leyva"</span>,
    "customer_email": <span class="string">"noreply@compropago.com"</span>,
    "payment_type": <span class="string">"OXXO"</span>
  }' https://api.compropago.com/v1/charges
  </pre>
  </div>      	       
</div>
</div>
</div>


La respuesta que se obtiene al crear un cargo presenta modificaciones en algunos de los nombres de sus atributos, así como información adicional.

* La propiedad payment_id se cambió a  ``id`` y su valor tiene un prefijo que empieza con "ch_" cuya función es indicar que es un objeto cargo.
* La propiedad short_payment_id se cambió a ``short_id``.
* La propiedad payment_status se cambió a ``status``.
* El atributo creation_date se cambió a ``created`` y regresa la fecha en formato de segundos.
* El atributo expiration_date se cambió a ``exp_date`` y regresa la fecha en formato de segundos.
* Se agregó un nuevo atributo llamado ``live_mode``, que indica si el cargo fue realizado en modo de pruebas regresando un valor false y si está en modo activo regresando un valor true.
* Se cambió el nombre del objeto product_information por ``order_info`` y sus nuevos valores son ``order_id``, order_name y order_price.
* Al objeto fee_details se le agregó la propiedad ``tax``.
* Se cambió el nombre del objeto payment_instructions por ``instructions`` y para el objeto "details" que tiene embebido, se cambiaron sus propiedades a los siguientes valores: ``amount``, ``store``, ``bank_account_number`` y ``bank_name``.


<div class="webhook_receptor">
    <ul id="myTab1" class="nav nav-tabs">
      <li class="active"><a href="#crech11" data-toggle="tab">Versión Actual</a></li>
      <li><a href="#crech10" data-toggle="tab">Versión Anterior</a></li>
    </ul>

<div class="terminal">
<div id="myTabContent1" class="tab-content">
  <div class="tab-pane fade in active" id="crech11">
  <pre class="pre">    {
      "id": <span class="response_string">"ch_0991dd38-e408-4f27"</span>,
      "short_id": <span class="response_string">"00927c"</span>,
      "object": <span class="response_string">"charge"</span>,
      "status": <span class="response_string">"pending"</span>,
      "created": <span class="response_string">"1436979650"</span>,
      "exp_date": <span class="response_string">"1437066050"</span>,
      "live_mode": <span class="response_boolean">true</span>
      "order_info": {
        "order_id": <span class="response_string">"IB18S"</span>,
        "order_name": <span class="response_string">"Samsung Galaxy Gold"</span>,
        "order_price": <span class="response_string">"75.0"</span>,
        "image_url": <span class="response_string">"https://test.amazon.com/5f4373"</span>
      },
      "fee_details": {
        "amount": <span class="response_string">"5.18"</span>,
        "tax": <span class="response_string">"0.83"</span>,
        "tax_percent": <span class="response_string">"16"</span>,
        "currency": <span class="response_string">"mxn"</span>,
        "type": <span class="response_string">"compropago_fee"</span>,
        "description": <span class="response_string">"Horarios de Compropago"</span>,
        "amount_refunded": <span class="response_boolean">0</span>
      },
      "instructions":{
        "description": <span class="response_string">"Para que el pago sea valido debes pagar ..."</span>,
        "step_1": <span class="response_string">"Ir a la caja OXXO ..."</span>,
        "step_2": <span class="response_string">"Solicitar deposito ..."</span>,
        "step_3": <span class="response_string">"Deposite la cantidad ..."</span>,
        "note_extra_comition": <span class="response_string">"Las tiendas OXXO cobran en caja una comisión de 7 pe.."</span>,
        "note_expiration_date": <span class="response_string">"Orden válida antes de 01/10/2013"</span>,
        "note_confirmation": <span class="response_string">"Tu pago será confirmado a través de SMS y email"</span>,
        "details":{
          "amount": <span class="response_string">"75.0"</span>,
          "store": <span class="string">"OXXO"</span>,
          "bank_account_number": <span class="string">"xxxx xxxx xxxx xxxx"</span>,
          "bank_name": <span class="string">"Scotiabank"</span>
        }
      }
    }
  </pre>
  </div>	
  <div class="tab-pane fade" id="crech10">
  <pre class="pre">    {
      "payment_id": <span class="response_string">"c0991dd38-e408-4f27"</span>,
      "short_payment_id": <span class="response_string">"00927c"</span>,
      "payment_status": <span class="response_string">"PENDING"</span>,
      "creation_date": <span class="response_string">"2013-09-30T04:46:04Z"</span>,
      "expiration_date": <span class="response_string">"2013-10-01T04:46:04Z"</span>,
      "product_information": {
        "product_id": <span class="response_string">"IB18S"</span>,
        "product_name": <span class="response_string">"Samsung Galaxy Gold"</span>,
        "product_price": <span class="response_string">"75.0"</span>,
        "image_url": <span class="response_string">"https://test.amazon.com/5f4373"</span>
      },
      "payment_instructions":{
        "description": <span class="response_string">"Para que el pago sea valido debes pagar ..."</span>,
        "step_1": <span class="response_string">"Ir a la caja OXXO ..."</span>,
        "step_2": <span class="response_string">"Solicitar deposito ..."</span>,
        "step_3": <span class="response_string">"Deposite la cantidad ..."</span>,
        "note_extra_comition": <span class="response_string">"Las tiendas OXXO cobran en caja una comisión de 7 pesos"</span>,
        "note_expiration_date": <span class="response_string">"Orden válida antes de 01/10/2013"</span>,
        "note_confirmation": <span class="response_string">"Tu pago será confirmado a través de SMS y email"</span>,
        "details":{
          "payment_amount": <span class="response_string">"75.0"</span>,
          "payment_store": <span class="response_string">"OXXO"</span>,
          "bank_account_number": <span class="response_string">"xxxx xxxx xxxx xxxx"</span>,
          "bank_name": <span class="response_string">"Scotiabank"</span>
        }
      }
    }
  </pre>
  </div>      	       
</div>
</div>
</div>

## Verificar Cargo - 16/Jun/15

Cambio a la respuesta de verificación de un cargo.

Regresamos como respuesta solo un objeto cargo con sus respectivas propiedades.
El atributo created_at cambio a created y regresa la fecha en formato de segundos.
Agregamos la propiedad livemode, nos indica si el cargo fue realizado en modo de pruebas retornando un valor false y si esta en modo activo nos regresa un valor true.
Al objeto fee_details le agregamos la propiedad tax.
Se cambio el nombre del objeto payment_details por order_info que contienen order_id, order_name y order_price.
Se agrego un nuevo objeto llamado customer que contiene customer_name, customer_email y customer_phone.
Agregamos la propiedad api_version.


<div class="webhook_receptor">
    <ul id="myTab2" class="nav nav-tabs">
      <li class="active"><a href="#verch11" data-toggle="tab">Versión Actual</a></li>
      <li><a href="#verch10" data-toggle="tab">Versión Anterior</a></li>
    </ul>

<div class="terminal">
<div id="myTabContent2" class="tab-content">
  <div class="tab-pane fade in active" id="verch11">
  <pre class="pre">    {        
      "id": <span class="response_string">"ch_fe92a1a5-abec-49e3-877c-5024c1464dc3"</span>,
      "type": <span class="response_string">"charge.pending"</span>,
      "object": <span class="response_string">"charge"</span>,
      "created": <span class="response_string">"1424024955774"</span>,
      "paid": <span class="response_boolean">true</span>,
      "amount": <span class="response_string">"150.00"</span>,
      "livemode": <span class="response_boolean">true</span>,
      "currency": <span class="response_string">"mxn"</span>,
      "refunded": <span class="response_boolean">false</span>,
      "fee": <span class="response_string">"7.50"</span>,
      "fee_details": {
        "amount": <span class="response_string">"7.50"</span>,
        "currency": <span class="response_string">"mxn"</span>,
        "type": <span class="response_string">"compropago_fee"</span>,
        "description": <span class="response_string">"Honorarios de ComproPago"</span>,
        "application": <span class="response_boolean">null</span>,
        "amount_refunded": <span class="response_boolean">0</span>,
        "tax": <span class="response_string">"0.944"</span>
      }
      "order_info": {
        "order_id": <span class="response_string">"SMGCURL1"</span>,
        "order_price": <span class="response_string">"150.00"</span>,
        "order_name": <span class="response_string">"SAMSUNG GOLD CURL"</span>,
        "payment_method": <span class="response_string">"cash"</span>,
        "store": <span class="response_string">"OXXO"</span>,
        "country": <span class="response_string">"MX"</span>,
        "image_url": <span class="response_string">"https://test.amazon.com/5f4373"</span>,
        "success_url": <span class="response_string">""</span>
      },
      "customer": {
        "customer_name": <span class="response_string">"Alejandra Leyva"</span>,
        "customer_email": <span class="response_string">"noreply@compropago.com"</span>,
        "customer_phone": <span class="response_string">"2221515801"</span>
      },
      "captured": <span class="response_boolean">true</span>,
      "failure_message": <span class="response_boolean">null</span>,
      "failure_code": <span class="response_boolean">null</span>,
      "amount_refunded": <span class="response_boolean">0</span>,
      "description": <span class="response_string">"Estado del pago - ComproPago"</span>,
      "dispute": <span class="response_boolean">null</span>,
      "api_version": <span class="response_string">"1.1"</span>
    }
  </pre>
  </div>
  <div class="tab-pane fade" id="verch10">
    <pre class="pre">    {
      "type":"charge.pending",
      "object":"event",
      "data": {
        "object": {
          "id": <span class="response_string">"fe92a1a5-abec-49e3-877c-5024c1464dc3"</span>,
          "object": <span class="response_string">"charge"</span>,
          "created_at": <span class="response_string">"2013-12-09T18:59:28.048Z"</span>,
          "paid": <span class="response_boolean">true</span>,
          "amount": <span class="response_string">"150.00"</span>,
          "currency": <span class="response_string">"mxn"</span>,
          "refunded": <span class="response_boolean">false</span>,
          "fee": <span class="response_string">"7.50"</span>,
          "fee_details": {
            "amount": <span class="response_string">"7.50"</span>,
            "currency": <span class="response_string">"mxn"</span>,
            "type": <span class="response_string">"compropago_fee"</span>,
            "description": <span class="response_string">"Honorarios de ComproPago"</span>,
            "application": <span class="response_boolean">null</span>,
            "amount_refunded": <span class="response_boolean">0</span>,
          },
          "payment_details": {
            "object": <span class="response_string">"cash"</span>,
            "store": <span class="response_string">"OXXO"</span>,
            "country": <span class="response_string">"MX"</span>,
            "product_id": <span class="response_string">"SMGCURL1"</span>,
            "product_price": <span class="response_string">"150.00"</span>,
            "product_name": <span class="response_string">"SAMSUNG GOLD CURL"</span>,
            "image_url": <span class="response_string">"https://test.amazon.com/5f4373"</span>,
            "success_url": <span class="response_string">""</span>,
            "customer_name": <span class="response_string">"Alejandra Leyva"</span>,
            "customer_email": <span class="response_string">"noreply@compropago.com"</span>,
            "customer_phone": <span class="response_string">"2221515801"</span>,
          },
          "captured": <span class="response_boolean">true</span>,
          "failure_message": <span class="response_boolean">null</span>,
          "failure_code": <span class="response_boolean">null</span>,
          "amount_refunded": <span class="response_boolean">0</span>,
          "description": <span class="response_string">"Estado del pago - ComproPago"</span>,
          "dispute": <span class="response_boolean">null</span>
        }
      }
    }	    
    </pre>
  </div>
 </div>
</div>
</div>

## Instrucciones SMS - 16/Jun/15

Cambio la respuesta que se recibe al enviar un sms.

Se regresa en el objeto data un objeto de tipo charge con sus respectivas propiedades id y short_id.

<div class="webhook_receptor">
	<ul id="myTab3" class="nav nav-tabs">
	  <li class="active"><a href="#smsch11" data-toggle="tab">Versión Actual</a></li>
	  <li><a href="#smsch10" data-toggle="tab">Versión Anterior</a></li>
	</ul>
<div class="terminal">
<div id="myTabContent3" class="tab-content">
  <div class="tab-pane fade in active" id="smsch11">
  <pre class="pre">    {
      "type": <span class="response_string">"sms.success"</span>,
      "object": <span class="response_string">"event"</span>,
      "data": {
        "object": {
          "id": <span class="response_string">"ch_f4172ff7-9125-4206-99c7-151480"</span>,
          "object": <span class="response_string">"charge"</span>,
          "short_id": <span class="response_string">"04c651"</span>
        }
      }
    }
  </pre>
  </div>
  <div class="tab-pane fade" id="smsch10">
  <pre class="pre">    {
      "type": <span class="response_string">"charge_sms.success"</span>,
      "object": <span class="response_string">"event"</span>,
      "payment": {
        "id": <span class="response_string">"f4172ff7-9125-4206-99c7-151480"</span>,
        "short_id": <span class="response_string">"04c651"</span>
      }
    }
  </pre>
  </div>
</div>
</div>
</div>

## Webhooks - 16/Jun/15

Cambio la respuesta del objeto Webhook.

<div class="webhook_receptor">
  <ul id="myTab4" class="nav nav-tabs">
    <li class="active"><a href="#webho11" data-toggle="tab">Versión Actual</a></li>
    <li><a href="#webho10" data-toggle="tab">Versión Anterior</a></li>
  </ul>
<div class="terminal">
<div id="myTabContent4" class="tab-content">
  <div class="tab-pane fade in active" id="webho11">
  <pre class="pre">   {
     "id": <span class="response_string">"ch_fe92a1a5-abec-49e3-877c-5024c1464dc3"</span>,
     "type": <span class="response_string">"charge.pending"</span>,
     "object": <span class="response_string">"charge"</span>,
     "created": <span class="response_string">"1424024955774"</span>,
     "paid": <span class="response_boolean">true</span>,
     "amount": <span class="response_string">"150.00"</span>,
     "livemode": <span class="response_boolean">true</span>,
     "currency": <span class="response_string">"mxn"</span>,
     "refunded": <span class="response_boolean">false</span>,
     "fee": <span class="response_string">"7.50"</span>,
     "fee_details": {
       "amount": <span class="response_string">"7.50"</span>,
       "currency": <span class="response_string">"mxn"</span>,
       "type": <span class="response_string">"compropago_fee"</span>,
       "description": <span class="response_string">"Honorarios de ComproPago"</span>,
       "application": <span class="response_boolean">null</span>,
       "amount_refunded": <span class="response_boolean">0</span>,
       "tax": <span class="response_string">"0.944"</span>
     }
     "order_info": {
       "order_id": <span class="response_string">"FBIPC5"</span>,
       "order_price": <span class="response_string">"1000.00"</span>,
       "order_name": <span class="response_string">"Nokia 5520"</span>,
       "payment_method": <span class="response_string">"cash"</span>,
       "store": <span class="response_string">"Waltmart"</span>,
       "country": <span class="response_string">"MX"</span>,
       "image_url": <span class="response_string">"https://test.amazon.com/5f4373"</span>,
       "success_url": <span class="response_string">"https://mystore.com/success-url"</span>
     },
     "customer": {
       "customer_name": <span class="response_string">"Alejandra Leyva"</span>,
       "customer_email": <span class="response_string">"noreply@compropago.com"</span>,
       "customer_phone": <span class="response_string">"2221515801"</span>
     },
     "captured": <span class="response_boolean">true</span>,
     "failure_message": <span class="response_boolean">null</span>,
     "failure_code": <span class="response_boolean">null</span>,
     "amount_refunded": <span class="response_boolean">0</span>,
     "description": <span class="response_string">"Estado del pago - ComproPago"</span>,
     "dispute": <span class="response_boolean">null</span>,
     "api_version": <span class="response_string">"1.1"</span>
   }
  </pre>
  </div>
  <div class="tab-pane fade" id="webho10">
  <pre class="pre">   {
     "type": <span class="response_string">"charge.pending"</span>,
     "object": <span class="response_string">"event"</span>,
     "data": {
       "object": {
         "id": <span class="response_string">"2a6dc1c2-45e6-4a95-85e0-c111acc8dfc6"</span>,
         "short_id": <span class="response_string">"2bbdc1"</span>,
         "object": <span class="response_string">"charge"</span>,
         "created": <span class="response_string">"2013-09-17T23:02:41.860Z"</span>,
         "paid": <span class="response_boolean">true</span>,
         "amount": <span class="response_string">"1000.00"</span>,
         "currency": <span class="response_string">"mxn"</span>,
         "refunded": <span class="response_boolean">false</span>,
         "fee": <span class="response_string">"32.00"</span>,
         "store_mode": <span class="response_string">"active"</span>,
         "fee_details": {
           "amount": <span class="response_string">"32.00"</span>,
           "currency": <span class="response_string">"mxn"</span>,
           "type": <span class="response_string">"compropago_fee"</span>,
           "description": <span class="response_string">"Honorarios de ComproPago"</span>,
           "application": <span class="response_boolean">null</span>,
           "amount_refunded": <span class="response_boolean">0</span>
         },
         "payment_details": {
           "object": <span class="response_string">"cash"</span>,
           "store": <span class="response_string">"Waltmart"</span>,
           "country": <span class="response_string">"MX"</span>,
           "product_id": <span class="response_string">"FBIPC5"</span>,
           "product_price": <span class="response_string">"1000.00"</span>,
           "product_name": <span class="response_string">"Nokia 5520"</span>,
           "image_url": <span class="response_string">"https://aws.amazon.com/5f4373"</span>,
           "success_url": <span class="response_string">"https://mystore.com/success-url"</span>,
           "customer_name": <span class="response_string">"Alejandra Leyva"</span>,
           "customer_email": <span class="response_string">"ale.leyva231@ejemplo.com"</span>,
           "customer_phone": <span class="response_string">"2221515467"</span>
         },
         "captured": <span class="response_boolean">true</span>,
         "failure_message": <span class="response_boolean">null</span>,
         "failure_code": <span class="response_boolean">null</span>,
         "amount_refunded": <span class="response_boolean">0</span>,
         "description": <span class="response_string">"Estado del pago - ComproPago"</span>,
         "dispute": <span class="response_boolean">null</span>
       }
     }
   }
  </pre>
  </div>
</div>
</div>
</div>