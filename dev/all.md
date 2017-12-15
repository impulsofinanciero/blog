---
layout: default-docs-dev
title: All
icon: magento
---


# PHP

## API client (PHP-SDK)

#### La librería de ComproPago-PHP le permite interactuar con el API de ComproPago en su aplicación. También cuenta con los métodos necesarios para facilitarle su desarrollo por medio de los servicios y vistas más utilizados (SDK).

---

### Requerimientos

* [PHP >= 5.3] (#)
* [PHP JSON extension] (#)
* [PHP cURL extension] (#)

---

### Instalación ComproPago SDK

#### Instalación usando Composer

La manera recomenda de instalar la SDK de ComproPago es por medio de [Composer] (#).

##### ¿Cómo instalar Composer?

Para instalar la última versión Estable de la SDK, ejecuta el comando de Composer:

```php
composer require compropago/php-sdk
```

Posteriormente o en caso de erro de carga de archivos, volvemos a crear el autoload:

```php
composer dumpautoload -o
```

O agregando manualmente al archivo composer.json

```php
"require": {
      "compropago/php-sdk":"^1.0"
   }
```

```php
composer install
```

```css
body {
	background-color: #ea2470;
}
```

Después de la instalación para poder hacer uso de la librería es necesario incluir el autoloader de Composer:

```php
require 'vendor/autoload.php';
```

Para actualizar el SDK de ComproPago a la última versión estable ejecutar:

```php
composer update
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

![alt-text](https://c2.staticflickr.com/2/1651/25212405025_d7a0c76c44_h.jpg)


---

# H1

## H2

### H3

#### H4

##### H5

###### H6


Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
  2. [I'm an inline-style link](https://www.google.com)
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
   Note that this line is separate, but within the same paragraph.⋅⋅
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- [I'm an inline-style link](https://www.google.com)
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

{% highlight ruby %}
	def foo
	  puts 'foo'
	end
{% endhighlight %}



> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

![alt-text](https://c2.staticflickr.com/2/1651/25212405025_d7a0c76c44_h.jpg)
