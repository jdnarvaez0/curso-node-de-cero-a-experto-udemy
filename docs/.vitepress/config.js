import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Curso Node.js',
  description: 'Notas y documentación del curso de Node.js de Udemy',
  base: '/',
  lastUpdated: true,
  
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Secciones', link: '/secciones/seccion-01' },
      { text: 'GitHub', link: 'https://github.com/tu-usuario/curso-nodejs' }
    ],

    sidebar: [
      {
        text: 'Secciones del Curso',
        items: [
          { text: '01 - Introducción', link: '/secciones/seccion-01' },
          { text: '02 - Fundamentos de Node', link: '/secciones/seccion-02' },
          { text: '03 - Desarrollando en Node', link: '/secciones/seccion-03' },
          { text: '04 - Bases de Node + TypeScript', link: '/secciones/seccion-04' },
          { text: '05 - Introducción al testing', link: '/secciones/seccion-05' },
          { text: '06 - Clean Architecture - Primeros Pasos', link: '/secciones/seccion-06' },
          { text: '07 - Aplicación de consola - Testing', link: '/secciones/seccion-07' },
          { text: '08 - Aplicación de Monitoreo - NOC', link: '/secciones/seccion-08' },
          { text: '09 - Clean Architecture - Repository Pattern', link: '/secciones/seccion-09' },
          { text: '10 - Correos electrónicos', link: '/secciones/seccion-10' },
          { text: '11 - MongoDB y PostgreSQL', link: '/secciones/seccion-11' },
          { text: '12 - NOC - Testing - Clean Architecture', link: '/secciones/seccion-12' },
          { text: '13 - WebServer - Http/Http2', link: '/secciones/seccion-13' },
          { text: '14 - RestServer', link: '/secciones/seccion-14' },
          { text: '15 - RestServer + PostgreSQL', link: '/secciones/seccion-15' },
          { text: '16 - Rest - Clean Architecture', link: '/secciones/seccion-16' },
          { text: '17 - Rest Testing', link: '/secciones/seccion-17' },
          { text: '18 - Autenticación y Autorización', link: '/secciones/seccion-18' },
          { text: '19 - Enviar correo + Validación de Tokens', link: '/secciones/seccion-19' },
          { text: '20 - Protección de rutas, relaciones, middlewares y paginación', link: '/secciones/seccion-20' },
          { text: '21 - Relaciones y semilla', link: '/secciones/seccion-21' },
          { text: '22 - Carga de archivos', link: '/secciones/seccion-22' },
          { text: '23 - WebHooks', link: '/secciones/seccion-23' },
          { text: '24 - Seguridad de Webhooks', link: '/secciones/seccion-24' },
          { text: '25 - Edge Functions con Netlify', link: '/secciones/seccion-25' },
          { text: '26 - Websockets', link: '/secciones/seccion-26' },
          { text: '27 - RESTApi + WebSockets', link: '/secciones/seccion-27' },
          { text: '28 - Cierre del curso', link: '/secciones/seccion-28' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tu-usuario/curso-nodejs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  }
})
