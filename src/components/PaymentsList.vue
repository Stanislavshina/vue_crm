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
        <tr v-for="(i,indx) of items" :key="indx">
          <td>{{indx}}</td>
          <td>{{i.date}}</td>
          <td>{{i.category}}</td>
          <td>{{i.price}}</td>
        </tr>
      </tbody>
    </table>
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
export default {
  props: {
    items: Array,
  },
  methods: {
    showLog() {
      console.log(items);
    },
  },
};
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