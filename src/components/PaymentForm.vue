

<!-- <div>
//     <input placeholder="Date" v-model="date" />
//     <select name="" id="rs" v-model="category">
//       <option v-for="(i) of getCategorysList" :key="i">{{i}}</option>
//     </select>
//     <input placeholder="Price" v-model="price" />
//     <button-v msg="Добавить" @watch="save" />
//   </div> -->

<template>
  <v-form>
    <v-container>
      <v-row
      align="start"
      justify="start">
        <v-col
        cols="12"
        class="one"
        >
          <v-text-field
            label="Date"
            v-model="date"
          ></v-text-field>
          <v-select
          :items="getCategorysList"
          label="Category"
          v-model="category"
        ></v-select>
          <v-text-field
            label="Price"
            v-model="price"
          ></v-text-field>
          <v-btn
  color="secondary"
  elevation="5"
  @click="save"
>Добавить</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// import ButtonV from './ButtonV.vue';
import {mapGetters} from "vuex";
export default {
  // components: { ButtonV },
  props: {
    i: Object
  },
  data() {
    return {
      date: "",
      price: null,
      category: "",
      addNewCategory: "",
      id: 0
    };
  },
  computed: {
    ...mapGetters([
      'getCategorysList',
      'getPaymentsList'
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
    getCurrentId(){
        return this.getPaymentsList[this.getPaymentsList.length-1].id+1
    },
    
    save() {
      // const { date, category, price } = this;
      const data = {
        id: this.getCurrentId(),
        date: this.date || this.getCurrenDate(),
        category: this.category,
        price: this.price
      }
      console.log(this.getPaymentsList[this.getPaymentsList.length-1].id);
      // this.$emit("add", { date, category, price })
      this.$emit('add', data)
      this.price = null
    },
  },
  mounted() {
    if(this.$route.params.category){
      this.date = this.getCurrenDate();
      this.category = this.$route.params.category;
      this.price = Number(this.$route.query?.price) || 0
    }
    // console.log(this.$route);
    if(this.i){
      const items = this.getPaymentsList.find(p => p.i === this.i)
      if(items){
        this.date = items.date
        this.category = items.category
        this.price = items.price
      }
    }
  }
};
</script>

<style scoped lang="scss">
.one{
  margin-top: 50px;
}
</style>