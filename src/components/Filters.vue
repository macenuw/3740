<template>
  <div class="filters" v-bind:class="{ active: filterActive }">
    <div class="filters__title" @click="filterActive = !filterActive">
      Фильтры
    </div>
    <div class="filters__category" v-for="(category, key) in config" :key="key">
      <h3 class="filters__subtitle">{{ category.label }}</h3>
      <div class="filters__inner">
        <button
          class="filters__btn"
          v-for="option in category.options"
          :key="option"
          @click="updateFilter({ key, option })"
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
    <button class="filters__zeroed-btn" @click="clearFilter">Сбросить</button>
  </div>
</template>

<script>
import config from "../assets/js/config.js";
import { mapMutations } from "vuex";
export default {
  name: "Filters",
  data() {
    return {
      config,
      filterActive: false,
    };
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
  },
  methods: {
    ...mapMutations(["updateFilter", "clearFilter"]),
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 280px;
  border-radius: 12px;
  padding: 15px;
  @media (max-width: 900px) {
    width: 100%;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    &.active {
      .filters__category {
        transform: translateY(0);
        opacity: 1;
        position: static;
      }
    }
  }
  &__title {
    font-size: 32px;
    margin-bottom: 24px;
    font-weight: 600;
    @media (max-width: 900px) {
      background-image: url("../assets/images/filters-arrow.svg");
      background-position: top right;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__category {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    transition: 0.3s;
    @media (max-width: 900px) {
      position: absolute;
      opacity: 0;
      transform: translateY(-800px);
    }
  }
  &__subtitle {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  &__inner {
    padding: 0 0 0 24px;
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
      flex-direction: row;
    }
    @media (max-width: 680px) {
      flex-direction: column;
    }
  }
  &__btn {
    background: none;
    border: 1px solid #eaadef;
    background-color: white;
    text-align: center;
    margin-bottom: 12px;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 600;
    font-size: 16px;
    transition: 0.3s;
    @media (max-width: 900px) {
      display: block;
      width: 100%;
    }

    &.active {
      background-color: #eaadef;
    }
    &:hover {
      border-color: black;
    }
  }
  &__zeroed-btn {
    border: 2px solid #eaadef;
    background: none;
    box-shadow: none;
    font-size: 18px;
    padding: 6px 16px;
    border-radius: 12px;
    width: 100%;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s;
    &:hover {
      color: black;
      background-color: #eaadef;
    }
  }
}
</style>
