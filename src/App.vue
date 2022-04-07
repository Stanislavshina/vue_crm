<template>
  <div id="App">
    <header class="header">
      <a href="#Dashboard">Dashboard</a>
      <a href="#About">About</a>
      <a href="#page-404">404</a>
    </header>
    <main>
      <dashboard v-if="page == 'Dashboard'"/>
      <about-view v-if="page === 'About'"/>
      <page-404 v-if="page === 'page-404'"/>
    </main>
  </div>
</template>

<script>
import AboutView from './views/AboutView.vue';
import Dashboard from './views/Dashboard.vue';
import Page404 from './views/Page-404.vue';

export default {
  name: "App",
  components: {
    Dashboard,
    AboutView,
    Page404
  },
  data() {
    return {
      page: null
    };
  },
  methods:{
    setPage(){
      this.page= location.hash.slice(1)
    }
  },
  mounted(){
    this.setPage()
    window.addEventListener('hashchange',()=>{
      this.setPage()
    })
  }
}
</script>

<style>
</style>
