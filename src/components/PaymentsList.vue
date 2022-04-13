<template>
  <div>
    <table>
      <thead>
        <tr>
        <th>#</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i,indx) in currentElements" :key="indx">
          <td>{{i.id}}</td>
          <td>{{i.date}}</td>
          <td>{{i.category}}</td>
          <td>{{i.price}}</td>
          <td @click="onContextMenuClick($event, i)">...</td>
        </tr>
        
         <!-- <ul>
      <li v-for="(i, indx) in currentElements" :key="indx">
        <div>{{indx}}</div>
        <div>{{i.date}}</div>
        <div>{{i.category}}</div>
        <div>{{i.price}}</div>
        <div @click=consoleAll(i)>x</div>
      </li>
    </ul> -->
        
      </tbody>
    </table>
    
    <pagination :length="getPaymentsList.length" :n="n" :cur="page" @paginate="onPaginate"/>
    <button @click="lookAtMe">Show</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import pagination from './pagination.vue';
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
    },
    onContextMenuClick(event, i){
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