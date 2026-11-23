---
title: "Licencias"
sidebar_position: 2
description: "El estado de la licencia de cada firewall y cómo comprar o renovar un plan."
---

# Licencias

**Licencias** muestra la licencia de cada firewall, leída del propio firewall: **Activa**, **Por vencer** (termina en 30 días o menos), **Vencida**, **Prueba**, **Sin licencia** o **Desconocido**, con el serial y la fecha de vencimiento.

<Shots items={[{"name": "licences", "caption": "Estado de la licencia, serial y vencimiento de cada firewall."}]} />

Use los contadores y el filtro para encontrar qué renovar primero.

## Licencia y plan

La tabla tiene dos columnas parecidas que responden preguntas distintas:

- **Licencia** es el estado que el propio firewall informa: Activa, Por vencer, Vencida, Prueba, Sin licencia o Desconocido, con la fecha de vencimiento.
- **Plan** es el plan que el servidor de licencias asignó al firewall: **NW-50**, **NW-250**, **NW-1000** o **Sin plan**.

Pueden diferir por un tiempo. El firewall conserva la licencia que ya tiene y se entera de los cambios en su próxima verificación con el servidor de licencias, que ocurre cada pocas horas. Justo después de una compra, o después de quitar un plan, **Licencia** puede mostrar aún el estado anterior hasta esa verificación. Tras una compra el portal le pide al firewall que verifique de inmediato.

Un plan mayor comprado durante un período en curso empieza cuando termina el período actual. Hasta entonces **Plan** muestra el plan nuevo y **Vence** sigue mostrando el fin del período en curso.

## Planes

| Plan | Usuarios | Rendimiento |
|---|---|---|
| NW-50 | hasta 50 | 1 Gbps |
| NW-250 | hasta 250 | 5 Gbps |
| NW-1000 | hasta 1000 | 10 Gbps |

Cada plan se vende por firewall, por 6 meses (semestral) o 12 meses (anual). Los precios, y el descuento del plan si lo hay, se muestran antes de pagar.

## Comprar o renovar un plan

1. Abra **Licencias** (no la lista de Firewalls) y marque los firewalls para los que quiere comprar.
2. Haga clic en **Comprar este plan** en el plan que necesita.
3. Elija 6 o 12 meses y revise el precio de cada firewall y el total.
4. Continúe al checkout de Mercado Pago y pague.
5. Vuelva al portal. La compra aparece en la lista de compras y pasa a **Activa** cuando el plan se aplica. Luego el firewall verifica con el servidor y **Licencia** pasa a **Activa** con el nuevo vencimiento.

Tras el pago recibe el recibo por e-mail y Nexwall emite la factura (nota fiscal) de la compra.

Reglas de toda compra:

- El **mismo plan** extiende la licencia desde su fecha de fin actual.
- Un **plan mayor** empieza cuando termina el período actual (mejora en la renovación).
- Un **plan menor** que el actual se rechaza.
- Con varios firewalls marcados, solo se habilitan los planes que se pueden comprar para todos, y la insignia de plan de cada fila muestra lo que tiene ese firewall.

Solo compran los usuarios que pueden gestionar firewalls. Los usuarios de cliente no compran, y la compra se desactiva mientras usted suplanta a otro usuario.

## Renovación por revendedores

Cuando un distribuidor es dueño de la licencia de un cliente, los revendedores de ese cliente ven **Gestionado por el distribuidor** y no compran por él. El distribuidor abre **Renovación por revendedores** en el firewall y elige qué revendedores pueden comprar y pagar renovaciones. Esos revendedores pasan a ver **Renovación permitida**. La licencia sigue con el distribuidor.

## Reembolsos

Los reembolsos los gestiona Nexwall. Cuando se reembolsa un pago, el plan comprado con él se revoca y el pedido muestra **Reembolsado**. El firewall deja de usar el plan tras una verificación posterior con el servidor de licencias. Un reembolso parcial lo revisa Nexwall antes de cambiar nada.
