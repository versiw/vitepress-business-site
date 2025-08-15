<template>
  <ClientOnly>
    <div id="fullpage">
      <div class="section">
        <Hero />
      </div>
      <div class="section">
        <Contact />
      </div>
      <div class="section">
        <section id="about" class="h-screen flex items-center justify-center bg-green-100">
          <h2 class="text-3xl font-bold text-gray-800">📌 关于我们</h2>
        </section>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import Hero from '../features/Hero.vue'
import Contact from '../features/Contact.vue'

onMounted(async () => {
  let fullpage
  if (typeof window !== 'undefined') {
    fullpage = (await import('fullpage.js')).default
    new fullpage('#fullpage', {
      licenseKey: 'license here',
      autoScrolling: true,
      scrollHorizontally: true,
      fitToSection: true, // 每个部分适应整个视口
      scrollBar: false, // 不使用浏览器的滚动条
      scrollingSpeed: 700, // 滚动速度（毫秒），可以根据需要调整
      credits: {
        enabled: false,
        label: 'Made with fullPage.js',
        position: 'right'
      }
    })
  }
})
</script>

<style lang="scss">
div.fp-watermark {
  display: none !important;
}
</style>
