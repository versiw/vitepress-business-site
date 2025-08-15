<template>
  <div class="relative flex h-screen w-full flex-col items-center justify-center bg-background">
    <span
      class="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-600/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-6"
    >
      XXX文化传媒
    </span>

    <LetterPullup
      words="你的品牌，我们懂；你的故事，我们讲"
      :delay="0.05"
      class="text-black dark:text-white text-2xl md:text-2xl"
    />

    <!-- <div class="h-[300px] w-full overflow-hidden">
      <VideoText src="https://cdn.magicui.design/ocean-small.webm"> 一伍一拾 </VideoText>
    </div> -->

    <!-- <div class="text-blance flex justify-center p-10">
      <div class="text-balance text-center text-6xl font-bold">
        <TextHighlight
          class="rounded-lg bg-gradient-to-r from-purple-300 to-orange-300"
          :duration="1000"
        >
          XXX </TextHighlight
        >文化传媒
      </div>
    </div> -->

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
import { useData } from 'vitepress'
import ParticlesBg from '../InspiraUI/ParticlesBg.vue'
import VideoText from '../InspiraUI/VideoText.vue'
import BlurReveal from '../InspiraUI/BlurReveal.vue'
import TextHighlight from '../InspiraUI/TextHighlight.vue'
import LetterPullup from '../InspiraUI/LetterPullup.vue'

const { isDark } = useData()
</script>
