# Cấu hình Vite

<Environment type="node" />

Slidev được cung cấp bởi [Vite](http://vitejs.dev/). Điều này có nghĩa là bạn có thể tận dụng hệ thống plugin tuyệt vời của Vite để tùy chỉnh các trang trình bày của mình hơn nữa.

Nếu có file `vite.config.js` trong dự án, nó sẽ được đọc.

Slidev có các plugin sau được cấu hình sẵn:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

<<<<<<< HEAD
Tìm hiểu thêm về [Cấu hình trước đó](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).
=======
Learn more about the [pre-configurations here](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configure Internal Plugins

> Available since v0.21

To configure the built-in plugins list above, create `vite.config.ts` with the following content. Please note Slidev has some preconfigure options for those plugins, this usage will override some of them, which could potentially cause the app to break. Please treat this as **an advanced feature**, make sure you know what you are doing before moving on.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

See the [type declarations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) for more options.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
