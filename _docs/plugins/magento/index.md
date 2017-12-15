---
layout: default
icon: magento
root: plugins
sidebarExtras: plugins

group: magento
subgroup: 01_Introduction
title: Plugin para Magento
menu_title: Instalación
menu_order: 1
menu_node: parent
---

# {{page.title}}


> ### Versiones Magento 1.7.x, 1.8.x y 1.9.x

Este modulo provee el servicio de ComproPago para poder generar intensiones de pago dentro de la plataforma Magento.


## Instalación:

1.- Descargar el Archivo **.tgz** del siguiente link [https://s3.amazonaws.com/compropago/plugins/magento/Compropago_Payment_Extension-1.0.2.tgz](https://s3.amazonaws.com/compropago/plugins/magento/Compropago_Payment_Extension-1.0.2.tgz)

2.- En el panel de administración de Magento ingresamos y nos dirigimos a **System -> Magento Connect -> Magento Connect Manager** 

3.- Cargamos el archivo en la parte que dice **Direct package file upload** y oprimimos el botón **Upload**.

![Carga Archivo](https://cloud.githubusercontent.com/assets/1311937/11578093/02a4da92-99e8-11e5-8ce9-40a54eb3d0af.png)

4.- Verificamos que la instalación fue correcta y procedemos a oprimir el botón de **Refresh** para actualizar la pantalla.

![pluginsuccess](https://cloud.githubusercontent.com/assets/1311937/11578179/acc31ab6-99e8-11e5-8113-a0dbed22dda3.png)

5.- En el panel de administración ir a **System -> Cache Management** y limpiar la cache de todos los directorios. 

![cache](https://cloud.githubusercontent.com/assets/1311937/11644976/3f863196-9d16-11e5-9068-03120e99720c.png)<br />

6.- Ir a **System -> IndexManagement** seleccionar todos los directorios y dar click en Reindex Data y Submit.

![index](https://cloud.githubusercontent.com/assets/1311937/11644989/4fdfb65c-9d16-11e5-9a3b-51e812c1c01a.png)

