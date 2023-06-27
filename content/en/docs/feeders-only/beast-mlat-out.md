---
title: "BEAST MLAT Out"
description: "Our aggregated data is available to all feeders."
lead: "Our aggregated data is available to all feeders."
date: 2023-06-27T22:25:19+02:00
lastmod: 2023-06-27T22:25:19+02:00
draft: false
images: []
menu:
  docs:
    parent: "feeders-only"
weight: 103
toc: true
---

License: [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1.0/)


Hostname: `out.adsb.lol`
Port: 1337 (BEAST) and 1338 (MLAT, SBS)

These outputs are available to all feeders IPs.


### Usage

You can use readsb to get the data locally, for example running directly:
```
readsb --net-only --net-connector=out.adsb.lol,1337,beast_in --net-connector=out.adsb.lol,1338,sbs_in_mlat
```

Or this environment variable on [adsblol/feed](https://github.com/adsblol/feed) `/opt/adsblol/.env`:

```
ADSBLOL_ADDITIONAL_NET_CONNECTOR=out.adsb.lol,1337,beast_in;out.adsb.lol,1338,sbs_in_mlat
```
