<template>
  <div class="cocktail-page">
    <Scroll>
      <CocktailComposition v-for="item in cocktailCompositionList" :key="item.idDrink" :cocktailComposition="item" />
    </Scroll>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed, onMounted, watch } from "vue";
import { useCocktailsStore } from "@/stores/cocktails/index";
import { Cocktails } from "@/stores/cocktails/state";
import { useUserStore } from "@/stores/user";
import CocktailComposition from "@/pages/CocktailComposition.vue";
import Scroll from "@/components/Scroll.vue";

const route = useRoute();
const cocktailStore = useCocktailsStore();
const userStore = useUserStore();

const cocktailName = computed(() => (route?.params?.name as Cocktails) ?? Cocktails.Margarita);
const cocktailCompositionList = computed(() => cocktailStore.getCocktailCompositionList(cocktailName.value));

onMounted(async () => {
  userStore.setActivePage(cocktailName.value);

  await cocktailStore.fetchCocktailData(cocktailName.value);
});

watch(cocktailName, async (value) => await cocktailStore.fetchCocktailData(value));
</script>

<style lang="scss" scoped>
.cocktail-page {
  flex: 0 1 800px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 20px;
}
</style>
