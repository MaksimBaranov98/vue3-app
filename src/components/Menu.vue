<template>
  <div class="menu">
    <div
      v-for="menuItem in menuList"
      :key="menuItem"
      class="menu-item"
      :class="getClasses(menuItem)"
      @click="openCocktailPage(menuItem)"
    >
      {{ menuItem }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Cocktails, cocktailsArray as menuList } from "@/stores/cocktails/state";
import { useUserStore } from "@/stores/user/index";

const userStore = useUserStore();

const getClasses = (menuItem: Cocktails) => [
  "menu-item",
  {
    "menu-item-active": menuItem === userStore.activePage,
  },
];

const openCocktailPage = (cocktail: Cocktails) => userStore.setActivePage(cocktail);
</script>

<style lang="scss" scoped>
.menu {
  background-color: #ba9f9f;
  min-width: 120px;
  flex: 0 1 224px;

  .menu-item {
    text-align: left;
    color: #504242;
    padding: 20px 0px 20px 15px;
    font-size: 20px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      background-color: $active-menu-item;
    }
  }

  .menu-item-active {
    background-color: $active-menu-item;
  }
}
</style>
