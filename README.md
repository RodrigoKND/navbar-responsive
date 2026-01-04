# Adaptive Navbar

Adaptive Navbar es un componente de navegación simple y reutilizable construido con **React**, **TypeScript** y **Tailwind CSS**.  
Está pensado para proyectos reales donde se necesita un navbar limpio, escalable y adaptable a distintos comportamientos en móvil, sin dependencias externas ni configuraciones complejas.

## Características

- Diseño responsive listo para producción
- Navegación móvil configurable (left, right, top, bottom)
- Soporte para modo oscuro usando clases `dark` de Tailwind
- Código tipado con TypeScript
- HTML semántico y buenas prácticas de accesibilidad
- Fácil de integrar y extender

## ¿Para qué sirve este componente?

Este componente está pensado para:
- Landing pages
- Proyectos SaaS
- Dashboards
- Proyectos personales o comerciales
- Sistemas de diseño pequeños o medianos

No intenta ser un framework ni una librería pesada, sino una **base sólida** que puedas adaptar a tu proyecto.

## Beneficios

- Ahorra tiempo al no tener que construir un navbar desde cero
- Mantiene una estructura clara y fácil de entender
- Permite escalar enlaces y secciones sin reescribir lógica
- Se adapta a diferentes experiencias móviles sin cambiar el código base

## Uso básico

```tsx
<AdaptiveNavbar
  mobileMode="left | top | right | bottom"
  links={[
    { label: "Inicio", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Contacto", href: "/contacto" }
  ]}
/>

Si quieres colaborar o reportar un error, puedes hacerlo en el repositorio de GitHub.
Aademás que si quieres colaborarme con este proyecto, puedes hacerlo en el repositorio de GitHub o apoyarme en mi gumroad: https://rodhalsey.gumroad.com/l/navbar

¡Gracias!, no te olvides de darme una estrella ⭐️ en GitHub!
