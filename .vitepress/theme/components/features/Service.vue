<template>
  <div class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
    <div class="text-center z-10">
      <div
        class="pb-12 text-3xl font-semibold sm:text-5xl text-white flex items-center justify-center gap-x-4"
      >
        <span>设计服务</span>
        <span>✨</span>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 z-10"
      @mouseleave="startCarousel"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
        @mouseover="
          stopCarousel()
          hoveredIndex = index
        "
        :class="{ 'is-active': hoveredIndex === index }"
      >
        <div
          class="card-content p-6 rounded-lg text-center flex flex-col justify-center items-center"
        >
          <h3 class="text-3xl font-bold mb-4">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>

    <div
      v-for="(service, index) in services"
      :key="index"
      class="background-image"
      :style="{
        backgroundImage: `url(${service.src})`,
        opacity: hoveredIndex === index ? 1 : 0,
        transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1.1)',
        filter: hoveredIndex === index ? 'blur(0px) brightness(0.9)' : 'blur(20px) brightness(0.5)'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const hoveredIndex = ref(0)
let carouselTimer: any = null

const startCarousel = () => {
  if (carouselTimer) return
  carouselTimer = setInterval(() => {
    hoveredIndex.value = (hoveredIndex.value + 1) % services.length
  }, 3000)
}

const stopCarousel = () => {
  clearInterval(carouselTimer)
  carouselTimer = null
}

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})

interface Service {
  title: string
  description: string
  src: string
}

const services: Service[] = [
  {
    title: '品牌设计',
    description: '塑造独特品牌形象，传递核心价值。',
    src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'UI/UX 设计',
    description: '打造无缝的用户体验，提升产品价值。',
    src: 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: '网页设计',
    description: '构建创意与功能兼备的响应式网站。',
    src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
</script>

<style scoped>
.service-card {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-card .card-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-content h3,
.card-content p {
  color: white;
  opacity: 0.7;
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.service-card:hover .card-content h3 {
  transform: scale(1.1);
}

.service-card.is-active {
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 20px 5px rgba(255, 255, 255, 0.1);
}

.service-card.is-active .card-content h3,
.service-card.is-active .card-content p {
  opacity: 1;
}

.service-card:not(.is-active) {
  opacity: 0.7;
  transform: scale(0.95);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition:
    opacity 0.7s ease-in-out,
    filter 0.7s ease-in-out,
    transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}
</style>
