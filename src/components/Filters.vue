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
    background-color: white;
    text-align: center;
    margin-bottom: 12px;
    border-radius: 8px;
    padding: 4px 12px;
    font-weight: 600;
    font-size: 16px;
    transition: 0.3s;
    &.active {
      background-color: #eaadef;
    }
    &:hover {
      border-color: black;
    }
  }
  &__zeroed-btn {
    border: 3px solid #eaadef;
    background: none;
    box-shadow: none;
    font-size: 18px;
    padding: 2px 16px;
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
