<template>
  <router-link
    :to="{ name: 'ProductPage', params: { id: product.model } }"
    class="product-card__item"
  >
    <a href="#" class="top__item-link"></a>
    <div class="product-card__inner d-flex">
      <div class="product-card__slider">
        <VueSlickCarousel v-bind="settings">
          <div
            class="product-card__img-inner"
            v-for="(color, index) in product.colors"
            :key="index"
          >
            <img
              class="img"
              :src="`/images/products/${product.model}/${color}.jpg`"
              :alt="`${product.name} ${product.colors[0]}`"
            />
          </div>
        </VueSlickCarousel>
      </div>
      <h3 class="product-card__name">
        {{ product.name }}
        <span class="product-card__number"> № {{ product.model }} </span>
      </h3>
      <div
        class="product-card__size-price"
        v-for="(price, size) in product.prices"
        :key="size"
      >
        <div class="product-card__row d-flex">
          <span class="product-card__size">{{ sizesMap[size] }}</span>
          <span class="product-card__cost">
            Цена:
            <span class="product-card__price"> {{ price }} грн </span>
          </span>
        </div>
      </div>
      <div class="product-card__colors d-flex">
        <h4 class="product-card__colors-title">Цвета</h4>
        <a
          href="#"
          class="product-card__color"
          v-for="color in product.colors"
          :key="color"
        >
          <span
            class="product-card__circul"
            :style="{ backgroundColor: `#${colorsMap[color].colorCode}` }"
          ></span>
        </a>
      </div>
    </div>
  </router-link>
</template>
<script>
import colorsMap from "../assets/js/colorMap.js";
import sizesMap from "../assets/js/sizes.js";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "ProductCard",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      colorsMap,
      sizesMap,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        fade: true,
      },
    };
  },
  props: {
    product: {
      type: Object,
      default: () => ({ title: "undefined", text: "unknown" }),
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  &__item {
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    background-color: white;
    border: 1px solid black;
  }

  &__inner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 611px;
  }
  &__slider {
    width: 300px;
    height: 320px;
    margin-bottom: 6px;
  }

  &__img-inner {
    width: 300px !important;
    height: 320px;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .img {
      width: 298px;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  &__name {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 6px;
    color: black;
  }

  &__number {
    font-size: 12px;
    display: block;
    text-align: center;
  }

  &__size-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    width: 100%;
    padding: 0 8px;
  }

  &__row {
    padding: 4px 12px;
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: #eaadef;
    color: black;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
  }

  &__colors {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 12px;
    width: 100%;
    min-height: 100px;
    padding: 0 12px;
    margin-top: auto;
  }

  &__colors-title {
    text-align: left;
    width: 100%;
    margin-bottom: 8px;
    color: black;
  }

  &__color {
    width: 20px;
    height: 20px;
    margin: 2px 4px;
  }
  &__circul {
    display: block;
    border: 1px solid black;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    transition: 0.3s;
    &:hover {
      transform: scale(2);
    }
  }
}
</style>
