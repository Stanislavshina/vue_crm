<template>
<v-container>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="2">Дата</v-col>
      <v-col :cols="2">Категория</v-col>
      <v-col :cols="2">Цена</v-col>
    </v-row>
    <v-row v-for="(i,indx) in currentElements" :key="indx">
      <v-col :cols="1">{{i.id}}</v-col>
      <v-col :cols="2">{{i.date}}</v-col>
      <v-col :cols="3">{{i.category}}</v-col>
      <v-col :cols="3">{{i.price}} Руб.</v-col>
      <v-btn  fab text
      @click="deleteItems(i)" :cols="1"><v-icon>mdi-close-circle</v-icon></v-btn>
    </v-row>
    <pagination :length="getPaymentsList.length" :n="n" :cur="page" @paginate="onPaginate"/>
    </v-container>
    
  
</template>

<script>
import {mapGetters} from "vuex";
import pagination from './paginationComponent.vue';
export default {
  components: { pagination},
  data(){
    return {
      page: 1,
      n: 10
    }
  },
  computed:{
...mapGetters([
  'getPaymentsList'
]),
currentElements(){
  const { n, page } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
}
  },
  methods: {
    onPaginate (p) {
      this.page = p
    },
    lookAtMe(){
      this.$modal.show('paymentForm')
    },
    deleteItems(i){
      this.$store.state.paymentsList = this.$store.state.paymentsList.filter(t=> t != i)
      this.$store.state.paymentsList.id--
    },
    onContextMenuClick(event, i){
      console.log(i);
      this.$context.show(event, [
        {text: 'Delete', action: ()=>{this.deleteItems(i)}},
        {text: 'Edit', action: ()=>{this.$modal.show('paymentForm', i)}}
      ])
    },

  },
  mounted(){
    
  }
}
</script>

<style lang="scss" module>
body{
  font-size: 20px;
}
table {
  border: 1px solid #000;
  width: 500px;
  border-collapse: collapse;
  // table-layout
}
table th {
  text-align: center;
  padding: 5px;
  color: rgb(8, 68, 8);
  font-size: 24px;
}
table td {
  border: 1px solid #000;
  text-align: left;
  padding: 5px 7px;
  font-size: 22px;
  &:first-child{
    text-align: center;
    padding: 5px 0;
  }
}
</style>