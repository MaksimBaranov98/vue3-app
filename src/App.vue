<template>
  <div class="app">
    <Menu />

    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

.app {
  display: flex;
  height: 100vh;
}
</style>
