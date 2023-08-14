---
title: "ADS-B + UAT Equipment"
description: "1090MHz and 978MHz equipment."
lead: "1090MHz and 978MHz equipment."
date: 2023-06-28T01:16:31+02:00
lastmod: 2023-06-28T01:16:31+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "adsb-equipment-7d3a73547f63bf71d5aeb61c92faa4dc"
weight: 999
toc: true
---

## SDR

- AirNav RadarBox FlightStick (filter, no LNA) [US](https://www.amazon.com/dp/B07K47P7XD/) [DE](https://www.amazon.de/dp/B07K47P7XD) [NL](https://www.amazon.nl/dp/B07K47P7XD) [IT](https://www.amazon.it/dp/B07K47P7XD) [UK](https://www.amazon.co.uk/dp/B07K47P7XD) [FR](https://www.amazon.fr/dp/B07K47P7XD) [ES](https://www.amazon.es/dp/B07K47P7XD) (good starter, cheap)
- [RTL-SDR](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) (no filter, supports Bias-T to power other devices, most common! great value.)
- [AliExpress no-name 1090 filtered](https://aliexpress.com/item/1005005466363998.html) (cheapest, least recommended)
- Best: [Airspy Mini](https://airspy.com/airspy-mini/) (no built-in filter, supports Bias-T, usually is best paired with a high quality LNA)

## Filter

If your SDR doesn't have a filter, you might benefit from one.

- Best: [Sysmocom.de: 1090 MHz Cavity Filter](https://shop.sysmocom.de/1090-MHz-cavity-filter-for-Mode-S-ADS-B/cf1090-kt30)
- Uputronics 1090MHz ADS-B Filtered Preamp [Store](https://store.uputronics.com/index.php?route=product/product&product_id=50) [US](https://v3.airspy.us/product/upu-fp1090s/) (recommended)
- There are very cheap [filterend LNAs](https://www.aliexpress.us/item/3256804467076609.html) available directly from China that are suprisingly decent.

## LNA

An LNA is not required, but can help if you have a long cable run, or if you are using the Airspy Mini.

Note that amplified filters like the Uputronics include an LNA.

- Nooelec Lana [US](https://www.nooelec.com/store/lana.html) [DE](https://www.amazon.de/dp/B07XNLJ9X2) [UK](https://www.amazon.co.uk/dp/B07XNLJ9X2) [NL](https://www.amazon.nl/dp/B07XNLJ9X2) [FR](https://www.amazon.fr/dp/B07XNLJ9X2) [ES](https://www.amazon.es/dp/B07XNLJ9X2) [IT](https://www.amazon.it/dp/B07XNLJ9X2)


## Antenna

- nooelec indoor [US](https://www.nooelec.com/store/sdr/sdr-addons/1090mhz-ads-b-antenna-5dbi-sma.html)
- [PCB antenna](https://aliexpress.com/item/1005004944227648.html) (cheapest)
- [Sirio Antenne](https://www.sirioantenne.it/), based in Italy
- [Vinnant](https://vinnant.sk/), based in Slovakia (best)
- [DPD Productions](https://dpdproductions.com/), based in US (best)

## Coax

- [Vinnant](https://vinnant.sk/store/page/1?productlist-search=&productlist-sort=created-desc&productlist-categories=cables-ads-b&productlist-tags=)

## SMA Adapters

- [AliExpress (Many types!)](https://aliexpress.com/item/1005002085433490.html)
