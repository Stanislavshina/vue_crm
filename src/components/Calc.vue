<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <button v-for="op in operations" :key="op" @click="mathOp(op)">
      {{ op }}
    </button>
    <div class="error" v-if="error">
      {{ error }}
    </div>

    <label>
      <input type="checkbox" @click="show = !show" />
      Display board
    </label>
    <div v-if="show">
      <button v-for="num in numbers" :key="num" @click="inputNum(num)">
        {{ num }}
      </button>
      <button @click="deleteLast">DELETE</button>
      <label>
        <input name="ops" type="radio" v-model="operand" value="1" />
        op1
      </label>
      <label>
        <input name="ops" type="radio" v-model="operand" value="2" />
        op2
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    show: false,
    error: "",
    operations: ["+", "-", "*", "/", "^", "%"],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operand: "1",
  }),
  props: {
    msg: String,
  },
  methods: {
    mathOp(op) {
      this.error = false;
      switch (op) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          if (op === "/" && this.operand2 === 0) {
            this.error = `на ноль делить нельзя`;
            return;
          } else {
            this.result = this.operand1 / this.operand2;
          }
          break;
        case "^":
          this.result = this.operand1 ** this.operand2;
          break;
        case "%":
          this.result = this.operand1 % this.operand2;
          break;
      }
    },
    inputNum(n) {
      const { operand } = this;
      const input = operand === "1" ? "operand1" : "operand2";
      this[input] = +(this[input] += String(n));
    },
    deleteLast() {
      const { operand } = this;
      const input = operand === "1" ? "operand1" : "operand2";
      this[input] = +String(this[input]).slice(0, -1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error {
  color: red;
  padding: 15px;
}
</style>