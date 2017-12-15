---
layout: default
icon: magento
root: plugins
sidebarExtras: plugins

group: magento
subgroup: 03_Config
title: Pasos para actualizar plugin
menu_title: Actualizar
menu_order: 4
menu_node: parent
---

# {{page.title}}



1.- Si ya tenemos instalado Compropago en su versión anterior [v0.0.1](https://github.com/compropago/plugin-magento-deprecated), para eliminarlo vamos a realizar un borrado de los siguientes archivos.

![files](https://cloud.githubusercontent.com/assets/1311937/11634984/5e9a7a66-9cd9-11e5-8583-c93bef106696.png)

2.- Una vez que eliminamos los archivos anteriores, vamos al panel de administración de Magento, **System -> Cache Management** y limpiar la cache de todos los directorios. 

![cache](https://cloud.githubusercontent.com/assets/1311937/11644976/3f863196-9d16-11e5-9068-03120e99720c.png)<br />

3.- Ahora eliminamos el webhook que dimos de alta en nuestro panel de Compropago cuando instalamos el plugin anterior.

![webhook2](https://cloud.githubusercontent.com/assets/1311937/11635215/d5a410f8-9cda-11e5-8c36-bac2f35d3b60.png)

4.- Ya que tenemos eliminado el Plugin anterior, procedemos a realizar la instalación del nuevo plugin.

