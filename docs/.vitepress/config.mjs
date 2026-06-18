import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Curso Node.js',
  description: 'Notas y documentación del curso de Node.js de Udemy',
  base: '/',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Secciones', link: '/secciones/01-introduccion/' },
      { text: 'GitHub', link: 'https://github.com/tu-usuario/curso-nodejs' }
    ],

    sidebar: {
      '/secciones/01-introduccion/': [
        {
          text: 'Sección 1: Introducción',
          items: [
            { text: 'Resumen', link: '/secciones/01-introduccion/' },
            { text: '01 - ¿Qué es Node.js?', link: '/secciones/01-introduccion/01-que-es-node' },
            { text: '02 - Instalación y REPL', link: '/secciones/01-introduccion/02-instalacion' },
            { text: '03 - Módulo fs', link: '/secciones/01-introduccion/03-modulo-fs' },
            { text: '04 - Event Loop', link: '/secciones/01-introduccion/04-event-loop' },
            { text: '05 - Buffer vs String', link: '/secciones/01-introduccion/05-buffer-vs-string' },
          ]
        }
      ],

      '/secciones/02-fundamentos-node/': [
        {
          text: 'Sección 2: Fundamentos de Node',
          items: [
            { text: 'Resumen', link: '/secciones/02-fundamentos-node/' },
            { text: '01 - CommonJS', link: '/secciones/02-fundamentos-node/01-commonjs' },
            { text: '02 - Template Literals', link: '/secciones/02-fundamentos-node/02-template-literals' },
            { text: '03 - Desestructuración y process.env', link: '/secciones/02-fundamentos-node/03-destructuring' },
          ]
        }
      ],

      '/secciones/03-desarrollo-node-typescript/': [
        {
          text: 'Sección 3: Desarrollando en Node + TypeScript',
          items: [
            { text: 'Resumen', link: '/secciones/03-desarrollo-node-typescript/' },
            { text: 'Parte 1: JavaScript avanzado', collapsed: true, items: [
              { text: 'Resumen Parte 1', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/' },
              { text: '01 - Inicio de proyecto', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/01-inicio-proyecto' },
              { text: '02 - Scripts de package.json', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/02-scripts-package-json' },
              { text: '03 - Import / Export', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/03-import-export' },
              { text: '04 - Nodemon', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/04-nodemon' },
              { text: '05 - Variables de entorno', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/05-variables-entorno' },
              { text: '06 - Depuración', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/06-depuracion' },
              { text: '07 - Callbacks', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/07-callbacks' },
              { text: '08 - Arrow Functions', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/08-arrow-functions' },
              { text: '09 - Factory Functions', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/09-factory-functions' },
              { text: '10 - Promesas y async/await', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/10-promesas-async' },
              { text: '11 - Patrón Adaptador HTTP', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/11-patron-adaptador-http' },
              { text: '12 - Axios', link: '/secciones/03-desarrollo-node-typescript/parte-1-js-fundamentos/12-axios' },
            ]},
            { text: 'Parte 2: Loggers + TypeScript', collapsed: true, items: [
              { text: 'Resumen Parte 2', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/' },
              { text: '01 - ¿Por qué un Logger?', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/01-que-es-un-logger' },
              { text: '02 - Winston: instalación', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/02-winston-instalacion' },
              { text: '03 - Formatos y Transports', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/03-formatos-transports' },
              { text: '04 - Patrón Adaptador (Logger)', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/04-adapter-logger' },
              { text: '05 - Factory con Logger', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/05-factory-con-logger' },
              { text: '06 - ¿Por qué TypeScript?', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/06-typescript-intro' },
              { text: '07 - Instalación de TS', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/07-tsconfig' },
              { text: '08 - tsconfig.json', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/08-tsc-compilador' },
              { text: '09 - TSC (compilador)', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/09-migracion-js-ts' },
              { text: '10 - Migración .js → .ts', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/10-ts-node' },
              { text: '11 - ts-node y nodemon', link: '/secciones/03-desarrollo-node-typescript/parte-2-loggers-typescript/11-nodemon-ts-node' },
            ]},
          ]
        }
      ],

      '/secciones/04-bases-node-typescript-continuacion/': [
        {
          text: 'Sección 4: Bases de Node + TypeScript',
          items: [
            { text: 'Resumen', link: '/secciones/04-bases-node-typescript-continuacion/' },
          ]
        }
      ],

      '/secciones/05-introduccion-testing/': [
        {
          text: 'Sección 5: Introducción al testing',
          items: [
            { text: 'Resumen', link: '/secciones/05-introduccion-testing/' },
          ]
        }
      ],

      '/secciones/06-app-consola-clean-architecture/': [
        {
          text: 'Sección 6: Clean Architecture',
          items: [
            { text: 'Resumen', link: '/secciones/06-app-consola-clean-architecture/' },
          ]
        }
      ],

      '/secciones/07-app-consola-testing/': [
        {
          text: 'Sección 7: Testing de la app de consola',
          items: [
            { text: 'Resumen', link: '/secciones/07-app-consola-testing/' },
          ]
        }
      ],

      '/secciones/08-app-monitoreo-noc/': [
        {
          text: 'Sección 8: App de Monitoreo - NOC',
          items: [
            { text: 'Resumen', link: '/secciones/08-app-monitoreo-noc/' },
          ]
        }
      ],

      '/secciones/09-clean-architecture-repository/': [
        {
          text: 'Sección 9: Clean Architecture - Repository Pattern',
          items: [
            { text: 'Resumen', link: '/secciones/09-clean-architecture-repository/' },
          ]
        }
      ],

      '/secciones/10-correos-electronicos/': [
        {
          text: 'Sección 10: Correos electrónicos',
          items: [
            { text: 'Resumen', link: '/secciones/10-correos-electronicos/' },
          ]
        }
      ],

      '/secciones/11-mongodb-postgresql/': [
        {
          text: 'Sección 11: MongoDB y PostgreSQL',
          items: [
            { text: 'Resumen', link: '/secciones/11-mongodb-postgresql/' },
          ]
        }
      ],

      '/secciones/12-noc-testing-clean-architecture/': [
        {
          text: 'Sección 12: NOC + Testing + Clean Architecture',
          items: [
            { text: 'Resumen', link: '/secciones/12-noc-testing-clean-architecture/' },
          ]
        }
      ],

      '/secciones/13-webserver-http/': [
        {
          text: 'Sección 13: WebServer - Http/Http2',
          items: [
            { text: 'Resumen', link: '/secciones/13-webserver-http/' },
          ]
        }
      ],

      '/secciones/14-restserver/': [
        {
          text: 'Sección 14: RestServer',
          items: [
            { text: 'Resumen', link: '/secciones/14-restserver/' },
          ]
        }
      ],

      '/secciones/15-restserver-postgresql/': [
        {
          text: 'Sección 15: RestServer + PostgreSQL',
          items: [
            { text: 'Resumen', link: '/secciones/15-restserver-postgresql/' },
          ]
        }
      ],

      '/secciones/16-rest-clean-architecture/': [
        {
          text: 'Sección 16: Rest - Clean Architecture',
          items: [
            { text: 'Resumen', link: '/secciones/16-rest-clean-architecture/' },
          ]
        }
      ],

      '/secciones/17-rest-testing/': [
        {
          text: 'Sección 17: Rest Testing',
          items: [
            { text: 'Resumen', link: '/secciones/17-rest-testing/' },
          ]
        }
      ],

      '/secciones/18-autenticacion-autorizacion/': [
        {
          text: 'Sección 18: Autenticación y Autorización',
          items: [
            { text: 'Resumen', link: '/secciones/18-autenticacion-autorizacion/' },
          ]
        }
      ],

      '/secciones/19-correos-tokens/': [
        {
          text: 'Sección 19: Correo + Validación de Tokens',
          items: [
            { text: 'Resumen', link: '/secciones/19-correos-tokens/' },
          ]
        }
      ],

      '/secciones/20-proteccion-rutas/': [
        {
          text: 'Sección 20: Protección, relaciones, middlewares y paginación',
          items: [
            { text: 'Resumen', link: '/secciones/20-proteccion-rutas/' },
          ]
        }
      ],

      '/secciones/21-relaciones-semilla/': [
        {
          text: 'Sección 21: Relaciones y semilla',
          items: [
            { text: 'Resumen', link: '/secciones/21-relaciones-semilla/' },
          ]
        }
      ],

      '/secciones/22-carga-archivos/': [
        {
          text: 'Sección 22: Carga de archivos',
          items: [
            { text: 'Resumen', link: '/secciones/22-carga-archivos/' },
          ]
        }
      ],

      '/secciones/23-webhooks/': [
        {
          text: 'Sección 23: WebHooks',
          items: [
            { text: 'Resumen', link: '/secciones/23-webhooks/' },
          ]
        }
      ],

      '/secciones/24-seguridad-webhooks/': [
        {
          text: 'Sección 24: Seguridad de WebHooks',
          items: [
            { text: 'Resumen', link: '/secciones/24-seguridad-webhooks/' },
          ]
        }
      ],

      '/secciones/25-edge-functions-netlify/': [
        {
          text: 'Sección 25: Edge Functions con Netlify',
          items: [
            { text: 'Resumen', link: '/secciones/25-edge-functions-netlify/' },
          ]
        }
      ],

      '/secciones/26-websockets/': [
        {
          text: 'Sección 26: WebSockets',
          items: [
            { text: 'Resumen', link: '/secciones/26-websockets/' },
          ]
        }
      ],

      '/secciones/27-restapi-websockets/': [
        {
          text: 'Sección 27: RESTApi + WebSockets',
          items: [
            { text: 'Resumen', link: '/secciones/27-restapi-websockets/' },
          ]
        }
      ],

      '/secciones/28-cierre-curso/': [
        {
          text: 'Sección 28: Cierre del curso',
          items: [
            { text: 'Resumen', link: '/secciones/28-cierre-curso/' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tu-usuario/curso-nodejs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  }
})
