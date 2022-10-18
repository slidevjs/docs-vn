import { resolve } from 'path'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '@slidev/client': resolve(__dirname, '.vitepress/@slidev/client'),
      '@slidev/parser': resolve(__dirname, '.vitepress/@slidev/parser'),
      '@slidev/theme-default': resolve(__dirname, '.vitepress/@slidev/theme-default'),
    },
  },
  optimizeDeps: {
    exclude: [
      'vue-demi',
      '@vueuse/shared',
      '@vueuse/core',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: [
        './.vitepress/theme/components',
        './.vitepress/@slidev/client/builtin',
      ],
      extensions: ['vue', 'md'],
      include: [
        /\.(vue|md)$/,
      ],
      resolvers: [
        IconsResolver({
          prefix: '',
        }),
      ],
    }),
    Icons(),
    Inspect(),
    WindiCSS({
      preflight: false,
    }),
    {
      name: 'code-block-escape',
      enforce: 'post',
      transform(code, id) {
        if (!id.endsWith('.md'))
          return
        return code.replace(/\/\/```/mg, '```')
      },
    },
    {
      name: 'virtual-modules',
      resolveId(id){
        return id === '/@slidev/configs' ? id : null
      },
      load(id) {
        if(id !== '/@slidev/configs')
        return
        return 'export default {}'
      }
    },
  ],
})
