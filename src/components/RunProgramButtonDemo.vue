<template>
  <v-card max-width="400" style="margin: auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">RUN BUTTON</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container class="bg-surface-variant">
      <v-responsive height="300px">
        <Vue3Lottie
          renderer="canvas"
          :autoPlay="false"
          :pauseAnimation="!isPlaying"
          animationLink="https://assets8.lottiefiles.com/packages/lf20_laMcIQgKkZ.json"
          width="100%"
          height="100%"
        />
      </v-responsive>
    </v-container>
    <v-card-text>
      <v-col>
        <v-row class="justify-center">
          <RunProgramButton :isPlaying="isPlaying" @toggle="toggle()" />
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script setup>
import RunProgramButton from '@/components/RunProgramButton.vue'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
</script>

<script>
export default {
  data() {
    return {
      isPlaying: false,
    }
  },

  methods: {
    toggle() {
      this.isPlaying = !this.isPlaying
    },
    play() {
      this.$refs.lottieContainer.play()
    },
    stop() {
      // this.$refs.lottieContainer.stop()
      this.$refs.lottieContainer.goToAndStop(0, true)
    },
    togglePlay() {
      if (this.isPlaying === 'false') {
        this.play()
        this.toggle()
      } else {
        this.stop()
        this.toggle()
      }
    },
  },
}
</script>
