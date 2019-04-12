<template>
  <div id="header" :class="{fullWidth: !getActiveState}">
    <a><img src="./exit.svg"/></a>
    <h1>PN</h1>
  </div>
</template>

<script>

import SideBar from './Menu.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      maxWidth: ''
    }
  },
  components: {
    appSide: SideBar
  },
  computed: {
    ...mapGetters([
      'getActiveState'
    ]),
  },
}
</script>

<style scoped>
#header{height: 50px; background: white; width: auto; transition: 0.5s all; position: relative; border-bottom: 2px solid #d7d7d7;}
#header h1{padding:0; position: absolute; margin: 0; right:50%; top:50%; transform: translate(50%,-50%);}
#header img{max-height: 30px; position: absolute; top:50%; transform: translateY(-50%); left:10px;}
a{cursor: pointer;}
.fullWidth{width:100% !important;}

</style>
