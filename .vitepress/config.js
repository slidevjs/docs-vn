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
<<<<<<< HEAD
<<<<<<< HEAD
    text: 'Tích hợp trình soạn thảo',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> 46f11048bbcb1c239aeff6e3b8061dbba0f779ed
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

const Addon = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
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
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
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
<<<<<<< HEAD
    text: 'Cấu hình Phím tắt',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> 46f11048bbcb1c239aeff6e3b8061dbba0f779ed
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

const BuiltIn = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Resources = [
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
<<<<<<< HEAD
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
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Customizations',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: BuiltIn,
>>>>>>> 46f11048bbcb1c239aeff6e3b8061dbba0f779ed
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

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:vn']
      }
    },

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
<<<<<<< HEAD
        text: 'Tùy chỉnh',
        items: Customizations,
      },
      {
        text: 'Tài nguyên',
=======
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Customize',
        items: Customizations,
      },
      {
        text: 'Built-in',
        items: BuiltIn,
      },
      {
        text: 'Resources',
>>>>>>> 46f11048bbcb1c239aeff6e3b8061dbba0f779ed
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
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
