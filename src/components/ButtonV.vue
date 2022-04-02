<template>
  <button @click="show" >{{ msg }}</button>
</template>

<script>
export default {
   props:{
         msg: String
      },
   methods:{
      
      show(){
         this.$emit('watch');
      }
   },
   
}
</script>

<style scoped lang="scss">
button {
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
  margin-bottom: 15px;
}
</style>