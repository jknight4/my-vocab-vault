<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink active-class="active" to="/dashboard">
      <i class="bi bi-house-door-fill"></i>
    </RouterLink>
    <RouterLink active-class="active" to="/add-word">
      <i class="bi bi-file-earmark-plus-fill"></i>
    </RouterLink>
    <RouterLink active-class="active" to="/study">
      <i class="bi bi-puzzle-fill"></i>
    </RouterLink>
    <div class="more-content">
      <div class="dropdown-gap"></div>
      <i class="bi bi-three-dots"></i>
      <div class="dropdown-content">
        <div class="dropdown-links">
          <RouterLink to="/settings">Settings</RouterLink>
          <RouterLink to="/help">Help</RouterLink>
          <div>Log out</div>
        </div>
      </div>
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
  transition: all 0.3s ease-in;
  padding: 0.1rem 1.2rem;
  border-radius: 8px;
}

a:hover,
.more-content:hover {
  background-color: var(--primary-light);
}

.bi {
  display: inline-block;
  font-size: 3.2rem;
  color: var(--primary);
}

.active {
  border-bottom: 2px solid var(--dark-cta);
  border-radius: 8px 8px 0 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  bottom: 107%;
  right: -15px;
  z-index: 1;
  padding: 0.6rem 0;

  border: 1.8px solid var(--light-secondary);
  border-radius: 8px;
  background-color: white;
}

.dropdown-links {
  display: flex;
  flex-direction: column;
}

.dropdown-links > a,
.dropdown-links > div {
  cursor: pointer;
  padding: 0.8rem 3.6rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -0.75px;
  font-size: 1.6rem;
  color: var(--primary);
}

.dropdown-gap {
  position: absolute;
  bottom: 95%;
  left: 0;
  right: 0;
  height: 50px;
  background: transparent;
}

.dropdown-links > a:hover,
.dropdown-links > div:hover {
  background-color: var(--light-gray);
}

.more-content {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in;
  padding: 0.2rem 1.2rem;
  border-radius: 8px;
}

.more-content:hover .dropdown-content {
  display: block;
}
</style>
