import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import messages from './locales'
import { defaultLocale } from './locales'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(Antd)

app.mount('#app')
