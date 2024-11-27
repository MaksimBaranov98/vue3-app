<template>
  <div>
    <div class="cocktail-page">Cocktail page</div>

    <div class="cocktail-page">{{ cocktail }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Components } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useCocktailsStore } from "@/stores/cocktails/index";
import { Cocktails } from "@/stores/cocktails/state";

const router = useRouter();
const route = useRoute();
const dataStore = useCocktailsStore();

const cocktail = computed(() => (route?.params?.name as Cocktails) ?? Cocktails.Margarita);

onMounted(async () => await dataStore.fetchCocktailData(cocktail.value));
</script>

<style lang="scss" scoped>
.cocktail-page {
  width: 100%;
}
</style>
