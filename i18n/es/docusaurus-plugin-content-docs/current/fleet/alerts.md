---
title: "Alertas y notificaciones"
sidebar_position: 3
description: "Ve lo que requiere atención y elige dónde ser avisado."
---

# Alertas y notificaciones

**Alertas** lista lo que requiere atención en tus firewalls, encontrado en los registros de los firewalls y guardado unos días. Cada problema es una línea, sin importar cuántas veces se repita. Filtra por **Abiertas**, **Resueltas** y por gravedad (**Crítica**, **Alta**, **Media**). Usa **Descartar** para cerrar una alerta que ya trataste.

<Shots items={[{"name": "alerts", "caption": "Alertas abiertas por gravedad."}]} />

## Notificaciones

En la pestaña **Notificaciones** elige dónde ser avisado: **Telegram** (tu propio bot), **Webhook** (un mensaje JSON firmado a tu sistema, solo https) o **Correo** (hasta cinco direcciones por canal). Una alerta se anuncia una vez, agrupada en un mensaje, y no se repite mientras sigue abierta. Los eventos rutinarios nunca notifican.
