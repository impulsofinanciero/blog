---
layout: default
root: api
group: api
subgroup: 04_Errors
title: Errores
menu_title: Errores
menu_order: 4
menu_node: parent
---
# {{page.title}}

Si alguna de tus llamadas al API no resulta exitosa, es probable que obtengas uno de los siguientes errores:

<section class="card endpoint">
  <div style="border-radius: 4px 4px 4px 4px;" class="card-description ep-description">
	<table>
	  <tbody>
	  	<tr style="line-height: 30px;">
	  	  <th style="color:#0090e6">Código</th>
	  	  <th style="color:#0090e6">Descripción</th>
	  	</tr>
		<tr>
	      <th>4001</th>
	      <td style="width:90%">Llave no encontrada</td>  
	    </tr>
	    <tr>
	      <th>5001</th>
	      <td style="width:90%">ID de pago no encontrado</td>
	    </tr>
	    <tr>
	      <th>5002</th>
	      <td style="width:90%">Tienda no encontrada</td>
	    </tr>
	    <tr>
	      <th>5003</th>
	      <td style="width:90%">El precio del producto excede el límite por transacción en el establecimiento seleccionado</td>
	    </tr>
	    <tr>
	      <th>6001</th>
	      <td style="width:90%">Hubo un problema con el proveedor de SMS y el mensaje no se envío</td>
	    </tr> 
	    <tr>
	      <th>6002</th>
	      <td style="width:20%">Se ha superado el número de envios SMS, máximo 2 mensajes por orden de pago</td>
	    </tr>
	    <tr>
	      <th>6003</th>
	      <td>Compañia celular inválida, soportamos: TELCEL, MOVISTAR, IUSACELL, UNEFON y NEXTEL</td>
	    </tr>
	    <tr>
	      <th>6004</th>
	      <td>Número de celular no válido, probablemente el número contiene menos o más de 10 dígitos</td>
	    </tr>
	  </tbody>
	</table>
  </div>
</section>