import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catalog: [],
    info: [],
  },
  mutations: {},
  actions: {
    fetchCatalog() {
      axios
        .get("/catalog/catalog.json")
        .then((response) => (this.info = response));
    },
  },
  modules: {},
});
