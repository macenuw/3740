<template>
  <div class="selected-color">
    <div class="selected-color__title-row">
      <span class="selected-color__color-name">Синий</span>
      <button class="selected-color__delete-color">Удалить</button>
    </div>
    <div class="selected-color__size">
      <span class="selected-color__size-name">Норма</span>
      <span class="selected-color__size-price">95 &#8372; </span>
      <input
        type="number"
        class="selected-color__input"
        placeholder="0"
        min="0"
      />
    </div>
    <div class="selected-color__size">
      <span class="selected-color__size-name">Полу-Батал</span>
      <span class="selected-color__size-price">95 &#8372; </span>
      <input
        type="number"
        class="selected-color__input"
        placeholder="0"
        min="0"
      />
    </div>
    <div class="selected-color__size">
      <span class="selected-color__size-name">Батал</span>
      <span class="selected-color__size-price">95 &#8372; </span>
      <input
        type="number"
        class="selected-color__input"
        placeholder="0"
        min="0"
      />
    </div>
    <div class="selected-color__size">
      <span class="selected-color__size-name">Супер-Батал</span>
      <span class="selected-color__size-price">95 &#8372; </span>
      <input
        type="number"
        class="selected-color__input"
        placeholder="0"
        min="0"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.selected-color {
  max-width: 600px;
  width: 100%;
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 4px;
  &__title-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  &__color-name {
    font-weight: bold;
    font-size: 18px;
  }
  &__size {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  &__size-name {
    min-width: 100px;
  }
  &__size-price {
    font-weight: bold;
    margin-right: auto;
    margin-left: 15px;
  }
  &__input {
    max-width: 30%;
    padding-left: 14px;
    &::placeholder {
      text-align: center;
    }
  }
}
</style>
