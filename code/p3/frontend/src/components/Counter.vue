<template>
  <div>
    <div>
      <button v-on:click="increaseCount">Increase</button>
      <span>Store count: {{ count }}</span>
      <button v-on:click="decreaseCount">Decrease</button>
    </div>
    <div>
      <span>Done TODOs count: {{ doneTodosCount }}</span>
    </div>
    <div>
      <h3>ASYNC</h3>
      <button v-on:click="increaseCountAsync">Increase In a second</button>
      <button v-on:click="increaseCounComplextAsync">Complex Increase</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    computed: {
      count() {
        return this.$store.state.count;
      },
      doneTodosCount() {
        return this.$store.getters.doneTodosCount
      }
    },
    methods: {
      increaseCount: function () {
        this.$store.commit({
          type: 'increment',
          amount: 10
        });
      },
      decreaseCount: function () {
        this.$store.commit({
          type: 'decrement',
          amount: 10
        });
      },
      increaseCountAsync: function () {
        this.$store.dispatch({
          type: 'incrementAsync',
          amount: 5
        });
      },
      increaseCounComplextAsync: function () {
        this.$store.dispatch({
          type: 'incremenTwicetAsync'
        });
      }
    }
  }
</script>

<style></style>
