<template>
  <div class="flex h-screen w-full flex-col items-center justify-center pb-4 select-none">
    <div class="pb-12 text-3xl font-semibold sm:text-5xl">
      深受客户喜爱 <span class="text-5xl"> ❤️</span>
    </div>
    <div
      class="relative h-[480px] w-9/10 overflow-hidden rounded-xl border bg-white shadow-lg dark:bg-background"
    >
      <!-- Logo -->
      <!-- <div
        class="absolute left-1/2 top-8 z-20 my-4 -translate-x-1/2 rounded-3xl border bg-white/30 p-3 backdrop-blur-md"
      >
        <ClientOnly>
          <NuxtImg v-if="isDark" src="/logo-dark.svg" />
          <NuxtImg v-else src="/logo.svg" />
        </ClientOnly>
      </div> -->

      <!-- Center Text -->
      <div class="absolute inset-0 z-10 flex flex-col items-center justify-center px-2 text-center">
        <div class="mb-2 text-2xl font-bold sm:text-4xl">还在犹豫什么？</div>
        <div class="m-4 text-base sm:text-lg">
          从创意设计到制作执行，我们一站式搞定，让您的品牌现场吸睛无数！😄
        </div>
        <div>
          <NButton :color="isDark ? '#DFDFD6' : '#18181B'"> 开始合作 -> </NButton>
        </div>
      </div>

      <!-- Tilted Marquees -->
      <div class="absolute inset-0 overflow-hidden">
        <Marquee
          :style="{ transform: 'translateY(-11.5rem) rotate(-16deg)' }"
          class="marquee"
          :pause-on-hover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(1rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pause-on-hover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(13.5rem) rotate(-16deg)' }"
          class="marquee"
          :pause-on-hover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(26rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pause-on-hover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>
      </div>

      <!-- Gradient overlay to fade to white at the bottom -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-background"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Marquee from '../InspiraUI/Marquee.vue'
import ReviewCard from '../InspiraUI/ReviewCard.vue'
import { useData } from 'vitepress'

const { isDark } = useData()

// Reviews data
const reviews = [
  {
    name: '李女士',
    username: '@星耀品牌·市场总监',
    body: '设计太棒了！完全是我们想要的视觉效果～ 🥰',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '王先生',
    username: '@蓝海科技·品牌负责人',
    body: '专业度高，执行力强，现场效果超出预期！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '张女士',
    username: '@悦享传媒·创意总监',
    body: '从设计到落地，每个环节都无可挑剔！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '陈先生',
    username: '@新锐广告·创意总监',
    body: '创意很棒，精准抓住了品牌调性，太懂我们了！👍',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '刘女士',
    username: '@江南会展·活动策划',
    body: '现场布置太惊艳了！客户反馈特别好，以后就找你们了。',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '赵先生',
    username: '@智行互动·运营经理',
    body: '效率很高，沟通顺畅，设计感十足！✨',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '孙女士',
    username: '@云创品牌·设计主管',
    body: 'UI设计简洁大气，交互体验流畅，完全超出预期！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '周先生',
    username: '@启航文化·品牌主理人',
    body: '你们真的太专业了！从策划到执行，每个细节都处理得很到位，合作非常愉快～ 😊',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '吴女士',
    username: '@广告客户·市场经理',
    body: '设计很棒，干净利落，非常专业。',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '郑先生',
    username: '@活动执行·项目经理',
    body: '效果惊艳！现场氛围完全被你们的设计带起来了！👏',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '黄女士',
    username: '@品牌方·视觉负责人',
    body: 'UI设计很棒，视觉冲击力强，用户反馈也很好！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '徐先生',
    username: '@市场部·推广专员',
    body: '合作体验很棒，团队靠谱，会继续合作！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '朱女士',
    username: '@创意工坊·艺术指导',
    body: '整体视觉效果太赞了！配色和排版都很舒服，真心推荐！✨',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '何先生',
    username: '@品牌策划·策略总监',
    body: '专业、高效、有创意！是我们合作过最靠谱的设计团队之一。',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '高女士',
    username: '@数字营销·运营主管',
    body: '太惊喜了！设计不仅好看，还特别贴合我们的品牌定位，效果非常好！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  },
  {
    name: '梁先生',
    username: '@活动策划·执行经理',
    body: '现场布置太棒了！客户特别满意，感谢你们的用心！',
    img: 'https://api.iconify.design/mingcute:social-x-line.svg'
  }
]
// Rows
const firstRow = ref(reviews)
</script>

<style scoped>
.marquee {
  --duration: 40s;
  position: absolute;
  left: -10%;
  width: 120%;
  padding: 0.5rem 0;
}
</style>
