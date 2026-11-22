---
title: "Usuarios"
sidebar_position: 2
description: "Invita personas y elige su rol."
---

# Usuarios

Abre **Usuarios** para ver las personas de tu empresa y de las empresas por debajo. Haz clic en **Crear usuario** para añadir uno: nombre, correo, empresa y rol.

<Shots items={[{"name": "users", "caption": "La lista de usuarios."}]} />

**Roles.** Además de los roles del portal, hay dos roles para personas que solo usan el Cloud Controller de un cliente: **Controller Admin** (gestiona todos los firewalls de ese cliente) y **Controller User** (gestiona solo los grupos de firewalls que un administrador le asigna, en la pantalla **Acceso** del controlador). Inician sesión en el controlador con el mismo correo y contraseña y nunca ven el portal. Créalos bajo la empresa del cliente.

El correo de un usuario **no se puede cambiar** después de crearlo, porque es el nombre de inicio de sesión. Para usar otro correo, crea un usuario nuevo.

El nuevo usuario recibe un **correo de bienvenida** en el idioma de la empresa, con un enlace para definir la contraseña. Puedes editar un usuario, restablecer la contraseña, suspenderlo o eliminarlo. Los administradores y el staff también tienen **Reset MFA** en el menú de la fila: quita la verificación en dos pasos del usuario para que registre un nuevo dispositivo en el próximo inicio de sesión. Los usuarios solo ven datos de su propia empresa y de las de abajo.
