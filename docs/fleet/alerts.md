---
title: "Alerts and notifications"
sidebar_position: 3
description: "See what needs attention and choose where to be told."
---

# Alerts and notifications

**Alerts** lists what needs attention on your firewalls, found in the firewalls' logs and kept for a few days. Each problem is one line, no matter how often it repeats. Filter by **Open**, **Resolved** and by severity (**Critical**, **High**, **Medium**). Use **Dismiss** to close an alert you already handled.

<Shots items={[{"name": "alerts", "caption": "Open alerts by severity."}]} />

## Notifications

On the **Notifications** tab choose where you are told: **Telegram** (your own bot), **Webhook** (a signed JSON message to your system, https only) or **E-mail** (up to five addresses per channel). An alert is announced once, grouped in one message, and not repeated while it stays open. Routine events never notify.

Each e-mail address has its own language: Portuguese (the default), English, Spanish or Italian. Choose it when you add the address; the alert e-mail is sent in that language.
