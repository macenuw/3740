<template>
  <main>
    <TopSection />
    <Seasons />
    <Sales />
  </main>
</template>

<script>
import TopSection from "../components/TopSection.vue";
import Seasons from "../components/TheSeasons.vue";
import Sales from "../components/Sales.vue";

export default {
  name: "MainPage",
  components: {
    TopSection,
    Seasons,
    Sales,
  },
};
</script>

<style lang="scss"></style>
