<template>
<v-container>
  <v-row>
    <v-col>
      <category-form/>
      <v-row
      align-content="start"
      justify="start">
      <v-btn @click="handleShow">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
      <template v-if="show">
      <payment-form @add="onDataAdded" />
      </template>
      </v-row>
      <paymentsList />
    </v-col>
    <v-col>
      <chart-pie :items="getPaymentsList"/>
    </v-col>
  </v-row>
</v-container>













  
</template>

<script>
import paymentsList from "../components/PaymentsList.vue";
import PaymentForm from "../components/PaymentForm.vue";
import {mapActions, mapGetters} from "vuex";
import { Pie } from 'vue-chartjs';
import CategoryForm from '../components/CategoryForm.vue';
import ChartPie from '@/components/chart-pie.vue';
export default {
  name: "App",
  extends: Pie,
  components: {
    paymentsList,
    PaymentForm,
    CategoryForm,
    ChartPie
  },
  data() {
    return {
      show: false,
    };
  },
  computed:{
    ...mapGetters(['getPaymentsList'])
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
