<template>
  <div class="flex h-screen w-full flex-col items-center justify-center pb-4 select-none">
    <div class="pb-12 text-3xl font-semibold sm:text-5xl">
      关于我们 <span class="text-5xl">😎</span>
    </div>
    <div class="flex h-[480px] w-9/10 rounded-xl flex-col gap-4">
      <!-- <CardSpotlight
        class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
      >
        XXX
        广告传媒，是一家专注于品牌策略、创意传播与数字营销的创新型广告传媒机构。我们以深刻的洞察力、前沿的创意表达和数据驱动的执行力，为品牌构建具有辨识度与影响力的市场形象。
        自成立以来，我们始终相信：​每一个品牌，都有其独特的声音；每一次传播，都是一次价值的共鸣。​​
        我们致力于成为品牌与受众之间最具共鸣的桥梁，通过精准的策略规划、富有张力的创意内容和高效的媒介整合，帮助客户在复杂的市场环境中脱颖而出。
      </CardSpotlight> -->
      <CardSpotlight
        class="cursor-pointer flex flex-col items-center justify-center p-6 text-left shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
        :gradientOpacity="0.9"
      >
        <div
          class="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-gray-300 w-4/5 mx-auto"
        >
          <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
            <div class="mb-4 leading-relaxed">
              XXX 广告传媒，是一家专注于品牌策略、创意传播与数字营销的创新型广告传媒机构。
            </div>

            <div class="mb-4 leading-relaxed">
              我们以深刻的洞察力、前沿的创意表达和数据驱动的执行力，为品牌构建具有辨识度与影响力的市场形象。
            </div>
            <div class="mb-4 leading-relaxed">
              自成立以来，我们始终相信：每一个品牌，都有其独特的声音；每一次传播，都是一次价值的共鸣。
            </div>
            <div>
              我们致力于成为品牌与受众之间最具共鸣的桥梁，通过精准的策略规划、富有张力的创意内容和高效的媒介整合，
              帮助客户在复杂的市场环境中脱颖而出。
            </div>
          </BlurReveal>
        </div>
      </CardSpotlight>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

import CardSpotlight from '../InspiraUI/CardSpotlight.vue'
import BlurReveal from '../InspiraUI/BlurReveal.vue'

const { isDark } = useData()
</script>
