<template>
  <div id="app">
    <tableTest></tableTest>
    <!-- <formTest></formTest> -->
  </div>
</template>

<script>
import tableTest from './components/tableTest'
import formTest from './components/formTest'

export default {
  name: 'app',
  components: { tableTest, formTest }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
