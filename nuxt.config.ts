// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    port: 5100
  },
  build: {
    transpile: ['vuetify','@vuepic/vue-datepicker','v-phone-input',],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  components: [
    {
      path: '~/components', // Example: '~/components/navigation'
      pathPrefix: false  // If you want to use the component name directly (e.g., <SideMenu>)
    }
  ],
  modules: [
    //  '@sidebase/nuxt-auth',
    // 'maz-ui/nuxt',
    // 'maz-ui/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],


 
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    public : {
      TOKEN_URL: process.env.NUXT_TOKEN_URL,
    }
  }
})
