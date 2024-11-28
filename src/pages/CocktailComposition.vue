<template>
  <div class="cocktail-composition">
    <div class="basic-information">
      <div>
        <div class="drink">{{ strDrink }}</div>

        <div class="descriptions">{{ strCategory }}</div>

        <div class="descriptions">{{ strAlcoholic }}</div>

        <div class="descriptions">{{ strGlass }}</div>
      </div>

      <img :src="strDrinkThumb" loading="lazy" class="drink-thumb" />
    </div>

    <div class="label">Instructions:</div>

    <div class="instructions">{{ strInstructions }}</div>

    <div class="label">List of ingredients:</div>

    <ul>
      <li v-for="item in ingredientList" :key="item[0]" class="ingredient">
        {{ item.strMeasure }} {{ item.strIngredient }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { CocktailComposition } from "@/stores/cocktails/types";
import { strIngredient, strMeasure } from "@/consts/cocktails";

type Props = {
  cocktailComposition: CocktailComposition;
};

const props = defineProps<Props>();

const strDrink = computed(() => props.cocktailComposition.strDrink);
const strCategory = computed(() => props.cocktailComposition.strCategory);
const strAlcoholic = computed(() => props.cocktailComposition.strAlcoholic);
const strGlass = computed(() => props.cocktailComposition.strGlass);
const strInstructions = computed(() => props.cocktailComposition.strInstructions);
const strDrinkThumb = computed(() => props.cocktailComposition.strDrinkThumb);

const ingredientList = computed(() => {
  // Здесь по разному можно обрабатывать данные
  // Но суть будет схожая
  const ingredients = Object.entries(props.cocktailComposition).reduce((result, [key, value]) => {
    if (!value) return result;

    if (key.startsWith(strMeasure)) {
      const index = +key.substring(strMeasure.length) - 1;

      if (!result[index]) result[index] = {};

      result[index][strMeasure] = value;

      return result;
    }

    if (key.startsWith(strIngredient)) {
      const index = +key.substring(strIngredient.length) - 1;

      if (!result[index]) result[index] = {};

      result[index][strIngredient] = value;

      return result;
    }

    return result;
  }, [] as any[]);

  return ingredients;
});
</script>

<style lang="scss" scoped>
.cocktail-composition {
  padding: 0 20px 20px 0;

  &:first-child {
    padding-top: 20px;
  }

  .basic-information {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .drink {
      font-size: 28px;
      margin-bottom: 20px;
      font-weight: 900;
    }

    .descriptions {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .drink-thumb {
      width: 220px;
      height: 220px;

      @media (max-width: 900px) {
        width: 190px;
        height: 190px;
      }

      @media (max-width: 550px) {
        width: 150px;
        height: 150px;
      }

      @media (max-width: 480px) {
        width: 120px;
        height: 120px;
      }
    }
  }

  .instructions {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-size: 20px;
    margin: 20px 0 5px;
    font-weight: 700;
  }

  .ingredient {
    font-size: 20px;
  }
}
</style>
