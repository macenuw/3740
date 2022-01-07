<template>
  <div class="filters">
    <div class="filters__title">Фильтры</div>
    <div class="filters__category" v-for="(category, key) in config" :key="key">
      <h3 class="filters__subtitle">{{ category.label }}</h3>
      <div class="filters__inner">
        <button
          class="filters__btn"
          v-for="option in category.options"
          :key="option"
          @click="optionHandler(key, option)"
          v-bind:class="{
            active: category.isArray
              ? filter[key].includes(option)
              : filter[key] === option,
          }"
        >
          {{ option }}
        </button>
      </div>
    </div>
    <button class="filters__zeroed-btn" @click="clearFilters">Сбросить</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      isActive: false,
      config: {
        season: { options: ["Лето", "Зима", "Весна-Осень"], label: "Сезон" },
        size: {
          options: ["s-m", "m-l", "l-xl", "xl-xxl"],
          label: "Размер",
          isArray: true,
        },
        gamma: { options: ["mono", "color"], label: "Палитра" },
        model: {
          options: ["8-3", "148-3", "291-1"],
          label: "Популярные Модели",
        },
      },
      filter: {
        season: "",
        size: [],
        model: "",
        gamma: "",
      },
    };
  },
  methods: {
    optionHandler(key, option) {
      if (this.config[key].isArray) {
        if (!this.filter[key].includes(option)) {
          this.filter[key].push(option);
        }
      } else {
        this.filter[key] = option;
      }
    },
    clearFilters() {
      for (let key in this.filter) {
        this.filter[key] = Array.isArray(this.filter[key]) ? [] : "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 280px;
  border: 3px solid #eaadef;
  border-radius: 12px;
  padding: 12px;
  &__title {
    font-size: 32px;
    margin-bottom: 24px;
    font-weight: 600;
  }
  &__category {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 12px;
    margin-bottom: 24px;
  }
  &__subtitle {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  &__inner {
    padding: 0 0 0 24px;
    display: flex;
    flex-direction: column;
  }
  &__btn {
    background: none;
    border: 3px solid #eaadef;
    background-color: #eaadef;
    text-align: center;
    margin-bottom: 12px;
    border-radius: 8px;
    padding: 4px 12px;
    font-weight: 600;
    font-size: 16px;
    transition: 0.3s;
    &.active {
      background-color: white;
    }
    &:hover {
      border-color: black;
    }
  }
  &__zeroed-btn {
    border: 3px solid #eaadef;
    background: none;
    box-shadow: none;
    font-size: 24px;
    padding: 8px 16px;
    border-radius: 12px;
    width: 100%;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      color: black;
      background-color: #eaadef;
    }
  }
}
</style>
