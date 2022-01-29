<template>
  <section class="top-sale">
    <h2 class="top-sale__title title">Топ Продаж</h2>

    <div class="top-sale__slider">
      <VueSlickCarousel v-bind="settings">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import products from "../assets/catalog/catalog.js";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Sales",
  components: {
    ProductCard,
    VueSlickCarousel,
  },
  data() {
    return {
      products,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        centerMode: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "50px",
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "50px",
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.top-sale {
  margin-bottom: 48px;
  &__title {
    width: 100%;
  }
}
</style>
