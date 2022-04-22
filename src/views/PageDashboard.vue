<template>
  <div id="App">
    <header class="header">
      <h1>My personal coasts</h1>
    </header>
    <category-form/>
    <ButtonV 
    msg="Show paymentform"
    @watch="handleShow"
    />
    <template v-if="show">
    <payment-form @add="onDataAdded" />
    </template>
    <paymentsList />
  </div>
</template>

<script>
import ButtonV from "../components/ButtonV.vue"
import paymentsList from "../components/PaymentsList.vue";
import PaymentForm from "../components/PaymentForm.vue";
import {mapActions} from "vuex";
import CategoryForm from '../components/CategoryForm.vue';
export default {
  name: "App",
  components: {
    paymentsList,
    PaymentForm,
    ButtonV,
    CategoryForm
  },
  data() {
    return {
      show: false,
    };
  },
  computed:{
    
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategorys'
    ]),
    onDataAdded(data) {
      //console.log(data);
      this.$store.state.paymentsList.push(data)
    },
    handleShow(){
      this.show = !this.show
    },
  },
  mounted(){
    this.fetchData()
    this.fetchCategorys()
  }
};
</script>

<style>
</style>
