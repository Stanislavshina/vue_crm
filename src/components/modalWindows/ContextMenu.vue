<template>
  <div :class="[$style.context]" :style="styles">
   <ul :class="[$style.context__item]">
      <li 
      v-for="(i, indx) in items" :key="indx"
      @click="onClick(i)">
      {{i.text}}</li>
   </ul>
  </div>
</template>

<script>
export default {
   data(){
      return{
         items: [],
         shown: false,
         xPosition: 0,
         yPosition: 0
      }
   },
   computed:{
      styles(){
         return {
            top: `${this.yPosition}px`,
            left: `${this.xPosition + 35}px`
         }
      }
   },
   methods:{
      onClick(i){
         i.action()
         this.contextClose()
      },
      contextShow(items, caller){
         console.log(`show context`);
         this.items = items
         this.shown = true
         this.setPosition(caller)
      },
      setPosition(caller){
         const computed = caller.getBoundingClientRect()
         this.xPosition = computed.left
         this.yPosition = computed.top
      },
      contextClose(){
         this.shown = false
         this.items = []
      }
   },
   mounted(){
      this.$context.EventBus.$on('show', this.contextShow)
      this.$context.EventBus.$on('close', this.contextClose)

   },
   beforeDestroy(){
      this.$context.EventBus.$off('show', this.contextShow)
      this.$context.EventBus.$off('close', this.contextClose)
   }
}
</script>

<style module lang='scss'>
.context{
   background: #ccc;
   position: absolute;
}
</style>