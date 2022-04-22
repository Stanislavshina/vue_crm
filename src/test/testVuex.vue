<template>
  <div>
     <input name="test" v-model="propComp">
     <button @click="onSave" name="save">Save</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
   name: "testVuex",
   data(){
      return{
         propComp: ''
      }
   },
   methods:{
      ...mapActions(['addData']),
      onSave(){
         this.addData(this.propComp)
      }
   }
}
</script>

<style>

</style>