---
title: "Aircraft Data Links"
date: 2023-06-27T22:26:11+02:00
lastmod: 2023-06-27T22:26:11+02:00
draft: false
images: []
menu:
  docs:
    parent: "open-data"
weight: 200
toc: true
---

Aircraft data link systems enable digital communication between aircraft and ground stations, carrying various types of operational, navigational, and surveillance data.

## What are Aircraft Data Links?

Aircraft data links include multiple communication systems that transmit different types of data over various frequency bands and protocols:

### VDL2 (VHF Data Link Mode 2)
VDL2 operates in the VHF aviation band (118-137 MHz) and is widely used in Europe, Asia, and other regions. It carries:
- **ACARS messages** - Airline operational communications
- **ADS-C reports** - Automatic Dependent Surveillance-Contract position reports
- **CPDLC** - Controller-Pilot Data Link Communications
- **ATN/IPS** - Aeronautical Telecommunication Network messages

### ACARS (Aircraft Communications Addressing and Reporting System)
The original ACARS system operates on dedicated VHF frequencies (primarily 131.550 MHz) and carries airline operational messages, including:
- Flight plans and route changes
- Weather reports and updates
- Engine performance data
- Maintenance alerts and diagnostics
- Gate and departure information
- Fuel reports

### HFDL (High Frequency Data Link)
HFDL operates on HF bands and provides global coverage, especially over oceanic routes where VHF coverage is unavailable. It carries similar data to VDL2, including:
- **ACARS messages**
- **ADS-C position reports**
- **CPDLC communications**
- **Long-haul flight operational data**

## Data Collection Endpoints

### ACARS
- **Host**: feed-acars.adsb.lol
- **Port**: 5550
- **Protocol**: TCP

### HFDL (High Frequency Data Link)
- **Host**: feed-acars.adsb.lol
- **Port**: 5551
- **Protocol**: TCP

### VDL2 (VHF Data Link Mode 2)
- **Host**: feed-acars.adsb.lol
- **Port**: 5552
- **Protocol**: TCP


## Usage

Send your aircraft data link messages to the appropriate endpoint based on the type of data you're collecting:

- Use port 5550 (TCP) to send ACARS messages
- Use port 5551 (TCP) to send HFDL communications
- Use port 5552 (TCP) to send VDL2 data streams

### Data Format
All endpoints **only accept JSON formatted data**. Raw message data must be converted to JSON before submission. Common software that can generate JSON output includes:
- **acarsdec** with `--output-format json` for VHF ACARS
- **vdlm2dec** with `--output-format json` for VDL2
- **dumphfdl** with `--output-format json` for HFDL
- **dumpvdl2** with `--output-format json` for VDL2

Each message should be sent as a separate JSON object, one per line (JSONL format) or as individual JSON objects.

### What Data Contains
The collected messages typically include:
- **ACARS operational messages** - Flight plans, weather, maintenance alerts
- **ADS-C position reports** - Aircraft location and surveillance data
- **CPDLC communications** - Air traffic control datalink messages
- **Aircraft registration and flight identifiers**
- **Message timestamps and routing information**
- **Navigation and performance data**

## Data License

All collected data will be published under the **CC0 (Creative Commons Zero)** license on GitHub releases, making it freely available for public use without restrictions.

## Privacy

Privacy policy applies.
