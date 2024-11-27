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
import { Components } from "@/router/routes";
import { onMounted } from "vue";
import { type Cocktails, cocktailsArray as menuList } from "@/stores/cocktails/state";
import { useUserStore } from "@/stores/user/index";

const userStore = useUserStore();

const getClasses = (menuItem: Cocktails) => [
  "menu-item",
  {
    "menu-item-active": menuItem === userStore.activePage,
  },
];

const openCocktailPage = (cocktail: Cocktails) => {
  console.log(222);

  userStore.setActivePage(cocktail);
};
</script>

<style lang="scss" scoped>
.menu {
  width: fit-content;
  min-width: 300px;
  max-width: 500px;
  background-color: #b1a5a5;

  .menu-item {
    flex: 1 1 30px;
    text-align: left;
    color: #504242;
    padding: 20px 0px 20px 15px;
    font-size: 20px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      background-color: #999292;
    }
  }

  .menu-item-active {
    background-color: #999292;
  }
}
</style>
