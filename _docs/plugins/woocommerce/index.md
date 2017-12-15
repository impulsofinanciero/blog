---
layout: default
icon: woocommerce
root: plugins
sidebarExtras: plugins

group: woocommerce
subgroup: 01_Introduction
title: Plugin para Woocommerce
menu_title: Introducción
menu_order: 1
menu_node: parent
---
{% assign plugin = site.data.plugins[page.group] %}

# {{page.title}}



{{plugin.git}}


{% include ayuda/helpLinks.md %}