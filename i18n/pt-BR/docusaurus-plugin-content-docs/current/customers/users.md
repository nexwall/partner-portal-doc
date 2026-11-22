---
title: "Usuários"
sidebar_position: 2
description: "Convide pessoas e escolha a função delas."
---

# Usuários

Abra **Usuários** para ver as pessoas da sua empresa e das empresas abaixo. Clique em **Criar usuário** para adicionar um: nome, e-mail, empresa e função.

<Shots items={[{"name": "users", "caption": "A lista de usuários."}]} />

**Funções.** Além das funções do portal, há duas funções para pessoas que só usam o Cloud Controller de um cliente: **Controller Admin** (gerencia todos os firewalls desse cliente) e **Controller User** (gerencia só os grupos de firewalls que um administrador atribui a ele, na tela **Acesso** do controlador). Elas entram no controlador com o mesmo e-mail e a mesma senha e nunca veem o portal. Crie-as na empresa do cliente.

O e-mail de um usuário **não pode ser alterado** depois de criado, pois é o nome de login. Para usar outro e-mail, crie um novo usuário.

O novo usuário recebe um **e-mail de boas-vindas** no idioma da empresa, com um link para definir a senha. Você pode editar um usuário, redefinir a senha, suspendê-lo ou excluí-lo. Administradores e staff também têm **Reset MFA** no menu da linha: ele remove a verificação em duas etapas do usuário para que ele cadastre um novo dispositivo no próximo login. Os usuários só veem dados da própria empresa e das que estão abaixo.
