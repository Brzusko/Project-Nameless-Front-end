<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>

import Header from './components/play/Header.vue'
import Footer from './components/shared/Footer.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {
    ...mapGetters([
      'getDisplay'
    ])
  },
  mounted(){
    console.log(this.getDisplay)
  }
}
</script>

<style>
*{
  font-family: 'Shadows Into Light';
}
.row{margin: 0;}
app-footer{}
</style>
