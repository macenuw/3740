<template>
  <footer class="footer">
    <div class="footer__top d-flex">
      <a href="#" class="logo">
        <img src="@/assets/images/3740.svg" alt="3740" class="logo__img" />
      </a>
      <ul class="footer__contacts d-flex">
        <li class="footer__item">Контакты:</li>
        <li class="footer__item">
          <a href="tel:+380939902231" class="footer__link"> 0939902231 </a>
        </li>
        <li class="footer__item">
          <a href="tel:+380979063963" class="footer__link"> 0979063963 </a>
        </li>
      </ul>
    </div>
    <div class="footer__down">
      <ul class="menu">
        <li class="menu__item">
          <a href="#" class="menu__link">Топ Продаж</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Индивидуальнный заказ</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Каталог</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Оплата и Доставка</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Контакты</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
.footer {
  background-color: black;
  padding: 14px 36px 14px 48px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0px 5px 50px rgba(37, 1, 0, 0.2);

  &__top {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
  .logo {
    @media (max-width: 700px) {
      margin-bottom: 30px;
    }
  }
  &__down {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
    @media (max-width: 820px) {
      display: none;
    }
  }
  &__contacts {
    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  &__item {
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    @media (max-width: 550px) {
      margin: 5px 0;
    }
    &:not(:last-child) {
      margin-right: 24px;
      @media (max-width: 550px) {
        margin-right: 0;
      }
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__link {
    color: white;
    padding: 0 8px;
    @media (max-width: 998px) {
      font-size: 14px;
    }
  }
  .menu {
    display: flex;

    &__item {
      margin: 0 12px;
    }

    &__link {
      color: white;
      font-size: 20px;
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
      }
    }
  }
}
</style>
