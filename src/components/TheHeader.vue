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
        <li class="menu__item" @click="isActive = !isActive">
          <router-link :to="{ name: 'ProductPage' }" class="menu__link">
            Product
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
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
  @media (max-width: 800px) {
    position: relative;
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
    right: 20px;
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
  @media (max-width: 800px) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    top: 0;
    left: 15px;
    right: 15px;
    border-radius: 15px;
    background: #eaadef;
    display: flex;
    transform: translateY(-800px);
    transition: 0.3s;
  }
  &.active {
    @media (max-width: 800px) {
      transform: translateY(0px);
    }
  }
  &__item {
    margin: 0 12px;
    @media (max-width: 800px) {
      padding: 8px;
    }
  }

  &__link {
    color: white;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    padding: 0 5px;
    @media (max-width: 998px) {
      font-size: 16px;
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
}
</style>
