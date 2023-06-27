---
title: "Bare Metal"
lead: "Using your existing ADS-B receiver"
draft: false
images: []
type: docs
weight: 103
---
- These scripts aid in setting up your current ADS-B receiver to feed [adsb.lol](https://adsb.lol)
- They will not disrupt any existing feed clients already present

## 1: Find coordinates / elevation:

<https://www.freemaptools.com/elevation-finder.htm>

## 2: Install the adsblol feed client

```
curl -L -o /tmp/lol-feed.sh https://adsb.lol/feed.sh
sudo bash /tmp/lol-feed.sh
```

## 3: Check if your feed is working

That one's easy! Just go to <https://adsb.lol> and you should show as feeding.


### Optional: local interface for your data http://192.168.X.XX/adsblol

Install / Update:
```
sudo bash /usr/local/share/adsblol/git/install-or-update-interface.sh
```
Remove:
```
sudo bash /usr/local/share/tar1090/uninstall.sh adsblol
```

## Misc maintenance
### Update

Update the feed client without reconfiguring

```
curl -L -o /tmp/lol-update.sh https://raw.githubusercontent.com/adsblol/feed/master/update.sh
sudo bash /tmp/lol-update.sh
```


### Troubleshooting issues

If you encounter issues, please do a reboot and then supply these logs on [zulip](https://adsblol.zulipchat.com) (last 20 lines for each is sufficient):

```
sudo journalctl -u adsblol-feed --no-pager
sudo journalctl -u adsblol-mlat --no-pager
```


### Display the configuration

```
cat /etc/default/adsblol
```

### Changing the configuration

This is the same as the initial installation.
If the client is up to date it should not take as long as the original installation,
otherwise this will also update the client which will take a moment.

```
curl -L -o /tmp/lol-feed.sh https://adsb.lol/feed.sh
sudo bash /tmp/lol-feed.sh
```

### Restart

```
sudo systemctl restart adsblol-feed
sudo systemctl restart adsblol-mlat
```


### Systemd Status

```
sudo systemctl status adsblol-mlat
sudo systemctl status adsblol-feed
```


### Uninstall

```
sudo bash /usr/local/share/adsblol/uninstall.sh
```

If the above doesn't work, you may be using an old version that didn't have the uninstall script,

just disable the services and the scripts won't run anymore:

```
sudo systemctl disable --now adsblol-feed
sudo systemctl disable --now adsblol-mlat
```
