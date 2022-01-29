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
        <!-- <h2 class="product__title">{{ product.name }}</h2> -->
        <div class="product__details">
          <!-- <p class="product__details-info">
            <span class="product__model"> Модель № {{ product.model }} </span>
            <span class="product__compound">{{ product.info }} </span>
          </p>
          <ul class="product__price">
            <li
              class="product__price-item"
              v-for="(price, index) in product.prices"
              :key="index"
            >
              {{ sizesList[index] }}: {{ price }} &#8372;
            </li>
          </ul> -->
          <div
            class="product__added-color"
            v-for="(sizes, colorName) in preOrder[product.model]"
            :key="`${product.model}-${colorName}`"
          >
            <div class="product__color product__color--added">
              <span
                class="product__color-square"
                :style="{
                  backgroundColor: `#${colorsMap[colorName].colorCode}`,
                }"
              ></span>
              <span class="product__color-name">{{
                colorsMap[colorName].name
              }}</span>
              <div
                class="product__added-size"
                v-for="(amount, sizeName) in sizes"
                :key="`${product.model}-${colorName}-${sizeName}`"
              >
                <label
                  :for="`${product.model}-${colorName}-${sizeName}`"
                  class="product__label"
                >
                  <span class="product__label-info">{{
                    sizesList[sizeName]
                  }}</span>
                  <input
                    :id="`${product.model}-${colorName}-${sizeName}`"
                    type="number"
                    class="product__label-input"
                    min="0"
                    :value="amount"
                    @change="
                      changeValue({
                        model: product.model,
                        color: colorName,
                        size: sizeName,
                        amount: $event.target.value,
                      })
                    "
                  />
                </label>
              </div>
              <button
                class="product__color-btn"
                @click="deleteColor({ model: product.model, color: colorName })"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SelectedColorCard />
  </div>
</template>
<script>
import colorsMap from "../assets/js/colorMap.js";
import ColorCard from "../components/ColorCard.vue";
import colorsOnEnglish from "../assets/js/colorsOnEnglish.js";
import sizesList from "../assets/js/sizes.js";
import SelectedColorCard from "../components/SelectedColorCard.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapMutations } from "vuex";

export default {
  name: "ProductPage",
  components: {
    ColorCard,
    Carousel3d,
    Slide,
    SelectedColorCard,
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
    ...mapMutations(["changeValue", "deleteColor"]),
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
    max-width: 600px;
    width: 100%;
  }
  &__title {
    display: block;
    width: 100%;
    text-align: center;
  }
  &__details-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px 0;
  }
  &__model {
    font-weight: bold;
    display: block;
    margin-bottom: 12px;
  }
  &__compound {
    display: block;
  }
  &__price {
    display: flex;
    justify-content: space-around;
    margin-bottom: 12px;
    border-bottom: 1px solid #eaadef;
  }
  &__price-item {
    padding: 4px 0;
  }
}
</style>
