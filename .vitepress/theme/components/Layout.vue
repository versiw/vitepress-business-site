<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
const { isDark } = useData()
</script>

<template>
  <NConfigProvider
    :theme="isDark ? darkTheme : undefined"
    :locale="zhCN"
    :date-locale="dateZhCN"
    preflight-style-disabled
  >
    <DefaultTheme.Layout></DefaultTheme.Layout>
  </NConfigProvider>
  <BackTop />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
