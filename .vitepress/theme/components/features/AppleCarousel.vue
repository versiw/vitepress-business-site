<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 轮播容器 -->
    <div
      ref="carouselRef"
      class="flex overflow-x-hidden rounded-none cursor-grab active:cursor-grabbing"
      @scroll="handleScroll"
      @mouseenter="pauseAutoPlayOnHover"
      @mouseleave="resumeAutoPlayOnLeave"
    >
      <div class="flex gap-6 px-6 py-8" style="width: max-content">
        <div
          v-for="(item, index) in carouselData"
          :key="index"
          class="flex-shrink-0 w-[320px] h-[60vh] rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <!-- 图片区域 -->
          <div class="relative w-full h-[60%] overflow-hidden rounded-t-2xl">
            <img
              :src="item.src"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <!-- 分类标签 -->
            <div
              class="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ item.category }}
            </div>
          </div>

          <!-- 内容区域 -->
          <div class="p-6 flex flex-col justify-between h-[40%]">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600 line-clamp-2">
              {{ item.description || '探索更多可能，体验创新与效率提升。' }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 双向圆形切换控件（始终显示两个） -->
    <div class="flex justify-center gap-4">
      <!-- 向左切换按钮 -->
      <button
        @click="scrollToIndex(currentIndex - 1)"
        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
        :disabled="carouselData.length <= 1"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <!-- 向右切换按钮 -->
      <button
        @click="scrollToIndex(currentIndex + 1)"
        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
        :disabled="carouselData.length <= 1"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- 指示器 -->
    <div v-if="showIndicators" class="flex justify-center mt-4 gap-2">
      <button
        v-for="(item, index) in carouselData"
        :key="`indicator-${index}`"
        @click="scrollToIndex(index)"
        class="w-3 h-3 rounded-full transition-all duration-200 cursor-pointer"
        :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'"
      ></button>
    </div>

    <!-- 自动播放控制 -->
    <div v-if="showAutoPlayControl" class="flex justify-center mt-4">
      <button
        @click="toggleAutoPlay"
        class="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-200"
      >
        {{ isAutoPlaying ? '暂停自动播放' : '开启自动播放' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 定义轮播图数据接口
interface CarouselItem {
  category: string
  title: string
  src: string
  description?: string
}

// 定义组件属性接口
interface Props {
  data?: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showIndicators?: boolean
  showAutoPlayControl?: boolean
  shadow?: 'default' | 'light' | 'heavy'
}

// 设置默认属性值
const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  autoPlay: true,
  autoPlayInterval: 4000,
  showIndicators: true,
  showAutoPlayControl: true,
  shadow: 'default'
})

// 轮播图数据
const carouselData = ref<CarouselItem[]>(
  props.data.length > 0
    ? props.data
    : [
        {
          category: 'Artificial Intelligence',
          title: 'You can do more with AI.',
          src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          category: 'Productivity',
          title: 'Enhance your productivity.',
          src: 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          category: 'Product',
          title: 'Launching the new Apple Vision Pro.',
          src: 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          category: 'Product',
          title: 'Maps for your iPhone 15 Pro Max.',
          src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          category: 'iOS',
          title: 'Photography just got better.',
          src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          category: 'Hiring',
          title: 'Hiring for a Staff Software Engineer',
          src: 'https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
)

// 响应式数据
const carouselRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const isAutoPlaying = ref(props.autoPlay)

// 计算属性
const showPrevButton = computed(() => true)
const showNextButton = computed(() => true)

// 阴影样式配置
const shadowConfig = {
  default: {
    normal: 'shadow-card',
    hover: 'shadow-card-hover'
  },
  light: {
    normal: 'shadow-sm',
    hover: 'shadow-md'
  },
  heavy: {
    normal: 'shadow-lg',
    hover: 'shadow-xl'
  }
}

// 动态阴影类
const shadowCard = computed(() => shadowConfig[props.shadow].normal)
const shadowCardHover = computed(() => shadowConfig[props.shadow].hover)

// 自动播放定时器
let autoPlayTimer: number | null = null

// 卡片尺寸配置
const CARD_WIDTH = 320
const CARD_GAP = 24
const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_GAP

// 滚动到指定索引（支持循环切换）
const scrollToIndex = (index: number) => {
  if (!carouselRef.value || carouselData.value.length <= 1) return

  // 停止当前自动播放，避免计时器冲突
  stopAutoPlay()

  const targetIndex = index

  // 循环切换逻辑
  let finalIndex = targetIndex
  if (finalIndex < 0) {
    finalIndex = carouselData.value.length - 1 // 向左循环到最后一个
  } else if (finalIndex >= carouselData.value.length) {
    finalIndex = 0 // 向右循环到第一个
  }

  const scrollPosition = finalIndex * CARD_TOTAL_WIDTH + 24 // 加上 padding

  carouselRef.value.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  })

  currentIndex.value = finalIndex

  // 重新启动自动播放
  if (isAutoPlaying.value) {
    // 使用 setTimeout 确保滚动完成后再重启自动播放
    setTimeout(() => {
      startAutoPlay()
    }, 500) // 比 smooth scroll 的默认时间稍长一些
  }
}

// 处理滚动事件 - 根据实际滚动位置更新当前索引
const handleScroll = () => {
  if (!carouselRef.value || carouselData.value.length <= 1) return

  const cardTotalWidth = CARD_WIDTH + CARD_GAP
  const scrollLeft = carouselRef.value.scrollLeft
  const newIndex = Math.round((scrollLeft - 24) / cardTotalWidth) // 减去 padding

  if (!isNaN(newIndex)) {
    const clampedIndex = Math.max(0, Math.min(newIndex, carouselData.value.length - 1))
    if (clampedIndex !== currentIndex.value) {
      currentIndex.value = clampedIndex
    }
  }
}

// 自动播放控制
const startAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (carouselData.value.length <= 1) return

  autoPlayTimer = window.setInterval(() => {
    if (currentIndex.value < carouselData.value.length - 1) {
      scrollToIndex(currentIndex.value + 1)
    } else {
      scrollToIndex(0) // 循环到第一张
    }
  }, props.autoPlayInterval)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// 鼠标悬停时暂停自动播放
const pauseAutoPlayOnHover = () => {
  if (isAutoPlaying.value) {
    stopAutoPlay()
  }
}

// 鼠标离开时恢复自动播放
const resumeAutoPlayOnLeave = () => {
  if (isAutoPlaying.value && !autoPlayTimer) {
    startAutoPlay()
  }
}

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

// 生命周期
onMounted(() => {
  if (isAutoPlaying.value && carouselData.value.length > 1) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 阴影样式 */
.shadow-card {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-card-hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 按钮禁用状态 */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:disabled:hover {
  transform: none;
}
</style>
