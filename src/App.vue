<template>
  <div class="app">
    <div class="content">
      <Menu />

      <router-view />
    </div>
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
  min-height: 100vh;
  background-color: rgb(231, 213, 208);

  .content {
    display: flex;
    margin: auto;
    min-height: 100vh;
    min-width: 360px;
    max-width: 1024px;
    background-color: rgb(208, 180, 172);
  }
}
</style>
