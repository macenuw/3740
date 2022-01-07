<template>
  <div class="product container">
    <div class="product__images">
      <div class="product__img-inner">
        <img
          src="../assets/images/slider/slide1.jpg"
          alt=""
          class="product__img"
        />
      </div>
      <div class="product__colors">
        <div class="product__color">
          <span class="product__color-square"></span>
          <span class="product__color-name">Черный</span>
          <button class="product__color-btn">Добавить</button>
        </div>
      </div>
    </div>
    <div class="product__info">
      <h2 class="product__title">Футболка Отворот</h2>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: space-between;
  &__images {
    display: flex;
    margin-bottom: 36px;
  }
  &__img-inner {
    max-width: 500px;
    max-height: 550px;
    margin-right: 12px;
  }
  &__img {
    border-radius: 8px;
    object-fit: cover;
  }
  &__colors {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    max-height: 550px;
    overflow: auto;
    min-width: 200px;
  }
  &__color {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 6px;
  }
  &__color-square {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 5px;
  }
  &__color-name {
    font-size: 14px;
    font-weight: bold;
  }
  &__color-btn {
    padding: 4px 12px;
    font-size: 12px;
    background-color: black;
    color: white;
    border: 1px solid black;
    box-shadow: none;
    border-radius: 3px;
    transition: 0.5s;
    font-weight: bold;
    &:hover {
      border-color: black;
      background-color: #eaadef;
      color: black;
    }
  }
  &__info {
    max-width: 500px;
    width: 100%;
  }
  &__title {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
