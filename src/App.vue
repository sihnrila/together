<template>
  <div id="app">
     <router-view></router-view>
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main>
   </div>
</template>
<script>
import LoadingScreen from "./components/LoadingScreen";

export default {
  name: "App",
  components: {
    LoadingScreen,

  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>

<style scoped lang="css">
  @import "./assets/css/style.css"; 
</style>
