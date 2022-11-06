<template>
  <v-card max-width="400" style="margin: auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">SPEED SLIDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card-text>
      <SpeedSlider />
    </v-card-text>
  </v-card>
</template>

<script setup>
import SpeedSlider from '@/components/SpeedSlider.vue'
</script>
