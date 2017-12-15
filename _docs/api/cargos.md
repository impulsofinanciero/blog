---
layout: default
root: api
group: api
subgroup: 05_Charges
title: Crear un cargo
menu_title: Crear un cargo
menu_order: 5
menu_node: parent
---
# {{page.title}}

Para realizar un cobro en efectivo, crea un cargo usando al menos los campos requeridos. Cada cargo está identificado por un payment_id único, una vez creado puedes verificarlo por medio del endpoint /v1/charges/{payment_id}.


<section class="card endpoint">
  <header>
    <h2>
      <span class="ep-type">POST</span>
      <code>/v1/charges</code>
    </h2>
  </header>
  <div class="card-info">
    <p style="color:#0090e6"><b>Ejemplo</b></p>
    <pre>curl -H "Accept: application/compropago" \
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
    <!-- <div id="accordion3" class="accordion">
      <a class="accordion-toggle collapsed btn btn-mini btn-primary" data-toggle="collapse" data-parent="#accordion3" href="#collapseThree">Respuesta</a>
      <div id="collapseThree" class="accordion-body collapse" style="height:0px;">-->
        <br>
        <p style="color:#0090e6"><b>Respuesta</b></p>
        <pre>        {
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
            "order_price": <span class="response_string">"75.0"</span>
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
            "description": <span class="response_string">"Para que el 
              pago sea valido debes pagar ..."</span>,
            "step_1": <span class="response_string">"Ir a la caja OXXO ..."</span>,
            "step_2": <span class="response_string">"Solicitar deposito ..."</span>,
            "step_3": <span class="response_string">"Deposite la cantidad ..."</span>,
            "note_extra_comition": <span class="response_string">"Las tiendas OXXO 
              cobran en caja una comisión de 7 pesos"</span>,
            "note_expiration_date": <span class="response_string">"Orden válida 
              antes de 01/10/2013"</span>,
            "note_confirmation": <span class="response_string">"Tu pago será 
              confirmado a través de SMS y email"</span>
            "details":{
              "amount": <span class="response_string">"75.0"</span>,
              "store": <span class="string">"OXXO"</span>,
              "bank_account_number": <span class="string">"xxxx xxxx xxxx xxxx"</span>,
              "bank_name": <span class="string">"Scotiabank"</span>
            }
          }
        }
        </pre>
      <!--</div>
    </div>-->
  </div>
  <div class="card-description ep-description">
    <table>
      <caption><strong>Campos requeridos</strong></caption>
      <tbody>
        <tr>
          <th>order_price</th>
          <td>float</td>
          <td style="width:60%">Precio de la orden o servicio</td>
        </tr>
        <tr>
          <th>order_name</th>
          <td> string</td>
          <td>Nombre de la orden o servicio</td>
        </tr>
        <tr>
          <th>customer_name</th>
          <td>string</td>
          <td>Nombre del cliente</td>
        </tr>
        <tr>
          <th>customer_email</th>
          <td>string</td>
          <td>Email del cliente</td>
        </tr> 
        <tr>
          <th>payment_type</th>
          <td>string</td>
          <td>
            <!-- <div id="accordion1" class="accordion">
              <a class="accordion-toggle collapsed btn btn-mini" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne" style="margin-top:12px; z-index:3px">Punto de cobro</a>
              <div id="collapseOne" class="accordion-body collapse" style="height:0px;">-->
                <table>
                	<tbody>
                		<tr>
                		  <td><code>"OXXO"</code></td>
                		  <td><code>"SEVEN_ELEVEN"</code></td>
                		  <td><code>"EXTRA"</code></td>
                		  
                		</tr>
                		<tr>
                		  <!-- <td><code>"WALMART"</code></td> -->
                		  <!--<td><code>"SORIANA"</code></td>-->
                		  <td><code>"CHEDRAUI"</code></td>
                		  
                		</tr>
                		<!-- <tr>
                		  <td><code>"SAMS_CLUB"</code></td>
                		  <td><code>"BODEGA_AURRERA"</code></td>
                		  <td><code>"SUPERAMA"</code></td>
                		  
                		</tr> -->
                		<tr>
                		  <td><code>"ELEKTRA"</code></td>
                		  <td><code>"COPPEL"</code></td>
                		</tr>
                		<tr>
                		  <td><code>"FARMACIA_BENAVIDES"</code></td>
                		  <!-- <td><code>"FARMACIA_GUADALAJARA"</code></td>-->
                		</tr>
                		<tr>
                		  <td><code>"FARMACIA_ESQUIVAR"</code></td>
                		</tr>
                	</tbody>
                </table>
                <br>
              <!--</div>
            </div>-->
          </td>
        </tr>     
      </tbody>
    </table>
    
    <!-- <div id="accordion2" class="accordion">
      <a class="accordion-toggle collapsed btn btn-mini" data-toggle="collapse" data-parent="#accordion2" style="margin:0px; color: #0064d8; font-weight:bold; text-decoration: none;" href="#collapseTwo">Campos opcionales</a>
      <div id="collapseTwo" class="accordion-body collapse" style="height:0px;">-->
      <hr>
      <p style="color:#0090e6"><b>Campos opcionales</b></p>
	    <table>
	      <tbody>
	        <tr>
	          <th style="width:23%">order_id</th>
	          <td>string</td>
	          <td style="width:70%">ID de la orden o servicio</td>
	        </tr>
	        <tr>
	          <th>image_url</th>
	          <td>string</td>
	          <td>Imagen del producto o servicio</td>
	        </tr>
	      </tbody>
	    </table>
      <!--</div>
    </div>-->
  </div>
</section>