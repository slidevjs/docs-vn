// @ts-check

const Guide = [
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
    text: 'Ghi lại bản trình bày',
    link: '/guide/recording',
  },
  {
    text: 'Chế độ trình bày',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Tích hợp trình soạn thảo',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
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

const Translations = [
  {
    text: 'Việt Nam'
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
]

const Customizations = [
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
    text: 'Cấu hình Windi CSS',
    link: '/custom/config-windicss',
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
    text: 'Cấu hình Phím tắt',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Global Context',
    link: '/custom/vue-context',
  },
  {
    text: 'Global Layers',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Showcases',
    link: '/showcases',
  },
  {
    text: 'Quản lý slide',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
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
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Đề xuất các thay đổi cho trang này',

    nav: [
      {
        text: 'Hướng dẫn',
        items: Guide,
      },
      {
        text: 'Chủ đề',
        items: Theme,
      },
      {
        text: 'Tùy chỉnh',
        items: Customizations,
      },
      {
        text: 'Tài nguyên',
        items: Resources,
      },
      {
        text: 'Việt Nam',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
