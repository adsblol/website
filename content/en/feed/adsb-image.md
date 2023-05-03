---
title: "ADSB.im Image (recommended for new stations / easy)"
lead: "This guide will help you set up an ADS-B feeder using the adsb-feeder-image."
draft: false
images: []
type: docs
---

This image is made and maintained by [dirkhh](https://github.com/dirkhh/adsb-feeder-image) with contributions from [myself](https://github.com/katlol).

## Prerequisites

1. A supported single board computer (SBC) such as (at the time of writing):
    - [Raspberry Pi](https://rpilocator.com) (Except for the Pi 0)
    - Banana Pi (M2P, M5)
    - [Libre Computing Le Potato](https://www.loverpi.com/products/libre-computer-board-aml-s905x-cc?variant=40900646605)
    - Orange Pi (3 LTS, 4 LTS, 5)
    - Renegade
    - Rock Pi 4
    - ODROID C4
    - ASUS Tinkerboard
2. A decent power supply for your SBC.
3. An SDR (Software Defined Radio) and antenna. Consider the 'green' RadarBox SDR and an indoor or outdoor antenna.
4. A µSD card to write the image on.

## Step-by-step Instructions

### For Raspberry Pi Users (Wi-Fi Configuration Supported)

1. **Download the latest adsb-feeder-image** from the Release section [here](https://github.com/dirkhh/adsb-feeder-image/releases/latest).
2. **Write the image to a µSD card** using a tool like the Raspberry Pi Imager on your computer.
3. **Configure Wi-Fi settings**:
   - Use the 'wifi setup' option to ensure the image can connect to your Wi-Fi network.
   - **Keep all other settings unchanged.**
4. **Boot your Raspberry Pi from the µSD card** and wait for the initial boot to complete.

### For Other SBC Users (Ethernet Connection Required)

1. **Download the latest adsb-feeder-image** from the Release section [here](https://github.com/dirkhh/adsb-feeder-image/releases/latest).
2. **Write the image to a µSD card** using a tool like the Raspberry Pi Imager or Balena Etcher on your computer.
3. **Boot your SBC from the µSD card** and wait for the initial boot to complete.
4. **Ensure your SBC is connected to the internet via an Ethernet cable**.

### Common Steps for All Users Once the SBC is Booted

5. **Connect to the ADSB-PI Setup Page**: This [link](http://adsb-feeder.local:5000/) should work to find the freshly booted system on your local network (assuming you have a standard setup with mDNS enabled). Otherwise, you'll need to figure out its IP address.

6. On the setup website, **enter the latitude, longitude, and elevation of your receiver**.

7. **Set the correct time zone** using the convenient button that gets the information from your browser.

8. Click **Submit** and be patient while everything gets installed and set up. This could take several minutes, depending on your internet speed.

9. Once the setup is complete, it should automatically forward you to [your local feeder website](http://adsb-feeder.local:8080). You'll see the aircraft you're tracking, and in the background, the plane positions will be fed to ADSB.lol.

Congratulations! You have successfully set up your feeder for ADSB.lol.

To access all the data freely via the API and the historical daily archive, visit [ADSB.lol](https://adsb.lol) and follow the links to the API and the archive.
