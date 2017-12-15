---
layout: default
icon: magento
root: plugins
sidebarExtras: plugins

group: magento
subgroup: 03_Config
title: Configuración
menu_title: Configuración
menu_order: 3
menu_node: parent
---

# {{page.title}}

1.- Para iniciar la configuración ir a **System -> Configuration -> Sales -> Payment Methods**. Seleccionar **ComproPago**.

![paymentmethod](https://cloud.githubusercontent.com/assets/1311937/11578545/3f896320-99ec-11e5-9900-f9268b05fc58.png)

***Nota:*** La opción de **Habilitar Logos** es para mostrar las imagenes de los establecimientos con los que procesamos pagos

2.- Agregar la **llave privada** y **llave pública**, esta se puede encontrar en el apartado de configuración dentro del panel de control de ComproPago. [https://compropago.com/panel/configuracion](https://compropago.com/panel/configuracion)
<br />
![keys](https://cloud.githubusercontent.com/assets/1311937/11645106/35a6f52e-9d17-11e5-99d3-cfe432b3f30c.png)





## Sincronización con la notificación Webhook

1.- Ir al area de **Webhooks** en ComproPago [https://compropago.com/panel/webhooks](https://compropago.com/panel/webhooks)

2.- Introducir la dirección: ***[direcciondetusitio.com]***/index.php/compropago/webhook/ 
   Para el caso en donde exista un idioma instalado la dirección deberia ser: ***[direcciondetusitio.com]***/index.php/compropago/webhook/

![addwbh](https://cloud.githubusercontent.com/assets/1311937/11645166/b7f3a658-9d17-11e5-87f4-3ddc51b50635.png)<br />

3.- Dar click en el botón "Probar" y verificamos que el servidor de la tienda esta respondiendo, debera aparecer el mensaje de "Order not valid"
![webhook](https://cloud.githubusercontent.com/assets/1311937/11578636/d1597bf0-99ec-11e5-8def-fc44e6ca603e.png)

Una vez completado estos pasos el proceso de instalación queda completado.


