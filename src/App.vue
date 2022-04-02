<template>
  <div id="App">
    <header class="header">
      <h1>My personal coasts</h1>
    </header>
    <ButtonV 
    msg="Show paymentform"
    @watch="handleShow"
    />
    <template v-if="show">
    <payment-form @add="onDataAdded" />
    </template>
    <paymentsList :items="paymentsList" />
  </div>
</template>

<script>
import ButtonV from "./components/ButtonV.vue"
import paymentsList from "./components/PaymentsList.vue";
import PaymentForm from "./components/PaymentForm.vue";
export default {
  name: "#App",
  components: {
    paymentsList,
    PaymentForm,
    ButtonV,
  },
  data() {
    return {
      show: false,
      paymentsList: [
        {
          date: "08.02.22",
          category: "Education",
          price: 123,
        },
        {
          date: "10.02.22",
          category: "Sport",
          price: 325,
        },
        {
          date: "13.03.22",
          category: "Learning",
          price: 900,
        },
      ],
    };
  },
  methods: {
    onDataAdded(data) {
      console.log(data);
      this.paymentsList.push(data);
    },
    handleShow(){
      this.show = !this.show
    }
  },
};
</script>

<style>
</style>
