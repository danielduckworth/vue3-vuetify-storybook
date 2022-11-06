<script setup lang="ts">
import SpeedSliderDemo from '@/components/SpeedSliderDemo.vue'
import RunProgramButtonDemo from '@/components/RunProgramButtonDemo.vue'
import SliderRGB from '@/components/SliderRGB.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="mx-auto my-auto">
        <v-row>
          <v-col cols="12" sm="6">
            <RunProgramButtonDemo />
            <br />
            <SpeedSliderDemo />
          </v-col>
          <v-col cols="12" sm="6">
            <SliderRGB />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
