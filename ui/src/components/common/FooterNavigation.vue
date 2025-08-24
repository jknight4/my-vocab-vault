<script setup lang="ts">
import Navigation from '@/components/common/Navigation.vue'
</script>

<template>
  <footer>
    <Navigation />
  </footer>
</template>

<style lang="css" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top: 1.8px solid var(--light-secondary);
}
</style>
