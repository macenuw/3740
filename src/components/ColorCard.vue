<template>
  <div class="card">
    <div class="card__inner">
      <span class="card__color">{{ colorsMap[productColor].name }}</span>
      <button
        class="card__add"
        @click="addColor({ model: productModel, color: productColor })"
      >
        Добавить в заказ
      </button>
    </div>
    <div class="card__img-inner">
      <img
        :src="`/images/products/${productModel}/${productColor}.jpg`"
        :alt="`${productName} ${productColor}`"
        class="card__img"
      />
    </div>
  </div>
</template>
<script>
import colorsMap from "../assets/js/colorMap.js";
import { mapMutations } from "vuex";
export default {
  name: "ColorCard",
  props: ["productColor", "productModel", "productName"],
  data: () => ({
    colorsMap,
  }),
  methods: {
    ...mapMutations(["addColor"]),
  },
};
</script>
<style lang="scss" scoped>
.card {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      .card__color {
        background-color: rgba(0, 0, 0, 1);
      }
      .card__add {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__color {
    border: 1px solid black;
    display: block;
    padding: 4px 6px;
    height: 30px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 3px;
    transition: 0.6s;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &__add {
    position: absolute;
    left: calc(50% - 144px);
    bottom: 20px;
    padding: 8px 8px;
    width: 90%;
    color: white;
    border: 1px solid white;
    border-radius: 3px;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    @media (max-width: 350px) {
      left: 5%;
    }
  }
  &__img-inner {
    width: 100%;
    height: 100%;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
