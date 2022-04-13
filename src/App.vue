<template>
  <div id="App">
    <header>
      <router-link to="/Dashboard">Dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/page-404">not found</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
    };
  },
  computed:{
    
  },
  methods: {
  },
  
};
</script>

<style>
</style>
