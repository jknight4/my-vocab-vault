<script setup lang="ts">
import logo from '@/assets/images/mwv-logo-1.png'
</script>

<template>
  <header>
    <img class="logo" :src="logo" alt="myWordVault Logo" />
    <h1 class="logo-blue">myWordVault</h1>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;
}

h1 {
  font-size: 2.8rem;
}

.logo {
  box-sizing: border-box;
  width: 4.8rem;
}
</style>
