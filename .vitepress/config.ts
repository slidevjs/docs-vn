import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import vite from '../vite.config'

const CURRENT_VERSION = '0.47.1'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Tại sao chọn Slidev',
    link: '/guide/why',
  },
  {
    text: 'Bắt đầu',
    link: '/guide/',
  },
  {
    text: 'Cài đặt',
    link: '/guide/install',
  },
  {
    text: 'Cú pháp Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Navigation',
    link: '/guide/navigation',
  },
  {
    text: 'Animations',
    link: '/guide/animations',
  },
  {
    text: 'Xuất trang trình bày',
    link: '/guide/exporting',
  },
  {
<<<<<<< HEAD
    text: 'Ghi lại bản trình bày',
=======
    text: 'Static Hosting',
    link: '/guide/hosting',
  },
  {
    text: 'Record Presentation',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/recording',
  },
  {
    text: 'Chế độ trình bày',
    link: '/guide/presenter-mode',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
<<<<<<< HEAD
    text: 'Tích hợp trình soạn thảo',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
    link: '/guide/drawing',
  },
  {
    text: 'Editor Integrations',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Sử dụng chủ đề',
    link: '/themes/use',
  },
  {
    text: 'Thư viện chủ đề',
    link: '/themes/gallery',
  },
  {
    text: 'Viết chủ đề mới',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Việt Nam'
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
=======
    text: 'Use Addon',
    link: '/addons/use',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
  },
]

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Tùy chỉnh',
    link: '/custom/',
  },
  {
    text: 'Cấu trúc thư mục',
    link: '/custom/directory-structure',
  },
  {
    text: 'Font',
    link: '/custom/fonts',
  },
  {
    text: 'Đánh dấu',
    link: '/custom/highlighters',
  },
  {
    text: 'Cấu hình Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Cấu hình Vite',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Cấu hình Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
  },
  {
    text: 'Cấu hình Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Cấu hình KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Cấu hình Mermaid',
    link: '/custom/config-mermaid',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Cấu hình Phím tắt',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Global Context',
    link: '/custom/vue-context',
  },
  {
    text: 'Global Layers',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Showcases',
    link: '/showcases',
  },
  {
<<<<<<< HEAD
    text: 'Quản lý slide',
=======
    text: 'Learning Resources',
    link: '/resources/learning',
  },
  {
    text: 'Curated Covers',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Hướng dẫn',
    children: Guide,
  },
  {
    text: 'Chủ đề',
    children: Theme,
  },
  {
    text: 'Các tùy chỉnh',
    children: Customizations,
  },
  {
    text: 'Tích hợp',
    children: [
      {
        text: 'Component',
        link: '/builtin/components',
      },
      {
        text: 'Layout',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Trang trình bày dành cho nhà lập trình',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Trang trình bày dành cho nhà lập trình' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
<<<<<<< HEAD:.vitepress/config.js
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Đề xuất các thay đổi cho trang này',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:vn']
      }
=======
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Hướng dẫn',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Chủ đề',
        items: Theme,
      },
      {
        text: 'Tùy chỉnh',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
      },
      {
        text: 'Tài nguyên',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Việt Nam',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
