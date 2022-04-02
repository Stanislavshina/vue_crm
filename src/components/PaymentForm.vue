<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model="price" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0,
      
    };
  },
  methods: {
    save() {
      const { date, category, price } = this;
      this.$emit("add", { date, category, price });
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