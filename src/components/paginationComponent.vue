<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)"
    class="pagBtn">-</div>
    <div
    class="pagBtn"
      v-for="i in amount" :key="i"
      :class="{
        [$style.active]: cur === i
      }"
      @click="onClick(i)"
    >{{ i }}</div>
    <div @click="onClick(cur + 1)"
    class="pagBtn">+</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    cur: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}
</script>

<style module lang="scss">
.wrp {
  margin-top: 15px;
  display: flex;
  & > div {
    padding: 5px;
    border-radius: 30px;
    cursor: pointer;
    
    &.active {
      background: rgb(82, 151, 30);
      color: rgb(255, 208, 0);
    }
  }
}

</style>