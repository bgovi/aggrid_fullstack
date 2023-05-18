<template>
  <hello-world msg="Hello Brandon" /> 
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
//show errors

//upload to grid button
//select sheet if xlsx
//smart mapping from header file


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
