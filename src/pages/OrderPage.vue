<template>
  <div class="order">
    <h2 class="order__title">Оформление заказа</h2>
    <form action="" class="order__form">
      <label for="name" class="order__label">
        <span class="order__label-name">Имя</span>
        <input
          type="text"
          class="order__input"
          id="name"
          v-model="order.name"
          required
        />
      </label>
      <label for="lastName" class="order__label">
        <span class="order__label-name">Фамилия</span>
        <input
          type="text"
          class="order__input"
          id="lastName"
          v-model="order.lastName"
          required
        />
      </label>
      <label for="tel" class="order__label">
        <span class="order__label-name">Номер телефона</span>
        <input
          type="tel"
          class="order__input"
          id="tel"
          v-model="order.tel"
          required
        />
      </label>
      <label for="mail" class="order__label">
        <span class="order__label-name">Email</span>
        <input
          type="mail"
          class="order__input"
          id="mail"
          v-model="order.mail"
          required
        />
      </label>
      <label for="city" class="order__label">
        <span class="order__label-name">Город:</span>
        <input
          type="text"
          class="order__input"
          id="city"
          v-model="order.city"
          required
        />
      </label>
      <label for="region" class="order__label">
        <span class="order__label-name">Область:</span>
        <input
          type="text"
          class="order__input"
          id="region"
          v-model="order.region"
          required
        />
      </label>
      <div class="order__delivery">
        <label for="newpost" class="order__label order__label--radio">
          <span class="order__label-name">Новой Почтой</span>
          <input
            type="radio"
            class="order__radio"
            name="delivery"
            id="newpost"
            value="newPost"
            v-model="delivery"
          />
        </label>
        <label for="autoOnMarket" class="order__label order__label--radio">
          <span class="order__label-name">Транспорт на 7КМ</span>
          <input
            type="radio"
            class="order__radio"
            name="delivery"
            id="autoOnMarket"
            value="Market"
            v-model="delivery"
          />
        </label>
      </div>
      <div class="order__delivery-method" v-if="this.delivery == 'newPost'">
        <label for="sectionNumber" class="order__label">
          <span class="order__label-name">Номер отделения</span>
          <input
            type="text"
            class="order__input"
            id="sectionNumber"
            v-model="newPostDelivery.sectionNumber"
            required
          />
        </label>
        <label for="sectionAddress" class="order__label">
          <span class="order__label-name">Адрес Отделения</span>
          <input
            type="text"
            class="order__input"
            id="sectionAddress"
            v-model="newPostDelivery.sectionAddress"
            required
          />
        </label>
      </div>
      <div class="order__delivery-method" v-if="this.delivery == 'Market'">
        <label for="carNumber" class="order__label">
          <span class="order__label-name">Номерной знак Транспорта</span>
          <input
            type="text"
            class="order__input"
            id="carNumber"
            v-model="carOnMarket.carNumber"
            required
          />
        </label>
        <label for="parking" class="order__label">
          <span class="order__label-name">Название Стоянки</span>
          <input
            type="text"
            class="order__input"
            id="parking"
            v-model="carOnMarket.parking"
            required
          />
        </label>
        <label for="driverTel" class="order__label">
          <span class="order__label-name">Номер телефона водителя</span>
          <input
            type="text"
            class="order__input"
            id="driverTel"
            v-model="carOnMarket.driverTel"
            required
          />
        </label>
      </div>
      <p class="order__total-price">Сумма заказа: {{ totalPrice }} &#8372;</p>
      <button class="order__btn">Оформить заказ</button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      order: {
        name: "",
        lastName: "",
        mail: "",
        tel: "",
        city: "",
        region: "",
      },
      delivery: "",
      carOnMarket: {
        carNumber: "",
        parking: "",
        driverTel: "",
      },
      newPostDelivery: {
        sectionNumber: "",
        sectionAddress: "",
      },
    };
  },
  computed: {
    ...mapGetters(["totalPrice"]),
  },
};
</script>
<style lang="scss" scoped>
.order {
  background-image: url("../assets/images/delivery-bg.jpeg");
  background-position: top right;
  background-repeat: no-repeat;
  min-height: calc(100vh - 312px);
  margin-bottom: 30px;
  &__title {
    margin-bottom: 30px;
    text-align: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__label {
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    &--radio {
      align-items: center;
    }
  }
  &__label-name {
    white-space: nowrap;
    font-size: 14px;
    display: block;
    margin-bottom: 2px;
  }
  &__input {
    margin: 1px;
    border-radius: 4px;
    padding: 4px 8px;
    border: 1px solid black;
  }
  &__delivery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 320px;
    width: 100%;
  }
  &__total-price {
    text-align: center;
    margin-bottom: 16px;
    font-weight: bold;
    max-width: 320px;
  }
  &__btn {
    background: none;
    border: 1px solid black;
    padding: 8px;
    width: 100%;
    max-width: 320px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border-color: white;
      color: white;
      background-color: black;
    }
  }
}
</style>
