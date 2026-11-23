---
title: "Licenças"
sidebar_position: 2
description: "O status da licença de cada firewall e como comprar ou renovar um plano."
---

# Licenças

**Licenças** mostra a licença de cada firewall, lida do próprio firewall: **Ativa**, **A vencer** (termina em até 30 dias), **Vencida**, **Teste**, **Sem licença** ou **Desconhecido**, com o serial e a data de vencimento.

<Shots items={[{"name": "licences", "caption": "Status da licença, serial e vencimento de cada firewall."}]} />

Use os contadores e o filtro para achar o que renovar primeiro.

## Licença e plano

A tabela tem duas colunas parecidas que respondem a perguntas diferentes:

- **Licença** é o estado que o próprio firewall informa: Ativa, A vencer, Vencida, Teste, Sem licença ou Desconhecido, com a data de vencimento.
- **Plano** é o plano que o servidor de licenças atribuiu ao firewall: **NW-50**, **NW-250**, **NW-1000** ou **Sem plano**.

Elas podem diferir por um tempo. O firewall mantém a licença que já tem e só fica sabendo das mudanças na próxima verificação com o servidor de licenças, que acontece a cada poucas horas. Logo depois de uma compra, ou depois que um plano é removido, **Licença** ainda pode mostrar o estado anterior até essa verificação. Depois de uma compra o portal pede ao firewall que verifique na hora.

Um plano maior comprado durante um período em andamento começa quando o período atual termina. Até lá, **Plano** mostra o novo plano e **Vence em** ainda mostra o fim do período em andamento.

## Planos

| Plano | Usuários | Vazão |
|---|---|---|
| NW-50 | até 50 | 1 Gbps |
| NW-250 | até 250 | 5 Gbps |
| NW-1000 | até 1000 | 10 Gbps |

Cada plano é vendido por firewall, por 6 meses (semestral) ou 12 meses (anual). Os preços, e o desconto do plano quando houver, aparecem antes de pagar.

## Comprar ou renovar um plano

1. Abra **Licenças** (não a lista de Firewalls) e marque os firewalls para os quais quer comprar.
2. Clique em **Comprar este plano** no plano que precisa.
3. Escolha 6 ou 12 meses e confira o preço de cada firewall e o total.
4. Siga para o checkout do Mercado Pago e pague.
5. Volte ao portal. A compra aparece na lista de compras e passa a **Ativa** quando o plano é aplicado. Então o firewall verifica com o servidor e **Licença** passa a **Ativa** com o novo vencimento.

Depois do pagamento você recebe o recibo por e-mail e a Nexwall emite a nota fiscal da compra.

Regras de toda compra:

- O **mesmo plano** estende a licença a partir da data de término atual.
- Um **plano maior** começa quando o período atual termina (upgrade na renovação).
- Um **plano menor** que o atual é recusado.
- Com vários firewalls marcados, só ficam habilitados os planos que podem ser comprados para todos, e o selo de plano de cada linha mostra o que aquele firewall tem.

Só usuários que podem gerenciar firewalls compram. Usuários de cliente não compram, e a compra fica desativada enquanto você representa outro usuário.

## Renovação por revendedores

Quando um distribuidor é dono da licença de um cliente, os revendedores desse cliente veem **Gerenciado pelo distribuidor** e não compram por ele. O distribuidor abre **Renovação por revendedores** no firewall e escolhe quais revendedores podem comprar e pagar renovações. Esses revendedores passam a ver **Renovação permitida**. A licença continua com o distribuidor.

## Reembolsos

Os reembolsos são tratados pela Nexwall. Quando um pagamento é reembolsado, o plano comprado com ele é revogado e o pedido mostra **Reembolsado**. O firewall deixa de usar o plano depois de uma verificação posterior com o servidor de licenças. Um reembolso parcial é analisado pela Nexwall antes de qualquer mudança.
