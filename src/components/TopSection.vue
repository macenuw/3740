<template>
  <section class="top-section">
    <div class="slider">
      <VueSlickCarousel v-bind="settings" ref="slick">
        <div class="slider__item">
          <div class="slider__info">
            <p class="slider__text">Футболки на каждый день!</p>
            <a href="#" class="slider__link">Подробнее</a>
          </div>
          <div class="slider__img-inner">
            <img
              class="slider__img"
              src="../assets/images/slider/slide1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="slider__item">
          <div class="slider__info">
            <p class="slider__text">Майки на все случаи жизни</p>
            <a href="#" class="slider__link">Подробнее</a>
          </div>
          <div class="slider__img-inner">
            <img
              class="slider__img"
              src="../assets/images/slider/slide2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="slider__item">
          <div class="slider__info">
            <p class="slider__text">Большой ассортимент цветов!</p>
            <a href="#" class="slider__link">Подробнее</a>
          </div>
          <div class="slider__img-inner">
            <img
              class="slider__img"
              src="../assets/images/slider/slide1.jpg"
              alt=""
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "TopSection",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.top-section {
  margin-bottom: 64px;
}

.slider {
  &__item {
    display: flex !important;
    justify-content: center;
    @media (max-width: 865px) {
      position: relative;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    position: relative;
    @media (max-width: 865px) {
      position: absolute;
      bottom: 100px;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 12px;
    }
    @media (max-width: 665px) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }

  &__text {
    display: block;
    font-size: 24px;
    padding: 12px;
    max-width: 340px;
    margin-bottom: 18px;
    position: relative;
    padding-top: 32px;
    @media (max-width: 865px) {
      font-size: 18px;
      max-width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 1px;
      background-color: black;
      @media (max-width: 865px) {
        display: none;
      }
    }
  }

  &__link {
    background-color: black;
    color: white;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: calc(50% + 60px);
    left: calc(50% + 32px);
    @media (max-width: 865px) {
      top: calc(50% + 70px);
      background-color: white;
      color: black;
      font-weight: bold;
    }
    @media (max-width: 400px) {
      left: 50%;
    }
  }

  &__img-inner {
    max-width: 450px;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
  }

  &__img {
    border-radius: 32px;
    object-fit: cover;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  .slick-arrow {
    position: absolute;
    top: calc(50% - 24px);
    background-position: center;
    background-repeat: no-repeat;
    font-size: 0;
    line-height: 0;
    border: 1px solid rgba(0, 0, 0, 0.7);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    z-index: 10;
  }

  .slick-prev {
    left: 15px;
    background-image: url("../assets/images/slider/btn-prev.png");
  }

  .slick-next {
    right: 15px;
    background-image: url("../assets/images/slider/btn-next.png");
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    left: 300px;
    @media (max-width: 900px) {
      bottom: -20px;
      left: calc(50% - 60px);
    }

    & li {
      margin: 0 8px;
      padding: 0;
      line-height: 0;
      font-size: 0;

      button {
        font-size: 0;
        border: none;
        background: none;
        background-color: rgba(0, 0, 0, 0.3);
        height: 8px;
        width: 24px;
        border-radius: 5px;
        padding: 0;
        line-height: 0;
        transition: 0.3s;
      }
    }

    .slick-active {
      button {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
</style>
