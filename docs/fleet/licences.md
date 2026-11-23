---
title: "Licences"
sidebar_position: 2
description: "Licence status of every firewall, and how to buy or renew a plan."
---

# Licences

**Licences** shows the licence of each firewall, read from the firewall itself: **Active**, **Expiring** (ends within 30 days), **Expired**, **Trial**, **No licence** or **Unknown**, with the serial and the expiry date.

<Shots items={[{"name": "licences", "caption": "Licence status, serial and expiry of each firewall."}]} />

Use the counters and the filter to find what to renew first.

## Licence and plan

The table has two columns that look alike but answer different questions:

- **Licence** is the state the firewall reports about itself: Active, Expiring, Expired, Trial, No licence or Unknown, with the expiry date.
- **Plan** is the plan the licence server assigned to the firewall: **NW-50**, **NW-250**, **NW-1000** or **No plan**.

They can differ for a while. A firewall keeps the licence it already holds and learns about changes at its next check-in with the licence server, which happens every few hours. Right after a purchase, or after a plan is removed, **Licence** may still show the previous state until that check-in. After a purchase the portal asks the firewall to check in at once.

A bigger plan bought while a term is running starts when the current term ends. Until then **Plan** shows the new plan while **Expires** still shows the end of the running term.

## Plans

| Plan | Users | Throughput |
|---|---|---|
| NW-50 | up to 50 | 1 Gbps |
| NW-250 | up to 250 | 5 Gbps |
| NW-1000 | up to 1000 | 10 Gbps |

Every plan is sold per firewall for 6 months (semester) or 12 months (yearly). The prices, and any discount of the plan, are shown before you pay.

## Buy or renew a plan

1. Open **Licences** (not the Firewalls list) and tick the firewalls you want to buy for.
2. Click **Buy this plan** on the plan you need.
3. Choose 6 or 12 months and check the price of each firewall and the total.
4. Continue to the Mercado Pago checkout and pay.
5. Come back to the portal. The purchase appears in the purchases list and turns **Active** once the plan is applied. The firewall then checks in and **Licence** becomes **Active** with the new expiry.

After the payment you receive a receipt by e-mail, and Nexwall issues the invoice (nota fiscal) for the purchase.

Rules that apply to every purchase:

- The **same plan** extends the licence from its current end date.
- A **bigger plan** starts when the current term ends (upgrade at renewal).
- A **smaller plan** than the current one is refused.
- With several firewalls selected, only the plans that can be bought for all of them are enabled, and the plan badge of each row shows what that firewall has.

Only users who can manage firewalls can buy. Customer users cannot buy, and buying is disabled while you impersonate another user.

## Renewal by resellers

When a distributor owns the licence of a customer, the resellers of that customer see **Managed by distributor** and cannot buy for it. The distributor opens **Renewal by resellers** on the firewall and chooses which resellers may buy and pay renewals. Those resellers then see **Renewal allowed**. The licence stays with the distributor.

## Refunds

Refunds are handled by Nexwall. When a payment is refunded, the plan bought with it is revoked and the order shows **Refunded**. The firewall stops using the plan after a later check-in with the licence server. A partial refund is reviewed by Nexwall before anything changes.
