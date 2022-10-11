<template>
  <router-view />
</template>

<script setup lang="ts">
useHead({
  title: 'Krzysztof Meyer - Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of non-commercial projects',
    },
  ],
})
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
