import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    tailwindcss(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      },
      format: {
        comments: false
      }
    },
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'naive-ui-vendor': ['naive-ui']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vitepress']
  },
  ssr: {
    noExternal: ['naive-ui', 'date-fns', 'vueuc']
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
