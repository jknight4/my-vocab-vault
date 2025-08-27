<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/dashboard">Home</RouterLink>
    <RouterLink to="/addWord">Add Word</RouterLink>
    <RouterLink to="/">Game Center</RouterLink>
    <RouterLink to="/">Settings</RouterLink>
  </nav>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 2.2rem;
  margin-bottom: 4.8rem;
  border-top: 1px solid var(--light-secondary);
  border-bottom: 1px solid var(--light-secondary);
}

@media (min-width: 1024px) {
  nav {
    padding: 2.2rem 4.8rem;
  }
}
</style>
