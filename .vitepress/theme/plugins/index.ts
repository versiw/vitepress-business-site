import type { EnhanceAppContext } from 'vitepress/dist/client/index.js'
import { setupGlobalComponents } from './globalComponents'

export const setupPlugins = (ctx: EnhanceAppContext) => {
  const { app, router, siteData } = ctx
  setupGlobalComponents(app)
}
