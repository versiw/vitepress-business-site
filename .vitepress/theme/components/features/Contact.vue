<template>
  <div class="flex h-screen w-full flex-col items-center justify-center pb-4 select-none">
    <!-- 标题 -->
    <div class="pb-12 text-3xl font-semibold sm:text-5xl">
      联系我们 <span class="text-5xl">📧</span>
    </div>

    <!-- ✅ 响应式一行两列 / 移动端单列 -->
    <div class="flex flex-col gap-6 w-full max-w-4xl sm:flex-row px-12">
      <!-- 左列：联系方式 -->
      <div class="flex-1 bg-gray-100 p-6 rounded-xl dark:bg-[#171717] shadow-xl">
        <h3 class="text-lg font-semibold mb-2">📞 联系方式</h3>

        <!-- 电话（带复制图标） -->
        <div class="flex items-center justify-between mb-2">
          <span>电话：+86 123-4567-8900</span>
          <button
            @click="copyToClipboard('+86 123-4567-8900')"
            class="ml-2 text-blue-500 hover:text-blue-700 cursor-pointer"
            title="点击复制"
          >
            📋
          </button>
        </div>

        <!-- 邮箱（带复制图标） -->
        <div class="flex items-center justify-between mb-2">
          <span>邮箱：contact@example.com</span>
          <button
            @click="copyToClipboard('contact@example.com')"
            class="ml-2 text-blue-500 hover:text-blue-700 cursor-pointer"
            title="点击复制"
          >
            📋
          </button>
        </div>
      </div>

      <!-- 右列：地址信息 -->
      <div class="flex-1 bg-gray-100 p-6 rounded-xl dark:bg-[#171717] shadow-xl">
        <h3 class="text-lg font-semibold mb-2">📍 公司地址</h3>

        <!-- 地址（带复制图标） -->
        <div class="flex items-center justify-between mb-2">
          <span>地址：北京市朝阳区xxx街道</span>
          <button
            @click="copyToClipboard('北京市朝阳区xxx街道')"
            class="ml-2 text-blue-500 hover:text-blue-700 cursor-pointer"
            title="点击复制"
          >
            📋
          </button>
        </div>

        <!-- 邮编（带复制图标） -->
        <div class="flex items-center justify-between">
          <span>邮编：100000</span>
          <button
            @click="copyToClipboard('100000')"
            class="ml-2 text-blue-500 hover:text-blue-700 cursor-pointer"
            title="点击复制"
          >
            📋
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 复制到剪贴板
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('✅ 已复制到剪贴板: ' + text)
        })
        .catch((err) => {
          console.error('复制失败:', err)
          alert('❌ 复制失败，请手动复制')
        })
    }
  }
}
</script>
