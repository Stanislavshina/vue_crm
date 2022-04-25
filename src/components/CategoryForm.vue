<template>
<v-container
    id="input-usage"
    fluid
  >
    <v-row
    justify="start"
    align-content="start">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
         <v-text-field
            label="Добавить Категорию"
            v-model="newCategory"
         ></v-text-field>
         
        </v-col>
        <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addCategory"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
         </v-btn>
    </v-row>
  </v-container>

</template>

<script>
// import ButtonV from './ButtonV.vue'
export default {
//   components: { ButtonV },
data(){
   return {
      newCategory: "",
   }
},
methods: {
   addCategory(data){
      data = this.newCategory;
      console.log(data);
      this.$store.state.categorysList.push(data)
      this.newCategory = ''

   }
}
}
</script>

<style lang="scss" scoped>
.text-field{
   input{
   width: 250px;
}
}
</style>