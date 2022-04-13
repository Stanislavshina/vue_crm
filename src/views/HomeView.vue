<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <calc/>
    <clicker-button />
    <clicker-button />
    <clicker-button />
    <clicker-button />
  </div>
</template>

<script>
// @ is an alias to /src
import ClickerButton from "../components/Clicker-button.vue";
import HelloWorld from "../components/Calc.vue";

export default {
  name: "HomeView",
  components: {
    ClickerButton,
    HelloWorld,
  },
};
</script>
