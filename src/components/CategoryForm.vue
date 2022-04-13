<template>
  <div class="">
     <input type="text" v-model="newCategory">
     <button-v msg="добавить категорию" @watch="addCategory"/>
  </div>
</template>

<script>
import ButtonV from './ButtonV.vue'
export default {
  components: { ButtonV },
data(){
   return {
      newCategory: ""
   }
},
methods: {
   addCategory(data){
      data = this.newCategory;
      console.log(data);
      this.$store.state.categorysList.push(data)

   }
}
}
</script>

<style>

</style>