<template>
  <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-background">
    <div class="text-blance flex justify-center pb-10">
      <div class="text-balance text-center text-8xl font-bold">
        <TextHighlight
          class="rounded-2xl bg-gradient-to-r from-purple-300 to-orange-300"
          :duration="1000"
        >
          诗维
        </TextHighlight>
        创意设计
      </div>
    </div>

    <Confetti
      ref="confettiRef"
      class="absolute left-0 top-0 z-0 size-full"
      @mouseenter="fireConfetti"
    />

    <MorphingText :texts="texts" :morphTime="2" :coolDownTime="1" />

    <!-- 向下箭头 SVG -->
    <div class="absolute bottom-24 left-1/2 transform -translate-x-1/2">
      <div class="animate-bounce text-gray-500 dark:text-gray-300">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M5.94 5.94a1.5 1.5 0 0 1 2.12 0L12 9.878l3.94-3.94a1.5 1.5 0 0 1 2.12 2.122l-5 5a1.5 1.5 0 0 1-2.12 0l-5-5a1.5 1.5 0 0 1 0-2.122Zm0 6a1.5 1.5 0 0 1 2.12 0L12 15.878l3.94-3.94a1.5 1.5 0 0 1 2.12 2.122l-5 5a1.5 1.5 0 0 1-2.12 0l-5-5a1.5 1.5 0 0 1 0-2.122Z"
              />
            </g>
          </svg>
          <div class="text-sm">向下滚动</div>
        </div>
      </div>
    </div>

    <ParticlesBg
      class="absolute inset-0"
      :quantity="188"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import ParticlesBg from '../InspiraUI/ParticlesBg.vue'
import VideoText from '../InspiraUI/VideoText.vue'
import BlurReveal from '../InspiraUI/BlurReveal.vue'
import TextHighlight from '../InspiraUI/TextHighlight.vue'
import LetterPullup from '../InspiraUI/LetterPullup.vue'
import Confetti from '../InspiraUI/Confetti.vue'
import MorphingText from '../InspiraUI/MorphingText.vue'


const { isDark } = useData()
const confettiRef = ref(null)

function fireConfetti() {
  confettiRef.value?.fire({})
}

const texts = ['你的品牌，我们懂', '你的故事，我们讲']
</script>
