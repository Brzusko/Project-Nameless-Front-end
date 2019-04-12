<template>
  <div id="dash" >
    <div class="wrapper">
      <app-side/>
      <div id="contentx" :class="{fullWidth: !getActiveState}">
        <app-header/>
        <div class="router-view">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from './Menu.vue'
import Header from './Header.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  components: {
    appSide: SideBar,
    appHeader: Header
  },
  computed: {
    ...mapGetters([
      'getDisplay',
      'getActiveState'
    ])
  },
  methods: {
    ...mapActions([
      'setDisplay'
    ])
  },
  beforeRouteEnter (to,from,next){
    next(vm=>{
      vm.setDisplay(false);
    })
  },
  beforeRouteLeave (to,from,next){
    next(vm=>{
      vm.setDisplay(true);
    })
  }
}
</script>

<style>
*{font-family: 'Open Sans', sans-serif;}
#dash{
height: 100%;
width: 100%;
background: #f5f7f8;
position: absolute;
}
.wrapper{
  display:flex;
  height: 100%;
  width: 100%;
}
.fullWidth{width:100% !important;}
#contentx{
  width: 100%;
  height: 100%;
}
.router-view{margin:2.5%; border: 1px solid #d7d7d7; background: white;}
@media only screen and (max-width: 797px)
{
  #contentx{width: 75%;}
}
@media only screen and (max-width: 611px)
{
  #contentx{width: 70%;}
}
@media only screen and (max-width: 519px)
{
  #contentx{width: 60%;}
}
@media only screen and (max-width: 417px)
{
  #contentx{width: 50%;}
}

</style>
