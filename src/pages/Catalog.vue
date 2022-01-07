<template>
  <div class="catalog">
    <Filters :products="products" />
    <div class="catalog__show">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Catalog",
  components: {
    Filters,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          name: "Футболка Рукав Отворот",
          seasons: "Лето",
          id: "291-1",
          colors: ["black", "red", "beigeBone", "white", "beige"],
          sizes: ["44-46", "48-50", "52-54", "54-56"],
          prices: {
            "44-46": 95,
            "48-50": 105,
            "52-54": 115,
            "54-56": 125,
          },
        },
        {
          name: "Футболка Рукав НЕОтворот",
          seasons: "Лето",
          id: "291-1",
          colors: ["red", "black", "cappuccinoLight", "white", "beigeDark"],
          sizes: ["44-46", "48-50", "52-54", "54-56"],
          prices: {
            "44-46": 95,
            "48-50": 105,
            "52-54": 115,
            "54-56": 125,
          },
        },
        {
          name: "Футболка Рукав Отворот",
          seasons: "Зима",
          id: "291-1",
          colors: ["black", "red", "beigeBone", "white", "beige"],
          sizes: ["44-46", "48-50", "52-54", "54-56"],
          prices: {
            "44-46": 95,
            "48-50": 105,
            "52-54": 115,
            "54-56": 125,
          },
        },
        {
          name: "Футболка Рукав НЕОтворот",
          seasons: "Осень-Весна",
          id: "291-1",
          colors: ["red", "black", "cappuccinoLight", "white", "beigeDark"],
          sizes: ["44-46", "48-50", "52-54", "54-56"],
          prices: {
            "44-46": 95,
            "48-50": 105,
            "52-54": 115,
            "54-56": 125,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  &__show {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 30px;
  }
}
</style>
