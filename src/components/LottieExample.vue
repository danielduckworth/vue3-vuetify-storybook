<template>
  <Vue3Lottie :loop="3" animationLink="https://assets8.lottiefiles.com/packages/lf20_laMcIQgKkZ.json" />
</template>

<script setup>
import { ref } from 'vue'
defineProps(['pauseAnimation'])
// defineEmits(['toggle'])
</script>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
  name: 'LottieExample',
  components: {
    Vue3Lottie,
  },
}
</script>
