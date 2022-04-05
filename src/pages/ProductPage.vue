<template>
  <div class="product__page">
    <div class="product container">
      <div class="product__images">
        <carousel-3d
          :height="600"
          :autoplay="true"
          :border="0"
          :controlsVisible="true"
          :display="7"
          :width="320"
        >
          <slide
            v-for="(color, index) in product.colors"
            :key="index"
            :index="index"
          >
            <ColorCard
              :productColor="color"
              :productModel="product.model"
              :productName="product.name"
            />
          </slide>
        </carousel-3d>
      </div>
      <div class="product__info">
        <div class="product__info-text">
          <h2 class="product__title">{{ product.name }}</h2>
          <p class="product__details-info">
            <span class="product__model"> Модель № {{ product.model }} </span>
            <span class="product__compound">Состав: {{ product.info }} </span>
          </p>
          <ul class="product__price">
            <li
              class="product__price-item"
              v-for="(price, index) in product.prices"
              :key="index"
            >
              <span>{{ sizesList[index] }}:</span>
              <span>{{ price }} &#8372;</span>
            </li>
          </ul>
        </div>
        <div class="product__info-color">
          <h2 class="product__title">Добавленные цвета</h2>
          <ul class="product__info-list">
            <li
              class="product__info-item"
              v-for="(item, value) in preOrder[product.model]"
              :key="`${product.model}+${value}`"
              @click="deleteColor({ model: product.model, color: value })"
            >
              {{ colorsMap[value].name }}
            </li>
          </ul>
          <button class="product__card-btn" @click="changeIsCard">
            Перейти в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import colorsMap from "../assets/js/colorMap.js";
import ColorCard from "../components/ColorCard.vue";
import colorsOnEnglish from "../assets/js/colorsOnEnglish.js";
import sizesList from "../assets/js/sizes.js";
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapMutations } from "vuex";

export default {
  name: "ProductPage",
  components: {
    ColorCard,
    Carousel3d,
    Slide,
  },

  data() {
    return {
      colorsMap,
      colorsOnEnglish,
      sizesList,
      product: {},
    };
  },
  created() {
    this.product = this.$store.getters.productByModel(this.$route.params.id);
  },
  computed: {
    preOrder() {
      return this.$store.state.preOrder;
    },
  },
  methods: {
    changeImage(color) {
      const [...productColor] = this.product.colors;
      productColor.splice(productColor.indexOf(color), 1);
      productColor.unshift(color);
      this.product.colors = productColor;
    },
    ...mapMutations(["changeValue", "deleteColor", "changeIsCard"]),
  },
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &__images {
    display: flex;
    margin-bottom: 36px;
    width: 100%;
  }
  &__img-inner {
    width: 480px;
    height: 720px;
    margin-right: 12px;
  }
  &__img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__colors {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    max-height: 720px;
    overflow: auto;
  }
  &__color {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    background-color: #f7f7f7;
    border-radius: 5px;
    margin-bottom: 6px;
    &--added {
      width: 100%;
      .product__color-name {
        min-width: 150px;
      }
    }
  }
  &__color-square {
    min-width: 20px;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 5px;
    border: 1px solid black;
  }
  &__color-name {
    font-size: 10px;
    text-align: center;
  }
  &__color-btn {
    font-size: 14px;
    color: white;
    background-color: black;
    border: 1px solid black;
    box-shadow: none;
    border-radius: 3px;
    transition: 0.5s;
    font-weight: bold;
    margin: 0 4px;
    white-space: nowrap;
    &:hover {
      border-color: black;
      background-color: white;
      color: black;
    }
  }
  &__added-size {
    display: flex;
    justify-content: space-between;
    max-width: 60%;
    width: 100%;
  }
  &__label {
    display: flex;
    align-items: center;
    max-width: 70px;
    position: relative;
  }
  &__label-info {
    display: block;
    position: absolute;
    font-size: 10px;
    background-color: #f7f7f7;
    top: -4px;
    left: 5px;
    padding: 0 2px;
    border-radius: 3px;
    white-space: nowrap;
  }
  &__label-input {
    width: 100%;
    font-size: 12px;
    padding: 6px 3px 2px;
    text-align: center;
    border: 1px solid black;
    background-color: #f7f7f7;
  }
  &__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (max-width: 820px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__info-color {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 820px) {
      max-width: 100%;
      margin-bottom: 12px;
    }
  }
  &__info-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 12px;
  }
  &__info-item {
    padding: 8px 12px;
    background-color: azure;
    border-radius: 25px;
    border: 1px solid black;
    margin: 4px 8px;
    font-weight: bold;
  }
  &__info-text {
    max-width: 50%;
    width: 100%;
    @media (max-width: 820px) {
      max-width: 100%;
      order: 2;
    }
  }
  &__title {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
  }
  &__details-info {
    margin-bottom: 12px;
    padding: 8px 0;
  }
  &__model {
    font-weight: bold;
    display: block;
    text-align: center;
    margin-bottom: 12px;
  }
  &__compound {
    display: block;
    text-align: center;
  }
  &__price {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 12px;
  }
  &__price-item {
    padding: 4px 8px;
    max-width: 320px;
    width: 100%;
    margin: 0 auto 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    background-color: #eaadef;
    font-weight: bold;
  }
  &__card-btn {
    background: none;
    box-shadow: none;
    border: 2px solid black;
    margin: 0 auto;
    max-width: 50%;
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: bold;
    @media (max-width: 820px) {
      max-width: 50%;
    }
    @media (max-width: 575px) {
      max-width: 100%;
    }
  }
}
</style>
