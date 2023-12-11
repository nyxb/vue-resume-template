import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './vue/core/App.vue'
import { createAppRouter } from './router/router.js'
import { useData } from './composables/data.js'
import { useLanguage } from './composables/language.js'
import { useNavigation } from './composables/navigation.js'
import './scss/style.scss'

// Create a Pinia store
const pinia = createPinia()

const data = useData()

// Fetch essential data and then initialize the Vue application
data.fetchEssentials().then(() => {
   const language = useLanguage()
   language.init(data.getSettings().supportedLanguages)

   const navigation = useNavigation()
   navigation.init(data.getSections(), data.getCategories())

   const router = createAppRouter()

   // Create and mount the Vue application
   const app = createApp(App)
   app.use(router)
   app.use(pinia)
   app.mount('#app')
})
