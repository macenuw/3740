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
import { mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    Filters,
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: "productsByFilter",
    }),
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding-bottom: 30px;
  min-height: calc(100vh - 282px);
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  &__show {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 30px;
    @media (max-width: 1270px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
