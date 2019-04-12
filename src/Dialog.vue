<template>
  <div class="outerContent">
    <div class="innerContent">
      <img src="">
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props:{
    open:{
      type: String,
      default: 'cwel'
    }
  }
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outerContent{position: fixed; z-index: 1; height: 100%; width: 100%; overflow: auto; background-color: rgba(0,0,0,0.5)}
.innerContent{background-color: white; padding: 100px; margin:auto; width: 60px; height: 100px;}
</style>
