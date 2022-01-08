<template>
  <section class="order">
    <h2 class="order__title title">Индивидуальнный заказ</h2>
    <div class="order__items d-flex">
      <div class="order__line"></div>
      <div class="order__item">
        Изготовление лекала по вашемы образцу или описанию
      </div>
      <div class="order__item">Просчет стоимости готового изделия</div>
      <div class="order__item">
        Подтреждение заказа и нужного колличества в цвете
      </div>
      <div class="order__item">Изготовление и отправка полного заказа</div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.order {
  margin-bottom: 64px;
  &__items {
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  &__item {
    text-align: center;
    max-width: 240px;
    border: 1px solid black;
    padding: 12px 36px;
    border-radius: 8px;
    background-color: white;
    z-index: 2;
  }
  &__line {
    position: absolute;
    width: 90%;
    top: calc(50% - 1px);
    height: 2px;
    background-color: black;
    z-index: 0;
  }
}
</style>
