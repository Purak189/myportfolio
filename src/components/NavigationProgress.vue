<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const scrollWidth = ref(0);

    const updateScrollWidth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollWidth.value = (scrollTop / docHeight) * 100;
    };

    onMounted(() => {
      window.addEventListener('scroll', updateScrollWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScrollWidth);
    });

    return {
      scrollWidth,
    };
  },
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-indigo-600 z-50" :style="{ width: scrollWidth + '%' }"></div>
</template>

<style scoped>

</style>