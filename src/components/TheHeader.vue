<template>
  <header class="header">
    <nav class="menu__inner">
      <router-link :to="{ name: 'MainPage' }" class="logo">
        <img src="@/assets/images/3740.svg" alt="3740" class="logo__img" />
      </router-link>
      <div class="header__btn-inner" @click="isActive = !isActive">
        <span class="header__menu-btn"></span>
      </div>
      <ul
        class="menu"
        v-bind:class="{
          active: isActive,
        }"
      >
        <li class="menu__item" @click="isActive = !isActive">
          <router-link :to="{ name: 'MainPage' }" class="menu__link">
            Главная
          </router-link>
        </li>
        <li class="menu__item" @click="isActive = !isActive">
          <router-link :to="{ name: 'CatalogPage' }" class="menu__link">
            Каталог
          </router-link>
        </li>
        <li class="menu__item" @click="isActive = !isActive">
          <router-link :to="{ name: 'DeliveryPage' }" class="menu__link">
            Оплата и Доставка
          </router-link>
        </li>
        <li class="menu__item" @click="isActive = !isActive">
          <router-link :to="{ name: 'ContactPage' }" class="menu__link">
            Контакты
          </router-link>
        </li>
      </ul>
      <button class="menu__card" type="button" @click="changeIsCard">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 510 510"
          fill="#eaadef"
          xml:space="preserve"
        >
          <g id="shopping-cart">
            <path
              d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
			c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
			c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
            />
          </g>
        </svg>
      </button>
    </nav>
    <div
      class="card"
      v-bind:class="{
        active: isCard,
      }"
    >
      <div class="card__inner">
        <h2 class="card__title">Корзина</h2>
        <button class="card__close-btn" @click="changeIsCard"></button>
        <div class="card__order">
          <ul class="card__product">
            <li
              class="card__model"
              v-for="(colors, modelName, index) in preOrder"
              :key="index"
            >
              Модель: {{ modelName }}
              <ul
                class="card__color"
                v-for="(sizeItem, colorName) in colors"
                :key="colorName"
              >
                <li class="card__color-item">
                  {{ colorsMap[colorName].name }}
                  <ul
                    class="card__size-amount"
                    v-for="(size, value, index) in sizeItem"
                    :key="index"
                  >
                    <li class="card__size-amount-item">
                      <div class="card__amount">
                        <span class="card__size">{{ sizesList[value] }}</span>
                        <button
                          type="button"
                          class="card__amount-less"
                          @click="
                            reduceAmount({
                              model: modelName,
                              color: colorName,
                              size: value,
                            })
                          "
                        >
                          -
                        </button>
                        <span class="card__amount-int">{{ size }}</span>
                        <button
                          type="button"
                          class="card__amount-more"
                          @click="
                            increaseQuantity({
                              model: modelName,
                              color: colorName,
                              size: value,
                            })
                          "
                        >
                          +
                        </button>
                        <span class="card__price"
                          >Цена: {{ price[modelName][value] }} &#8372;</span
                        >
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div class="card__total">
            <span>Сумма Заказа:</span>
            <span class="card__total-cost"> {{ totalPrice }} &#8372;</span>
          </div>
          <router-link
            @click="changeIsCard"
            :to="{ name: 'OrderPage' }"
            class="card__order-done"
          >
            Оформить Заказ
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import colorsMap from "../assets/js/colorMap.js";
import price from "../assets/js/price.js";
import sizesList from "../assets/js/sizes.js";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      colorsMap,
      price,
      sizesList,
      isActive: false,
    };
  },
  computed: {
    preOrder() {
      return this.$store.state.preOrder;
    },
    isCard() {
      return this.$store.state.isCard;
    },
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    ...mapMutations(["reduceAmount", "increaseQuantity", "changeIsCard"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: black;
  border-radius: 8px;
  margin-bottom: 36px;
  padding: 20px 36px 20px 48px;
  margin-top: 12px;
  box-shadow: 0px 5px 50px rgba(37, 1, 0, 0.2);
  position: relative;

  @media (max-width: 800px) {
    padding: 15px;
  }
  &__btn-inner {
    position: absolute;
    width: 30px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 60px;
    display: none;
    @media (max-width: 800px) {
      display: flex;
    }
  }
  &__menu-btn {
    height: 2px;
    width: 24px;
    background-color: black;
    border-radius: 30px;
    position: relative;
    z-index: 999;
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 24px;
      top: -6px;
      background-color: black;
    }
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 24px;
      bottom: -6px;
      background-color: black;
    }
  }
}

.menu__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  min-width: 108px;
}
.menu {
  display: flex;
  margin-left: auto;
  @media (max-width: 800px) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    top: 80px;
    left: 15px;
    right: 15px;
    border-radius: 15px;
    background: #eaadef;
    display: flex;
    transform: translateY(-800px);
    transition: 0.3s;
    z-index: 998;
  }
  &.active {
    @media (max-width: 800px) {
      transform: translateY(0px);
    }
  }
  &__item {
    margin: 0 12px;
  }

  &__link {
    display: block;
    color: white;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    padding: 0 5px;
    @media (max-width: 998px) {
      font-size: 16px;
      padding: 12px;
    }
    &:hover {
      color: #eaadef;
      border-color: #eaadef;
      @media (max-width: 800px) {
        color: black;
        border-color: black;
      }
    }
  }
  &__card {
    border: none;
    background: none;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    &:hover {
      svg {
        transition: 0.3s;
        fill: white;
      }
    }
  }
}
.card {
  position: absolute;
  background-color: white;
  width: 40vw;
  right: 0;
  top: 100px;
  z-index: 999;
  padding: 8px;
  border-radius: 8px;
  transform: translateX(9800px);
  transition: 0.3s;
  min-width: 320px;
  max-width: 420px;
  &.active {
    transform: translateX(0px);
  }
  &__inner {
    border: 1px solid black;
    padding: 8px 12px;
    position: relative;
    height: calc(100vh - 140px);
  }
  &__title {
    text-align: center;
  }
  &__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    box-shadow: none;
    background-image: url("../assets/images/close-btn.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__order {
    display: flex;
    flex-direction: column;
    height: calc(100% - 30px);
    overflow: auto;
    padding-right: 8px;
  }
  &__product {
    overflow: auto;
  }
  &__model {
    font-weight: bold;
  }
  &__color {
    padding: 8px 0 0 8px;
  }
  &__color__item {
  }
  &__size-amount {
    padding: 8px 0 0 16px;
    font-weight: normal;
  }
  &__size-amount-item {
  }
  &__amount {
    display: flex;
    border-bottom: 1px solid#eaadef;
    margin-bottom: 8px;
  }
  &__size {
    max-width: 200px;
    width: 100%;
  }
  &__amount-less,
  &__amount-more {
    border: none;
    background: none;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
  }
  &__amount-less {
    margin-left: auto;
  }
  &__amount-more {
    margin-right: auto;
  }
  &__amount-int {
    font-size: 24px;
  }
  &__price {
    max-width: 200px;
    width: 100%;
    text-align: right;
  }
  &__total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 12px;
    margin-top: auto;
  }
  &__order-done {
    display: block;
    width: 100%;
    padding: 8px 12px;
    background-color: black;
    color: #eaadef;
    font-weight: bold;
    letter-spacing: 1.2px;
    border-radius: 8px;
    text-align: center;
    transition: 0.3s;
    &:hover {
      color: white;
    }
  }
}
</style>
