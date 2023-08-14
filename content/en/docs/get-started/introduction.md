---
title: "Feeding"
description: ""
lead: ""
date: 2023-06-27T22:25:19+02:00
lastmod: 2023-06-27T22:25:19+02:00
draft: false
images: []
menu:
  docs:
    parent: "get-started"
    identifier: "introduction-feeding"
weight: 100
toc: false
---

## Feed ADSB.lol

Adding a receiver to our network is easy. You can use any of the following methods:

### [ADSB.im Image](https://adsb.im/howto)

Easy: recommended for new stations running on dedicated hardware / Single Board Computers (SBCs).

Simple to use ADSB Feeder Images for common Single Board Computers like most of the Raspberry Pi family and many others. Web UI driven. Very limited technical skill required.

### [ADSB.lol Docker Toolkit](../docker)

For technically versed users: recommended for new stations that won't be running on a dedicated SBC.

Install, run, and maintain an ADS-B / UAT / MLAT / ACARS / VDL2 / AIS feed client to a multitude of aggregators.

### [Bare Metal](../bare-metal)

For technically versed users: recommended for existing stations.

If you already have an ADS-B station, you can add ADSB.lol as a feeder, this will not interfere with your existing setup.

All you need is BEAST out on port 30005.
