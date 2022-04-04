<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model="price" />
    <button-v msg="Добавить" @watch="save" />
  </div>
</template>

<script>
import ButtonV from './ButtonV.vue';
export default {
  components: { ButtonV },
  data() {
    return {
      date: "",
      category: "",
      price: 0,
      
    };
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
      // this.$emit("add", { date, category, price });
      this.$emit('add', data)
    },
  },
};
</script>

<style scoped lang="scss">
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  max-width: 520px;
  width: 100%;
}
input {
  width: 500px;
  padding: 7px 15px;
  margin-bottom: 7px;
  border: 3px solid rgb(47, 97, 8);
  border-radius: 15px;
}

button {
  // width: 300px;
  margin: 0 auto;
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
</style>