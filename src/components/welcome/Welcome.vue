<template>
  <div class="container-fluid" id="welcome">
    <app-header/>
    <section id="top-section" class="shadow">
      <div class="container-fluid">
        <div class="top-background shadow-top" >
          <div class="register-group">
            <div class="form-img">
              <img src="./front-logo.png" class="img-responsive" id="logo">
              <!-- <h2 style="text-align:center; color:white;">Main content of site is still in development. Mainly features of this platform will be implemented in few days.</h2> -->
            </div>
            <!-- <app-register></app-register> -->
          </div>
          <div class="social-list">
            <ul>
              <li style="color:white;"><a :href="discord.instant_invite"><img src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"></a></li>
              <li style="color:white;" v-for="icon in iconList"><a><i :class="setIcon(icon)"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="about-section">
      <div class="container-fluid">
        <div class="white-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12" id="white-section-title">
                <h1>WHAT IS PROJECT-NAMELESS?</h1>
                <hr></hr>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-md-8 col-md-offset-1">

              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
              </div>
              <div class="col-xs-12 col-sm-4">
              </div>
              <div class="col-xs-12 col-sm-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section id="members-section" class="shadow">
      <div class="container-fluid">
        <div class="members-backround">
          <div class="row">
            <div class="col-xs-4 col-xs-offset-4 section-title">
              <h1 class="h1shadow">NAMELESS MEMBERS</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="member-content">
                <div class="member-avatar">
                </div>
                <h2>{{adminsData[0].user}}</h2>
                <h4>{{developers[0].jobs}}</h4>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="member-content">
                <div class="member-avatar" style="background:url('http://img2.wikia.nocookie.net/__cb20140812125252/fairy-tail/fr/images/8/82/Natsu-Fairy-Tail-Smile-HD.jpg'); background-size:cover;">
                </div>
                <h2>{{developers[1].nick }}</h2>
                <h4>{{developers[1].jobs}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="wrapper">
          <h1 style="margin-top:30px;">OUR PROJECTS</h1>
          <div class="slider">
            <app-slider time="4000" class="h1shadow"></app-slider>
          </div>
        </div>
      </div>
    </section>
    <app-social/>
    <app-footer/>
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer.vue'
import Slider from '@/components/play/Slider.vue'
import Header from '@/components/play/Header.vue'
import Parallax from './../shared/Parallax.vue'
import Social from './../blog/Social.vue'

export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iconList:[
        'fa-youtube',
        'fa-twitch'
      ],
      developers:[
        {nick:'Spray', rank:'Dev', jobs: 'Founder, webmaster, UI designer and c++ programmer.'},
        {nick:'Canem', rank:'Dev', jobs: 'Network & game engine programmer.'}
      ],
      discord: '',
      adminsData: [{user:''}]
    }
  },
  components: {
    appFooter: Footer,
    appSlider: Slider,
    appHeader: Header,
    appParallax: Parallax,
    appSocial: Social
  },
  methods:{
    setIcon: function(icon)
    {
      return 'fab ' + icon;
    },
    getAdmins: function(){
      this.$http.get('http://localhost:8080/user/admins').then((res)=>{
      var data = res.data;
      for(let i = 0; i < res.data.length; i++)
      {
        this.adminsData = [];
        this.adminsData.push(data[i]);
      }
      }).catch((err)=>{
        console.log(err);
      })
    },
    formatRank: function(itr){
      switch(this.adminsData.groupId)
      {
        default:
          return 'DEV'
      }
    }
  },
  mounted(){
    this.getAdmins();
    this.$http.get('https://discordapp.com/api/guilds/386626373214535701/widget.json').then((res)=>{
      this.discord = res.body;
    }).catch((error)=> console.log(error));

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.napis{position: absolute; right:50%; top:50%; transform: translate(50%,-50%);}
.napis h1{background: none; color: white;}
.top-section{border-bottom: 1px solid white;}

hr {
  border-top: 2px solid black;
  margin-top: 20px;
}
*{
  margin: 0;
  padding: 0;
}
#welcome{
  font-family: 'Shadows Into Light';
}
.section-img-background{
  height: auto; width: 100%;
}
.container-fluid{padding:0; margin:0;}
.top-background{background: url('./section-1.png'); background-size: cover; height: auto; width:100%;}
.white-section{background: white; width: auto; min-height: 60vh;}
.members-backround{background: url('./section-3.png'); min-height: 70vh; background-size: cover; width: auto;}
.shadow{-webkit-box-shadow: 0px -17px 17px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -17px 17px -2px rgba(0,0,0,0.75);
box-shadow: 0px -17px 17px -2px rgba(0,0,0,0.75);}
.shadow-top{-webkit-box-shadow: 0px 17px 17px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 17px 17px -2px rgba(0,0,0,0.75);
box-shadow: 0px 17px 17px -2px rgba(0,0,0,0.75);}
h1{text-align: center; background:white; padding-top: 20px; padding-bottom: 20px; padding-left: -10px;
font-size: 62px;}
.section-title{margin-left:33.33333333%; margin-top:3%;}
.member-avatar{border-radius: 50%; background:url('./avatar.png'); min-width: 225px; min-height: 225px; max-width: 225px; max-height: 225px;
margin: 0 auto; background-size: cover; border:2px solid black;
}
.member-content{background: white; margin-left: 20%;  padding-top: 45px; margin-bottom: 100px;
margin-right: 20%; margin-top: 10%; text-align: center; min-height: 450px;
-webkit-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75); transition: all 1s linear}

