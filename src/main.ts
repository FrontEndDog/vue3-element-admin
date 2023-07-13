import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//引入全局样式
import '@/styles/index.scss'

//引入路由
import router from '@/router'
app.use(router)

app.mount('#app')
