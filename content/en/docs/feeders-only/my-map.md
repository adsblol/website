---
title: "My Map"
description: "My Map is a map of the aircrafts that your station is receiving."
lead: "My Map is a map of the aircrafts that your station is receiving."
date: 2023-06-27T22:25:19+02:00
lastmod: 2023-06-27T22:25:19+02:00
draft: false
images: []
menu:
  docs:
    parent: "feeders-only"
weight: 102
toc: true
---

Your map is available at the following address: <https://my.adsb.lol>

This link, accessed by your IP, redirects you to your own subdomain that can be shared with others publicly.

Your location is always approximate, and can be off by several hundreds kilometers.

Please note that because of an implementation detail (subject to change), this functionality may fail if you have multiple feeders coming from the same IP address. When combining the [human hashes](https://github.com/zacharyvoase/humanhash) for each of the feeders, the resulting domain name may exceed the length limitation of the DNS lookup.
