<template>
  <button @click="onClick">{{ counter }}</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
  beforeCreate() {
    //  console.log(`before created called`);
    //  this.counter = 1;
  },
  created() {
    //  console.log("created!!!!!!");
    //  this.counter = 1;
  },
  beforeMount() {
    //  console.log(this.$el);
  },
  mounted() {
    //  console.log(this.$el);
  },
  beforeUpdate() {
    console.log("before");
  },
  updated() {
    console.log("update" + this.counter);
  },
};
</script>

<style>
</style>