.white-section{text-align: center; padding-left: 10%; padding-right: 10%;}
#white-section-title h1{font-size: 62px; margin-top:50px;}
.slider{margin:5%; border:1px solid black; border-bottom: 3px solid black;}

.member-content h2 {font-size: 42px; margin-top: 50px;}
.member-content h4 {margin-top:20px; font-size:30px; padding-bottom: 30px;}
.whole-div{background: black; position: absolute; top:0;left:0;}
.wrapper h1{-webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);}
.register-group{}
#logo{max-width:400px; margin:0 auto; padding-top:150px;}
ul{list-style: none; display: inline-block; }
li{display: inline-block;
float: left;
padding: 2px 5px;
border: 1px solid black;
margin-right: 30px;
cursor: pointer;
}
li:last-child{margin: none;}
li svg{font-size:37px; color:white;}
li svg:hover{font-size:37px; color:white; cursor: default; color:#828282;}
li img{height: 37px;}
li:first-child img{transition: all 1s;}
li:first-child:hover img{height: 50px;}
.social-list{padding-bottom:50px; margin: 0 auto; text-align: center; padding-top:200px;}
.h1shadow{-webkit-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);}
@media only screen and (max-width: 1170px) {
  #logo{width:350px; max-width:350px;}
  .member-content h4 {font-size:24px;}
}
@media only screen and (max-width: 970px) {
  #logo{width:350px; max-width:350px;}
  h1{text-align: center; background:white; padding-top: 20px; padding-bottom: 20px;
  font-size: 3.0em;}
  .member-content h4 {font-size:24px;}
}
@media only screen and (max-width: 790px) {
  h1{text-align: center; background:white; padding-top: 20px; padding-bottom: 20px;
  font-size: 2.0em;}
  .section-title{margin-left:33.33333333%; margin-top:3%;}
  .member-avatar{border-radius: 50%; background:url('./avatar.png'); min-width: 200px; min-height: 200px; max-width: 200px; max-height: 200px;
  margin: 0 auto; background-size: cover; border:2px solid black;

  }
  .member-content{background: white; margin-left: 20%;  padding-top: 45px; margin-bottom: 100px;
  margin-right: 20%; margin-top: 10%; text-align: center; min-height: 400px;
  -webkit-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
  box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);}
  .member-content h2 {font-size: 2.5em; margin-top: 20px;}
  #logo{width:200px; max-width:200px;}
  .form-img h2{font-size: 1.3em; margin-bottom: 30px;}
}
@media only screen and (max-width: 430px) {
  h1{text-align: center; background:white; padding-top: 20px; padding-bottom: 20px;
  font-size: 2.0em;}
  .section-title{margin-left:33.33333333%; margin-top:3%;}
  .member-avatar{border-radius: 50%; background:url('./avatar.png'); min-width: 130px; min-height: 130px; max-width: 130px; max-height: 130px;
  margin: 0 auto; background-size: cover; border:2px solid black;
  }
  .member-content{background: white; margin-left: 20%;  padding-top: 45px; margin-bottom: 100px;
  margin-right: 20%; margin-top: 10%; text-align: center; min-height: 320px;
  -webkit-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);
  box-shadow: 19px 18px 21px -8px rgba(0,0,0,0.75);}
  .member-content h2 {font-size: 1.75em; margin-top: 20px;}
  #logo{width:150px; max-width: 150px;}
}


</style>
