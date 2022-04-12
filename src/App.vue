<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
@import "/src/assets/scss/reset.scss";
@import "/src/assets/scss/fonts.scss";
@import "/src/assets/scss/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
