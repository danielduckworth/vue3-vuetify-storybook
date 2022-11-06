<template>
  <v-slider
    color="orange"
    :max="2"
    step="1"
    show-ticks="always"
    tick-size="3"
    v-model="speed"
    @click:append="increment"
    @click:prepend="decrement"
    :ticks="tickLabels"
  >
    <template v-slot:prepend>
      <v-btn size="small" variant="text" icon="mdi-minus" color="orange" @click="decrement"></v-btn>
    </template>

    <template v-slot:append>
      <v-btn size="small" variant="text" icon="mdi-plus" color="orange" @click="increment"></v-btn>
    </template>
  </v-slider>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      speed: 1,
      tickLabels: {
        0: 'Slowest',
        1: '',
        2: 'Fastest',
      },
    }
  },

  methods: {
    decrement() {
      this.speed--
    },
    increment() {
      this.speed++
    },
  },
}
</script>
