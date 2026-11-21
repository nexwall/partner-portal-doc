---
title: "Soporte"
sidebar_position: 1
description: "Abre tickets y sigue las respuestas."
---

# Soporte

Usa **Soporte** en el menú para pedir ayuda a Nexwall sin salir del portal. Todo lo que tú y Nexwall escriben sobre un problema queda en un solo ticket, con un solo historial.

## Los números de arriba

- **Tickets abiertos** y el estado de cada uno.
- **Cerrados el último mes**.
- **Escalados**: tickets que pasaron a un nivel de soporte superior (L2, L3 o Desarrollo).
- Un gráfico de seis meses con tickets abiertos y resueltos.

## Abrir un ticket

1. Haz clic en **Nuevo ticket**.
2. Elige el firewall (o escribe su **número de serie**). Es opcional, pero permite que soporte mire el firewall correcto.
3. Escribe un **asunto** breve y describe **qué ocurre, desde cuándo y qué ya probaste**.
4. Haz clic en **Abrir ticket**. Recibes la referencia del ticket, por ejemplo `NX-000123`.

Abre un ticket por problema. Nunca escribas contraseñas, claves ni secretos de licencia en un ticket.

## Seguir y responder

Haz clic en un ticket para ver su historial. Escribe tu respuesta y haz clic en **Enviar**. Puedes **pegar una captura de pantalla** (Ctrl+V) o **adjuntar un archivo**: imágenes, PDF, texto o logs y ZIP, hasta 10 MB cada uno.

| Estado | Significado |
|---|---|
| Nuevo | Se recibió el ticket. |
| En análisis | Nexwall está trabajando en él. |
| Esperando su respuesta | Nexwall necesita tu respuesta o una prueba tuya. |
| Soporte L2, Soporte L3, Desarrollo | El ticket pasó a un nivel superior; mantienes un solo historial y una sola referencia. |
| Resuelto | El problema se resolvió. Puedes **Reabrir** el ticket durante 7 días. |

## Dos niveles en el mismo ticket

- **Soporte guiado por interfaz e IA**: ayuda paso a paso en la interfaz.
- **Diagnóstico avanzado por CLI**: diagnósticos en el firewall del ticket. Haz clic en **Abrir diagnóstico avanzado** para abrir la pantalla **Soporte** del Cloud Controller del cliente, donde ejecutas Support Packets y los resultados se añaden al mismo ticket. Necesitas permiso para gestionar firewalls para usar este botón.

## Correo electrónico

Quien abrió el ticket recibe un correo con la referencia cuando soporte responde.

## Buenos tickets

Incluye el número de serie del firewall, qué cambió antes de que empezara el problema, el texto exacto del error y una captura de pantalla. Cuanto más preciso el ticket, más rápida la respuesta.
