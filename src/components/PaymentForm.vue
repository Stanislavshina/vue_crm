<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <!-- <input placeholder="Category" v-model="category" /> -->
    <select name="" id="rs" v-model="category">
      <option v-for="(i) of getCategorysList" :key="i">{{i}}</option>
    </select>
    <input placeholder="Price" v-model="price" />
    <button-v msg="Добавить" @watch="save" />
  </div>
</template>

<script>
import ButtonV from './ButtonV.vue';
import {mapGetters} from "vuex";
export default {
  components: { ButtonV },
  data() {
    return {
      date: "",
      price: 0,
      category: "",
      addNewCategory: "",
    };
  },
  computed: {
    ...mapGetters([
      'getCategorysList'
    ]),
  },
  methods: {
    getCurrenDate(){
      const dates = new Date();
      const d = dates.getDate();
      const m = dates.getMonth();
      const y = dates.getFullYear();
      return `${d}.${m}.${y}`
    },
    
    save() {
      // const { date, category, price } = this;
      const data = {
        date: this.date || this.getCurrenDate(),
        category: this.category,
        price: this.price
      }
      // this.$emit("add", { date, category, price })
      this.$emit('add', data)
    },
  },
  mounted() {
    if(this.$route.params.category){
      this.date = this.getCurrenDate();
      this.category = this.$route.params.category;
      this.price = Number(this.$route.query?.price) || 0
    }
    console.log(this.$route);
  }
};
</script>

<style scoped lang="scss">
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  max-width: 520px;
  width: 100%;
}
input {
  width: 200px;
  padding: 7px 15px;
  margin-bottom: 7px;
  border: 3px solid rgb(47, 97, 8);
  border-radius: 15px;
}
select{
  width: 235px;
  padding: 7px 15px;
  margin-bottom: 7px;
  border: 3px solid rgb(47, 97, 8);
  border-radius: 15px;
}

button {
  // width: 300px;
  // margin: 0 auto;
  background-color: rgb(82, 151, 30);
  border: none;
  padding: 7px 75px;
  border-radius:15px;
  text-transform: uppercase;
  font-style:800;
  font-size: 15px;
  letter-spacing: 1.5px;
  color: rgb(0, 0, 0);

}
.one{
 padding: 7px 25px;
 background-color: rgb(0, 52, 55);
 color: rgb(255, 251, 0);
}
</style>