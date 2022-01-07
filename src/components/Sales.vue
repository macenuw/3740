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
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      },
      colorsMap: {
        beet: "2A1327",
        beige: "B4A79F",
        black: "000000",
        blue: "2092C8",
        bordeaux: "630610",
        brown: "281F22",
        cream: "F1ECE8",
        ["cream-rose"]: "E2D6D6",
        ["dark-beige"]: "A28B85",
        ["dark-blue"]: "01091C",
        ["dark-cappuccino"]: "6E5663",
        ["dark-gray"]: "34394D",
        ["dark-green"]: "012032",
        electric: "1B38A1",
        freesia: "71355B",
        gray: "90909A",
        khaki: "6B5E4E",
        ["light-powder"]: "EFB6C9",
        lilac: "9170B5",
        mustard: "E1974C",
        olive: "6C7A25",
        ["pale-rose"]: "BD5C7B",
        powder: "D69FBF",
        red: "B80034",
        sand: "A46E54",
        turquoise: "008B9E",
        white: "FFFFFF",
      },
      products: [
        {
          name: "Гольф длинный рукав",
          id: "8-3",
          season: "autumn",
          colors: [
            "bordeaux",
            "blue",
            "black",
            "beige",
            "beet",
            "brown",
            "cream",
            "cream-rose",
            "dark-beige",
            "dark-blue",
            "dark-cappuccino",
            "dark-gray",
            "dark-green",
            "electric",
            "freesia",
            "gray",
            "khaki",
            "light-powder",
            "lilac",
            "mustard",
            "olive",
            "pale-rose",
            "powder",
            "red",
            "sand",
            "turquoise",
            "white",
          ],
          sizes: ["s", "m", "l", "xl"],
          gamma: "mono",
          prices: {
            S: 85,
            M: 95,
            L: 105,
            XL: 115,
          },
        },
        {
          name: "Лодка длинный рукав",
          id: "148-3",
          season: "autumn",
          colors: [
            "beet",
            "beige",
            "black",
            "blue",
            "bordeaux",
            "brown",
            "cream",
            "dark-beige",
            "dark-blue",
            "dark-cappuccino",
            "dark-gray",
            "dark-green",
            "electric",
            "gray",
            "jeans",
            "khaki",
            "light-cappuccino",
            "mustard",
            "olive",
            "powder",
            "red",
            "white",
          ],
          sizes: ["s", "m", "l", "xl"],
          gamma: "mono",
          prices: {
            S: 85,
            M: 95,
            L: 105,
            XL: 115,
          },
        },
        {
          name: "Футболка Рукав Отворот",
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

<style lang="scss" scoped>
.top-sale {
  margin-bottom: 48px;
  &__title {
    width: 100%;
  }
}
</style>
