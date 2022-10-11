import path, { resolve } from 'path'
import { promises as fs } from 'fs'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import svgLoader from 'vite-svg-loader'
import requireTransform from 'vite-plugin-require-transform'
import Icons from 'unplugin-icons/vite'
import viteCompression from 'vite-plugin-compression';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
    
    viteCompression(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/reportEvent/', baseRoute: 'reportEvent' },
      ],
      routeStyle: 'nuxt',
      resolver: 'vue',
      extensions: ['vue'],
      onRoutesGenerated(routes) {
        // console.log(routes)
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
      deep: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // Unocss(),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),

    {
      name: 'fix-swipper-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper.css') return 'fix-swiper.css'
        if (id === 'swiper-effect-fade.css') return 'fix-swiper-effect-fade.css'
        if (id === 'swiper-navigation.css') return 'fix-swiper-navigation.css'
        if (id === 'swiper-pagination.css') return 'fix-swiper-pagination.css'
        if (id === 'swiper-scrollbar.css') return 'fix-swiper-scrollbar.css'
      },
      async load(id) {
        if (id === 'fix-swiper.css') {
          return await fs.readFile(
            './node_modules/swiper/swiper.min.css',
            'utf-8',
          )
        }
        if (id === 'fix-swiper-effect-fade.css') {
          return await fs.readFile(
            './node_modules/swiper/modules/effect-fade/effect-fade.min.css',
            'utf-8',
          )
        }
        if (id === 'fix-swiper-navigation.css') {
          return await fs.readFile(
            './node_modules/swiper/modules/navigation/navigation.min.css',
            'utf-8',
          )
        }
        if (id === 'fix-swiper-pagination.css') {
          return await fs.readFile(
            './node_modules/swiper/modules/pagination/pagination.min.css',
            'utf-8',
          )
        }
        if (id === 'fix-swiper-scrollbar.css') {
          return await fs.readFile(
            './node_modules/swiper/modules/scrollbar/scrollbar.min.css',
            'utf-8',
          )
        }
      },
    },

    requireTransform(fileRegex = /.ts$|.tsx$/, prefix = '_vite_plugin_require_transform_'),
  
    Icons({ /* options */ }),
  ],


  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      'axios',
      '@vuelidate/core',
      '@vuelidate/validators',
      'swiper',
      'vue-the-mask',
      'vue-universal-modal',
      'vue3-mq',
    ],
    exclude: [
      'vue-demi',
    ],
  },


  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    manifest: true,
    sourcemap: true,
  },

})
