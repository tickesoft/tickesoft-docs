import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tickesoft Docs</span>,
  project: {
    link: 'https://github.com/tickesoft/tickesoft-docs',
  },
  docsRepositoryBase: 'https://github.com/tickesoft/tickesoft-docs/blob/main',
  footer: {
    text: <>With Love Tickesoft Team</>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Tickesoft Docs'
    }
  },
  search: {
    placeholder: 'Buscar...'
  },
  editLink: {
    text: 'Editar en github'
  },
  toc: {
    title: 'Indice'
  },
  feedback: {
    content: null
  }
}

export default config
