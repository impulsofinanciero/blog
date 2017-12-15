---
layout: default
group: internal
subgroup: Simplestore
title: Estructura
menu_title: Estructura
menu_order: 3
---

<style>
table thead {
    background-color: #ebe8eb;
    font-weight: bold;
}

table tr td, table tr th{
    padding: 5px !important;
}

table.striped tbody tr:nth-child(even) {
    background-color: #F8F8F8;
}

table.striped tbody tr:nth-child(odd) {
    background-color: #fff;
}
</style>


## {{page.title}}

### Librerias utilizadas

<table class="table striped">
   	<thead>
     		 <tr>
     			    <td>Libreria</td>
     			    <td>Metodo de instalación</td>
     			    <td>Package</td>
     			    <td>Enlaces</td>
     		 </tr>
   	</thead>
   	<tbody>
     		 <tr>
     			    <td>Compropago php-sk</td>
     			    <td><a href="https://getcomposer.org/">Composer</a></td>
     			    <td><code>compropago/php-sdk</code></td>
     			    <td><a href="https://packagist.org/packages/compropago/php-sdk">LINK</a></td>
     		 </tr>
     		 <tr>
     			    <td>Skeleton framework</td>
     			    <td>Sourcecode</td>
     			    <td></td>
     			    <td><a href="http://getskeleton.com/">LINK</a></td>
     		 </tr>
     		 <tr>
     			    <td>JQuery</td>
     			    <td>Sourcecode</td>
     			    <td></td>
     			    <td><a href="https://jquery.com/">LINK</a></td>
     		 </tr>
   	</tbody>
</table>


### Estructura de carpetas

#### Carpeta *assets*
Contiene todo el codigo de estilos CSS, librerias JS y las imegenes que se ocupan para darle presentacion al `Simplestore`. Aquí es donde se encutran tambien las librerias de Skeleton y Jquery.

##### Subcarpetas
* css
* img
* js

#### Carpeta *src*
Contiene todo el codigo PHP que se encarga de controlar el proceso de Checkout, junto con las configuraciones necesarias
para su funcionamiento.

##### Subcarpetas
* Simplestore
  * Controllers
  * Libraries
  * Utils
  
#### Carpeta *views*
Contiene a `index.php` que es el archivo prinsipal de `Compropago Simplestore`. 

#### Anotaciones importantes
`Compropago Simplestore` usa como dependencia `compropago/php-sdk` por lo cual el codigo de esta dependencia no se encuntra
visible dentro de estos archivos, es descargado por el gestor de dependencias de `composer` al instalar Compropago Simplestore

[compropago-config-link]: https://compropago.com/panel/configuracion
[compropago-link]: https://packagist.org/packages/compropago/php-sdk
[composer-link]: https://getcomposer.org/
[skeleton-link]: http://getskeleton.com/
[jquery-link]: https://jquery.com/
