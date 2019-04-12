<template>
  <div style="position: fixed; top:0;width: 100%; z-index:1;">
    <div class="bluro">
    </div>
    <div id="header" ref="menu" :style="setStyle">
      <div class="wrapper">
        <div id="logo">
          <<router-link :to="{name: 'WelcomePage'}"><img src=".././welcome/front-logo.png" alt="logo"></router-link>
        </div>
        <div id="content">
          <ul :style="setListStyle">
            <div>
              <router-link :to="{ name: 'WelcomePage'}" tag="li" active-class="active" exact>HOME</router-link>
              <router-link v-for="n in links" :to="{ name: n.link}" tag="li" active-class="active">{{n.name}}</router-link>
            </div>
          </ul>
          <div class="col" @click="setMenuSize(windowWidth,windowHeight)">
            <i class="fa fa-bars fa-3x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import _ from 'lodash'

export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navHeight: 0,
      fontHeight: 0,
      links: [
        {link:'Blog', name: 'BLOG', isActive: false},
        {link:'Native', name: 'PROJECTS', isActive: false},
        //{link:'', name: 'DASHBOARD', isActive: false},
        {link:'Login', name: 'JOIN US', isActive: false}
      ],
      show:false,
      windowWidth: 0,
      windowHeight: 0,
      canShow: false,
      menuWidth: 0,
      menuHeight: 0,
      defaultWidth: 0,
      defaultHeight: 0,
      display: 'none',
      opacity: 0.0,
      discord: {}
    }
  },
  computed: {
    setStyle: function(){
      if(this.canShow === true)
      {
        return {
          width: this.menuWidth + 'px',
          height: this.menuHeight + 'px'
        }
      }
    },
    setListStyle: function(){
      if(this.canShow === true)
      {
        return {
          display: this.display,
          opacity: this.opacity,
          transition: '1s all'
        }
      }
    }
  },
  methods: {
    getSize: function(){
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.defaultWidth = window.innerWidth;
      this.menuWidth = this.windowWidth;
    },
    resizeHandle: _.throttle(function(){
      this.getSize();
      if(this.windowWidth <= 955)
      {
        this.canShow = true;
      } else {
        this.canShow = false;
      }
    },200),
    resizeMenu: function(){

    },
    getDefaultMenuSize: function(){
      this.menuWidth = this.$refs.menu.offsetWidth;
      this.menuHeight = this.$refs.menu.offsetHeight;
    },
    setMenuSize: function(width,height){

      if(this.show == false)
      {
        this.menuWidth = width;
        this.menuHeight = height;
        this.show = true;
        this.display = 'block'
        setTimeout(()=>{
          this.opacity = 1.0;
        },550)

      } else {
        this.opacity = 0.0;
        setTimeout(()=>{
          this.show = false;
          this.menuWidth = this.defaultWidth;
          this.menuHeight = this.defaultHeight;
          this.display = 'none'
        },550)
      }
    },
  },
  created(){

  },
  mounted(){
    this.getSize();
    if(this.windowWidth <= 955)
    {
      this.canShow = true;
      this.menuWidth = this.$refs.menu.offsetWidth;
      this.defaultWidth = this.windowWidth;
    }
    this.menuHeight = 62;
    this.defaultHeight = 62;
    window.addEventListener('resize', this.resizeHandle);
    // setInterval(()=>{console.log({
    //   menuWidth: this.$refs.menu.offsetWidth,
    //   menuHeight: this.$refs.menu.offsetHeight
    // })},901);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{ padding: 1px; z-index: 2; padding-left: 2%; padding-top: 5px; padding-bottom: 5px; border-bottom: 2px solid black; transition: all 0.5s;}
#logo img{max-width: 60px; cursor: pointer; z-index: 2;}
#content ul{color:white; padding: 0; margin: 0; text-align: center; position: absolute; right: 0; top:50%; transform: translate(-10%,-50%); }
#content ul li{display: inline-block; font-size:20px; height: 100%; padding-right: 20px; padding-left: 20px; margin-right: 75px; transition: all 0.3s; cursor: pointer; padding-bottom: 15px;
padding-top: 15px;}
#content ul li:hover{border-bottom:2px solid white;}
#content ul li:last-child{margin-right: 0px;}
.bluro{position: absolute; width: 100%; height: 100%; z-index: -1; background: rgba(0,0,0,0.7);}
.col{position: absolute;; top:10px; left:93%; transition: all 0.5s; cursor:pointer; z-index: 2; display: none}
.col svg{color:white;}
.pink{color:#fff; background: #000;}
.active{border-bottom:2px solid white;}
@media only screen and (max-width: 955px) {
#header {background: rgba(0,0,0,1.0); border-bottom: 2px white solid;}
#content {width: 100%;}
#content ul{color:white; padding: 0; margin: 0; text-align: center; position: relative; bottom:-100px; margin:0 auto;margin-bottom: 10px; padding-left: 15%; margin-top: 30px; display: none;}
#content ul li{display:block; font-size:20px; transition: all 0.3s; cursor: pointer; margin: 0; padding-right: 0px; padding-left: 0px; padding-bottom: 10px; padding-top: 10px;
  border-top: 2px solid white; transition: all 0.5s;
}
#content ul li:hover{border-bottom:0px solid white;}
#content ul li:last-child{ border-bottom: 2px solid white;}
#content ul li:last-child{margin-right: 0px;}
#content ul li:last-child:hover{border-bottom:2px solid white;}

#logo img{max-width: 50px;}
.col{position: absolute; right:0; top:0; transform: translate(-130%, 15%);transition: all 0.5s; cursor:pointer; z-index: 2; display: block;}
.col svg{padding:10px; color:white; transition: all 0.5s;}
.col:hover svg{background: white; color:black;}
.col:hover.active svg{background: white; color:black;}
}
</style>
