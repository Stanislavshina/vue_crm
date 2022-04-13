<template>
  <div class="wrapper" > 
     <div class="overlay"></div>
     <header>{{modal}}</header>
     <payment-form v-if="name=== 'paymentForm'" :i="settings.i" @add="onDataAdded"/>
     <button @click="onClose">close</button>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm.vue'
export default {
  components: { PaymentForm },
  props:{
     modal: String
  },
  props:{
    name: String,
    settings: Object
  },
  data(){
    return{
      
    }
  },
  methods: {
    onDataAdded(data) {
      //console.log(data);
      this.$store.state.paymentsList.push(data)
  },
  onClose(){
      this.$modal.close();
    }
},
}
</script>

<style scoped lang='scss'>
.wrapper{
  border: 1px solid red;
}
</style>