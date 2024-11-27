<template>
  <div class="not-found">
    <div class="text">Page not Found</div>

    <button class="ok-btn" @click="openCocktailPage">Ок</button>
  </div>
</template>

<script lang="ts" setup>
import { Components } from "@/router/routes";
import { Cocktails } from "@/stores/cocktails/state";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const openCocktailPage = () => userStore.setActivePage();
</script>

<style lang="scss" scoped>
.not-found {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 24px;
  }

  .ok-btn {
    margin-top: 20px;
    width: 100px;
    height: 40px;
    font-size: 18px;
  }
}
</style>
