import Vue from "vue";
import Vuex from "vuex";
import products from "../assets/catalog/catalog.js";
import config from "../assets/js/config.js";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products,
    filter: {
      season: "",
      size: [],
      model: "",
      gamma: "",
    },
  },
  mutations: {
    updateFilter(state, { key, option }) {
      if (config[key].isArray) {
        if (state.filter[key].includes(option)) {
          console.log(state.filter[key].indexOf(option));
          state.filter[key].splice(state.filter[key].indexOf(option), 1);
        } else {
          state.filter[key].push(option);
        }
      } else {
        state.filter[key] = option;
      }
    },
    clearFilter(state) {
      for (let key in state.filter) {
        state.filter[key] = Array.isArray(state.filter[key]) ? [] : "";
      }
    },
  },
  getters: {
    productsByFilter(state) {
      const result = [];

      state.products.forEach((item) => {
        let flag = true;
        for (let key in state.filter) {
          if (
            !state.filter[key] ||
            (Array.isArray(state.filter[key]) && !state.filter[key].length)
          ) {
            continue;
          }
          if (
            Array.isArray(state.filter[key]) &&
            Array.isArray(item[key]) &&
            state.filter[key].length &&
            item[key].length
          ) {
            if (
              !item[key].some((size) =>
                state.filter[key]
                  .join(",")
                  .toLowerCase()
                  .split(",")
                  .includes(size.toLowerCase())
              )
            ) {
              flag = false;
              break;
            }
          } else if (
            state.filter[key].toLowerCase() !== item[key].toLowerCase()
          ) {
            flag = false;
            break;
          }
        }
        if (flag) {
          result.push(item);
        }
      });
      return result;
    },
  },
});
