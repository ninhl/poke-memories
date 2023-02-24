import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/global.css"
const app = createApp(App)
app.config.globalProperties.$index = 'my index'
app.mount('#app')
