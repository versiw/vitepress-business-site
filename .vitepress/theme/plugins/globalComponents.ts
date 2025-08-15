import Home from '../components/pages/Home.vue'
import type { App } from 'vue'

export function setupGlobalComponents(app: App) {
  app.component('Home', Home)
}
