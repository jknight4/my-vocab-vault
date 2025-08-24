<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/dashboard">
      <i class="bi bi-house-door-fill"></i>
    </RouterLink>
    <RouterLink to="/add-word">
      <i class="bi bi-file-earmark-plus-fill"></i>
    </RouterLink>
    <RouterLink to="/study">
      <i class="bi bi-puzzle-fill"></i>
    </RouterLink>
    <div>
      <i class="bi bi-three-dots"></i>
    </div>
  </nav>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3.2rem;
}

nav > a {
  cursor: pointer;
}

.bi {
  display: inline-block;
  font-size: 3.2rem;
  color: var(--primary);
}
</style>
