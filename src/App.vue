<template>
  <div id="App">
    <header>
      <router-link to="/Dashboard">Dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/page-404">not found</router-link>
      <router-link to="/calc">Calc</router-link>
    </header>
    <main>
      <router-view/>
      <transition name="fade">
      <modal v-if="modalShown" :name="modalShown"/>
      </transition>
      <context-menu/>
    </main>
  </div>
</template>

<script>
import ContextMenu from './components/modalWindows/ContextMenu.vue';
// import Modal from './components/modalWindows/Modal.vue';
export default {
  name: "App",
  components: {
    Modal: ()=> import('./components/modalWindows/ModalWidow.vue'),
    ContextMenu
  },
  data() {
    return {
      modalShown: false
    };
  },
  computed:{
    
  },
  methods: {
    onShown(name){
      this.modalShown = name
    },
    onClose(){
      this.modalShown = false
    }
  },
  mounted(){
    console.log(this.$modal);
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy(){
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
