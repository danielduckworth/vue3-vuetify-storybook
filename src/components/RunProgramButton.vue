<script setup>
import { ref } from 'vue'
defineProps(['isPlaying'])
defineEmits(['toggle'])
</script>

<template>
  <v-btn flat :color="isPlaying ? 'blue' : 'green'" @click="$emit('toggle')">
    <v-icon size="large" :icon="isPlaying ? 'mdi-restart' : 'mdi-play'" />
    <span v-if="isPlaying" class="text-button"> Reset </span>
    <span v-else="!isPlaying" class="text-button"> Run </span>
  </v-btn>
</template>
