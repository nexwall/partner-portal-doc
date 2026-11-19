import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const baseUrl = process.env.BASE_URL || '/'

const config: Config = {
  title: "Nexwall Partner Portal Documentation",
  tagline: "Run your Nexwall business from one portal",
  favicon: 'img/favicon.svg',
  url: 'https://partnerdocs.nexwall.com.br',
  baseUrl,
  organizationName: 'nexwall',
  projectName: "partner-portal-doc",
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  future: { v4: true, faster: true },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'es'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en' },
      'pt-BR': { label: 'Português (Brasil)', htmlLang: 'pt-BR' },
      es: { label: 'Español', htmlLang: 'es' }
    }
  },
  presets: [['classic', { docs: { routeBasePath: 'docs', sidebarPath: './sidebars.ts' }, blog: false, theme: { customCss: './src/css/custom.css' } } satisfies Preset.Options]],
  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: 'NEXWALL',
      items: [
        { type: 'docSidebar', sidebarId: 'manual', position: 'left', label: "Partner guide" },
        { type: 'localeDropdown', position: 'right' },
        { href: 'https://docs.nexwall.com.br', label: 'Firewall docs', position: 'right' },
        { href: "https://partner.nexwall.com.br", label: "Open the portal", position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Documentation', items: [{ label: "Getting started", to: '/docs/getting-started/overview' }, { label: 'Firewall docs', href: 'https://docs.nexwall.com.br' }] },
        { title: 'Nexwall', items: [{ label: 'Website', href: 'https://nexwall.com.br' }, { label: 'Release notes', href: 'https://releasenotes.nexwall.com.br/' }] }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nexwall. Documentation licensed under CC BY-NC 4.0.`
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash', 'json'] }
  } satisfies Preset.ThemeConfig
}

export default config
