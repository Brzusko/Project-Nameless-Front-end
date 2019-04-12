
<template>
  <div id="panel">
    <app-header></app-header>
    <div class="logo">
      <img src="./../welcome/front-logo.png">
    </div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <app-social/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './../play/Header.vue'
import Footer from './../shared/Footer.vue'
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import Social from './../blog/Social.vue'
export default {
  name: '',
  data () {
    return {
      articleData: []
    }
  },
  components:{
    appSocial:Social,
    appFooter: Footer,
    appHeader: Header
  },
  computed:{
    ...mapGetters([
      'getPanelState'
    ])
  },
  methods:{
    ...mapActions([
      'setPanelState'
    ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#panel{width: 100%; height: 100%;background: url('./../welcome/section-1.png'); padding-top: 150px; background-size: cover; background-repeat: no-repeat;}
.logo{max-width: 250px; margin: 0 auto;}
.logo img{width: 100%; height: 100%;}
.forms {margin:0 auto;}

.slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateX(0);
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
