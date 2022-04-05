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
          <td>{{indx}}</td>
          <td>{{i.date}}</td>
          <td>{{i.category}}</td>
          <td>{{i.price}}</td>
        </tr>
      </tbody>
    </table>
    <pagination :length="getPaymentsList.length" :n="n" :cur="page" @paginate="onPaginate"/>
    <!-- <ul>
      <li v-for="(i, indx) in items" :key="indx">
        <div>{{indx}}</div>
        <div>{{i.date}}</div>
        <div>{{i.category}}</div>
        <div>{{i.price}}</div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import pagination from './pagination.vue';
export default {
  components: { pagination },
  data(){
    return {
      page: 1,
      n: 3
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
    }
  },
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