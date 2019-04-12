<template>
  <div class="outerContent" v-if="open == false">
    <div class="innerContent">
      <div class="exit" @click="open = true">
        &times;
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props:{
    open:{
      type: Boolean,
      default: false
    }
  },
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
.outerContent{position: fixed; z-index: 1; height: 100%; width: 100%; top:0; left:0; overflow: auto; background-color: rgba(0,0,0,0.5); top:0; left:0;}
.innerContent{background-color: white; min-width: 10%; margin: 0 auto; width:70%; position: relative; top:50%; border: 2px solid black;}
.exit{font-size:30px; font-weight: bold; position: absolute; z-index: 2; left:95%; cursor:pointer;}
</style>
