import Vue from "vue";
import Vuex from "vuex";
import products from "../assets/catalog/catalog.js";
import config from "../assets/js/config.js";
import priceList from "../assets/js/price.js";
import sizes from "../assets/js/sizes.js";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productId: {},
    products,
    filter: {
      season: "",
      size: [],
      model: "",
      gamma: "",
    },
    preOrder: {},
    isCard: false,
  },
  mutations: {
    updateFilter(state, { key, option }) {
      if (config[key].isArray) {
        if (state.filter[key].includes(option)) {
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
    addColor(state, { model, color }) {
      console.log(state.preOrder, model, color);
      if (!state.preOrder[model]) {
        state.preOrder[model] = {};
      }
      if (!state.preOrder[model][color]) {
        state.preOrder[model][color] = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        };
      }
      state.preOrder = {
        ...state.preOrder,
      };
    },
    changeValue(state, { model, color, size, amount }) {
      console.log(state.preOrder);
      state.preOrder[model][color][size] = Number(amount);
    },
    deleteColor(state, { model, color }) {
      delete state.preOrder[model][color];
      state.preOrder = {
        ...state.preOrder,
      };
    },
    reduceAmount(state, { model, color, size }) {
      if (state.preOrder[[model]][[color]][[size]] > 0) {
        state.preOrder[[model]][[color]][[size]] -= 1;
        state.preOrder = {
          ...state.preOrder,
        };
      }
    },
    increaseQuantity(state, { model, color, size }) {
      state.preOrder[[model]][[color]][[size]] += 1;
      state.preOrder = {
        ...state.preOrder,
      };
    },
    changeIsCard(state) {
      state.isCard = !state.isCard;
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
              !item[key].some((size) => state.filter[key].includes(sizes[size]))
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
    productByModel: (state) => (model) => {
      return state.products.find((product) => product.model === model);
    },
    totalPrice(state) {
      let result = 0;
      for (let model in state.preOrder) {
        for (let color in state.preOrder[model]) {
          for (let size in state.preOrder[model][color]) {
            if (state.preOrder[model][color][size] > 0) {
              result +=
                state.preOrder[model][color][size] * priceList[model][size];
            }
          }
        }
      }
      return result;
    },
  },
});
