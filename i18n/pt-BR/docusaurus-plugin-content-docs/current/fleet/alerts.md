---
title: "Alertas e notificações"
sidebar_position: 3
description: "Veja o que precisa de atenção e escolha onde ser avisado."
---

# Alertas e notificações

**Alertas** lista o que precisa de atenção nos seus firewalls, encontrado nos logs dos firewalls e guardado por alguns dias. Cada problema é uma linha, não importa quantas vezes se repita. Filtre por **Abertos**, **Resolvidos** e por gravidade (**Crítico**, **Alto**, **Médio**). Use **Dispensar** para fechar um alerta que você já tratou.

<Shots items={[{"name": "alerts", "caption": "Alertas abertos por gravidade."}]} />

## Notificações

Na aba **Notificações** escolha onde ser avisado: **Telegram** (o seu próprio bot), **Webhook** (uma mensagem JSON assinada para o seu sistema, somente https) ou **E-mail** (até cinco endereços por canal). Um alerta é anunciado uma vez, agrupado em uma mensagem, e não se repete enquanto continua aberto. Eventos de rotina nunca notificam.

Cada endereço de e-mail tem o seu idioma: português (o padrão), inglês, espanhol ou italiano. Escolha ao adicionar o endereço; o e-mail de alerta é enviado nesse idioma.
