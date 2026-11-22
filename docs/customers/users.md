---
title: "Users"
sidebar_position: 2
description: "Invite people and choose their role."
---

# Users

Open **Users** to see the people of your company and of the companies below it. Click **Create user** to add one: name, e-mail, company and role.

<Shots items={[{"name": "users", "caption": "The list of users."}]} />

**Roles.** Besides the portal roles, two roles are for people who only use a customer's Cloud Controller: **Controller Admin** (manages every firewall of that customer) and **Controller User** (manages only the firewall groups an administrator gives them, in the controller's **Access** screen). They sign in to the controller with the same e-mail and password and never see the portal. Create them under the customer's company.

The e-mail of a user **cannot be changed** after creation, because it is the sign-in name. To use another e-mail, create a new user.

The new user receives a **welcome e-mail** in the language of the company, with a link to set a password. You can edit a user, reset the password, suspend or delete it. Administrators and staff also have **Reset MFA** in the row menu: it removes the user's two-step verification so a new device is registered at the next sign-in. Users only see data of their own company and the ones below.
