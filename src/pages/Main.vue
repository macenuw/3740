<template>
  <main>
    <TopSection />
    <Seasons />
    <Sales />
    <Order />
  </main>
</template>

<script>
import TopSection from "../components/TopSection.vue";
import Seasons from "../components/TheSeasons.vue";
import Sales from "../components/Sales.vue";
import Order from "../components/Order.vue";

export default {
  name: "MainPage",
  components: {
    TopSection,
    Seasons,
    Sales,
    Order,
  },
};
</script>

<style lang="scss"></style>
