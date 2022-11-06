import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Lottie
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const vuetify = createVuetify({
  ssr: false,
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
})
createApp(App).use(vuetify, Vue3Lottie).mount('#app')
