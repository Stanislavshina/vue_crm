<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <clicker-button />
    <clicker-button />
    <clicker-button />
    <clicker-button />
  </div>
</template>

<script>
// @ is an alias to /src
import ClickerButton from "../components/Clicker-button.vue";

export default {
  name: "HomeView",
  components: {
    ClickerButton,
  },
};
</script>
