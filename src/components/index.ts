import { App, DefineComponent } from 'vue'

const modules: Record<string, { default: DefineComponent }> = import.meta.glob(['./**/*.vue'], {
  eager: true,
})

export default {
  install: (app: App) => {
    Object.values(modules).forEach((component) => {
      const { name } = component.default
      if (!name) return
      console.log('全局注册组件:', name)
      app.component(name, component.default)
    })
  },
}
