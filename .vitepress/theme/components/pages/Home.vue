<template>
  <ClientOnly>
    <!-- 
    ​Hero Section（英雄区 / 首屏区）​​
        核心展示区，通常包含企业主视觉（如大图/视频）、Slogan（宣传语）、CTA按钮（如“了解更多”）。
    ​Product/Service Showcase（产品/服务展示区）​​
        展示企业核心产品或服务，常用图标、图文结合的方式突出卖点。
    ​Case Studies / Partners（客户案例/合作伙伴区）​​
        展示成功案例、客户评价或合作品牌LOGO，增强可信度。
    ​About Us / Company Intro（关于我们/公司介绍区）​​
        简要介绍企业背景、使命或团队，部分网站会单独放“Team（团队）”区块。
    ​Call to Action (CTA) / Contact Section（行动号召/联系我们区）​​
        包含联系方式、表单、咨询按钮等，引导用户转化（如预约、购买）。 -->
    <div id="fullpage">
      <div class="section">
        <Hero />
      </div>
      <div class="section active">
        <Service />
      </div>
      <div class="section">
        <Partner />
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <Contact />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import Hero from '../features/Hero.vue'
import Partner from '../features/Partner.vue'
import Service from '../features/Service.vue'
import About from '../features/About.vue'
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
