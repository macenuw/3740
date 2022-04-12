<template>
  <section class="content">
    <router-link
      :to="{ name: 'CatalogPage' }"
      class="content__block content__block--winter"
    >
      <span class="content__name"> Зима </span>
    </router-link>
    <router-link
      :to="{ name: 'CatalogPage' }"
      class="content__block content__block--summer"
    >
      <span class="content__name"> Лето </span>
    </router-link>
    <router-link
      :to="{ name: 'CatalogPage' }"
      class="content__block content__block--spring"
    >
      <span class="content__name"> Весна/Осень </span>
    </router-link>
  </section>
</template>
<script>
export default {
  name: "TheSeasons",
};
</script>
<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 400px);
  grid-gap: 30px 20px;
  margin-bottom: 64px;
  padding: 0 15px;
  @media (max-width: 830px) {
    grid-template-rows: repeat(2, 30vh);
  }

  &__sessons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  &__block {
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 24px;
    position: relative;
    box-shadow: 0px 5px 50px rgba(37, 1, 0, 0.2);
    transition: 2.8s;
    background-size: cover;
    cursor: pointer;
    &--spring {
      grid-column-start: 1;
      grid-column-end: 3;
      background-image: url("../assets/images/spring.jpg");
      background-repeat: no-repeat;
      background-position: center;
    }

    &--summer {
      background-image: url("../assets/images/summer.jpg");
      background-repeat: no-repeat;
      background-position: bottom;
    }

    &--winter {
      background-image: url("../assets/images/winter.jpg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &__name {
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: white;
    bottom: 15px;
    right: 15px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 8px;
  }
}
</style>
