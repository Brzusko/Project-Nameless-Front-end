<template>
  <div id="blog">
        <app-header></app-header>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="600">
      <div class="napis">
        <h1>DEV BLOG</h1>
        <button>BACK TO HOME</button>
      </div>
    </app-parallax>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12" id="main-bg" style="padding:5%;">
          <div class="container-fluid">
            <div class="row news" v-for="n in blogsData">
              <div class="col-xs-12 col-sm-6 blog-item" style=" margin-right:8.2%;" :style="setBgStyle(n.imgPath)">
              </div>
              <div class="col-xs-12 col-sm-5  blog-item" style="border-top:1px solid black; border-bottom:1px solid black">
                <div class="content">
                  <div class="title">
                    {{n.title}}
                  </div>
                  <div class="made-by">
                    {{n.createdBy}} at 22.02.2002
                  </div>
                  <div class="desc">
                    {{n.content}}
                  </div>
                  <div class="tags">
                    TAGS:
                    <b>#cwel,#cwel2,#cwel3</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social" ref="social">
      <div class="join"><h1 ref="socialText" :style="setStyle">JOIN OUR SOCIALS ></h1></div>
      <div class="social-content">
        <ul>
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-youtube"></a></li>
          <li><a href="#" class="fa fa-twitch"></a></li>
          <li><a><img src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"></a></li>
        </ul>
        <img class="super" src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg">
      </div>
    </div>
      <app-footer/>
  </div>
</template>

<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
import Header from './../play/Header.vue'
import Footer from './../shared/Footer.vue'
import Parallax from './../shared/Parallax.vue'
import _ from 'lodash'

export default {
  name: '',
  data () {
    return {
      msg: '<h1>Welcome to Your Vue.js App</h1>',
      textSize: 0,
      socialSize:0,
      blogsData: {}
    }
  },
  methods: {
    resizeHandler: _.throttle(function(){
      this.getData();
    },200),
    getData: function(){
      this.textSize = this.$refs.socialText.clientWidth;
      this.socialSize = this.$refs.social.clientWidth;
    },
    calculatePadding: function(){
      return (5/100) * this.socialSize
    },
    fetchDataFromApi: function(){
      this.$http.get('http://127.0.0.1:8080/article').then((res)=>{
        this.blogsData = res.data
        console.log(this.blogsData.length);
      }).catch((e)=>console.log(e));
    }
  },
  components:{
    appParallax: Parallax,
    appFooter: Footer,
    appHeader: Header
  },
  mounted(){
    this.getData();
    window.addEventListener('resize',this.resizeHandler);
    this.fetchDataFromApi();
    console.log(this.getDisplay)
  },
  computed:{
    ...mapGetters([
      'getDisplay'
    ]),
    setStyle: function(){
      return{
        //paddingleft: this.calculatePadding() + 'px'
      }
    },
    setBgStyle: function(){
      var vm = this;
      return function(bg){
        return{
          background: `url("${bg}")`,
          backgroundSize: 'cover'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{padding: 0; margin: 0;}
.napis{position: absolute; right:50%; top:50%; transform: translate(50%,-50%); color:white; text-align: center;vertical-align: middle;}
.napis h1{font-size: 70px;}
.napis button{border:none;border-bottom:2px solid white; background: none; font-size: 30px; margin-top: 30px; padding:10px; cursor:pointer; transition: 0.2s all ease-in-out;}
.main-bg{background-color: gray;}
.blog-item {min-height: 300px}
.bg{background:url('https://i.imgur.com/dMC3pTQ.png'); background-size:cover;}
.title{font-size:33px; text-align: left;}
.content{padding-top: 20px; color:black;}
.made-by{margin-left: 2%; font-size:20px;}
.desc{margin-top: 20px;}
.tags{font-size:20px; margin-top:30px; margin-bottom: 10px; position: absolute; bottom:0;}
.news{margin-bottom: 55px; cursor: pointer;}
.social{width:100%; min-height: 250px;background: #363636; position: relative; }
.social ul {list-style: none;}
.social ul li {display: inline-block; }
.social ul li:last-child{display: none;}
.social-content{position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
.fa{font-size: 22px; width: 40px; border-radius: 50%; padding: 5px; color:white; padding-left: 30%;}
.super{width: 130px; height: 70px;cursor: pointer; margin: 0 auto;}
.join{color:white; padding-left: 10%;}
.join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); transition: 1s all;}
a{text-decoration: none}

@media only screen and (max-width: 870px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); font-size:2.0em;}
}

@media only screen and (max-width: 680px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); font-size:1.7em;}
  .social-content{position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  .fa{font-size: 22px; width: 40px; border-radius: 50%; padding: 5px; color:white; padding-left: 30%;}
  .super{width: 110px; height: 50px;cursor: pointer;}
}

@media only screen and (max-width: 600px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; right: 50%; top:35%; transform: translate(50%,-50%); font-size:1.7em;}
  .social-content{position: absolute; right: 50%; top:60%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  .fa{font-size: 22px; width: 40px; border-radius: 50%; padding: 5px; color:white; padding-left: 30%;}

  .super{width: 110px; height: 50px;cursor: pointer; display: none;}
  .social ul li:last-child{display: inline-block; width: 110px;}
}
@media only screen and (max-width: 516px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; right: 50%; top:35%; transform: translate(50%,-50%); font-size:1.5em;}
  .social-content{position: absolute; right: 50%; top:60%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  .fa{font-size: 22px; width: 40px; border-radius: 50%; padding: 5px; color:white; padding-left: 30%; }

  .super{width: 90px; height: 50px;cursor: pointer; display: block;}
  .social ul li:last-child{display: none; width: 110px; width: 110px; height: 15px;}
}
</style>
