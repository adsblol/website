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

Port: 1365 (BEAST) and 1366 (MLAT, SBS)

These outputs are available to all feeders IPs.

### DISCLAIMER

Do not use your feeder for this. **You need to spin up a new readsb.**

This feature is experimental. In particular, **No support or guarantee of any kind is provided.**

Documentation assumes a high skill level. **Please consider improving the documentation for the next person.**

### Usage

You can use readsb to get the data locally, for example running directly:
```
readsb --net-only --net-connector=out.adsb.lol,1365,beast_in --net-connector=out.adsb.lol,1366,sbs_in_mlat
```

The typical use case for this would be to do some form of data analysis on the full raw data stream from all the feeders. It could also be used for certain visualization goals of live or past flight activity.

Please make sure that you avoid creating feeding loops - that is why the disclaimer above urges you not to use the readsb in your feeder setup to connect to this stream. A good way to set up a separate environment to start using this data stream would be to spin up a Docker container with its own readsb instance. The necessary docker file to get started with that is included in the readsb implementation that is most commonly used at this point (and that is also the underlying implementation used for ADSB.lol): [@wiedehopf's readsb](https://github.com/wiedehopf/readsb)
