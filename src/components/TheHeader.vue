<template>
  <header class="header">
    <nav class="menu__inner">
      <router-link :to="{ name: 'MainPage' }" class="logo">
        <img src="@/assets/images/3740.svg" alt="3740" class="logo__img" />
      </router-link>
      <ul class="menu">
        <li class="menu__item">
          <router-link
            :to="{ name: 'MainPage' }"
            class="menu__link"
            @click.native="menuOpened = false"
          >
            Главная
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            :to="{ name: 'CatalogPage' }"
            class="menu__link"
            @click.native="menuOpened = false"
          >
            Каталог
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            :to="{ name: 'DeliveryPage' }"
            class="menu__link"
            @click.native="menuOpened = false"
          >
            Оплата и Доставка
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            :to="{ name: 'ContactPage' }"
            class="menu__link"
            @click.native="menuOpened = false"
          >
            Контакты
          </router-link>
        </li>
        <li class="menu__item">
          <router-link
            :to="{ name: 'ProductPage' }"
            class="menu__link"
            @click.native="menuOpened = false"
          >
            Product
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  background-color: black;
  border-radius: 8px;
  margin-bottom: 36px;
  padding: 20px 36px 20px 48px;
  margin-top: 12px;
  box-shadow: 0px 5px 50px rgba(37, 1, 0, 0.2);
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

  &__item {
    margin: 0 12px;
  }

  &__link {
    color: white;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    padding: 0 5px;

    &:hover {
      color: #eaadef;
      border-color: #eaadef;
    }
  }
}
</style>
