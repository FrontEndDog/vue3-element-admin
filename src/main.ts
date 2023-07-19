import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

//引入全局样式
import '@/styles/index.scss'

//引入路由
import router from '@/router'
app.use(router)

//引入全局组件
import components from '@/components'
app.use(components)

//引入pinia状态管理
import pinia from '@/store'
app.use(pinia)

app.mount('#app')
