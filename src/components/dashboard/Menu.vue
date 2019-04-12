<template>
  <div id="sidebar" ref="side" :style="setWidth">
    <div id="content">
      <div class="header">
        <div class="logo" :style="setMain" style="padding:0; margin-bottom:30px;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMZ61_YBq_vUIGkG7MHRA9cSztvgRAMIdGu-i9b0RFb4zLDa_g" style="padding:0;"/>
          <p style="color:white; text-align:center; margin-top:10%; font-size:19px;">DEV SPRAY</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <li class="cwel" :style="setStyle">
            <div class="section" :class="{active: menuList[0].isActive}" ref="section" @click="setAnimate(0)">
              <i :class="menuList[0].icon"></i>
              <span :style="setMain" style="padding-left:10px;">{{menuList[0].desc}}</span>
              <div :style="setMain">

                <div class="arrow" :style="setTransform">
                  <i class="fas fa-angle-up"></i>
                </div>

              </div>

            </div>
            <div :style="">
              <ul class="group-item" :style="setOpacity">
                <li v-for="item in menuList[0].items" :style="setPadding2"><i :class="item.icon"></i><a :style="opa">{{item.desc}}</a></li>
              </ul>
            </div>
          </li>
          <li class="cwel" :style="setStyle2">
            <div class="section" :class="{active: menuList[1].isActive}" ref="section" @click="setAnimate(1)">
              <i :class="menuList[1].icon"></i>
              <span :style="setMain" style="padding-left:10px;">{{menuList[1].desc}}</span>
              <div :style="setMain">

                <div class="arrow" :style="setTransform2">
                  <i class="fas fa-angle-up"></i>
                </div>

              </div>

            </div>
            <div :style="">
              <ul class="group-item" :style="setOpacity2">
                <li v-for="item in menuList[1].items" :style="setPadding"><i :class="item.icon"></i><a :style="opa">{{item.desc}}</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="button" @click="switchActive" >
          <i class="fas fa-angle-left fa-lg" :style="rotate"></i>
          <div :style="setMain" style="padding-left:10px;">
            HIDE MENU
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {

  data(){
    return{
      menuList: [
        {name: '', desc: 'GENERAL', icon:'far fa-keyboard', items: [
          {name: '', desc:'PROFILE', icon: 'fas fa-user'},
          {name: '', desc:'DOWNLOAD', icon: 'fas fa-download'},
          {name: '', desc:'SERVER-LIST', icon: 'fas fa-server'},
        ],opacity:0.0,display:'none',isActive:false,height:0,trans:0,can:true,max:207,fullWidth:0},
        {name: '', desc: 'ADMIN', icon:'fas fa-user-secret', items:[
          {name: '', desc:'BLOG', icon: 'fas fa-sitemap'},
          {name: '', desc:'USERS', icon: 'fas fa-users'},
          {name: '', desc:'PROJECTS', icon: 'fas fa-desktop'},
          {name: '', desc:'SERVERS', icon: 'fas fa-server'},
        ],opacity:0.0,display:'none',isActive:false,height:0,trans:0,can:true,max:254,fullWidth:0}
      ],
      mainOpacity: 1.0,
      mainDisplay: 'block',
      maxWidth: 0,
      width: 0,
      isActive: true,
      padding: '30px',
      paddingTop: '',
      paddingBot: '',
      padding2: '30px',
      paddingTop2: '',
      paddingBot2: '',
      display: 'inline',
      transform: '0deg'
    }
  },
  computed:{
    setStyle:function(){
      return{
        height: this.menuList[0].height + 'px'
      }
    },
    setStyle2:function(){
      return{
        height: this.menuList[1].height + 'px'
      }
    },
    setTransform:function(){
      return{
        transform: `translate(-140%,-50%) rotate(${this.menuList[0].trans}deg) `
      }
    },
    setTransform2:function(){
      return{
        transform: `translate(-140%,-50%) rotate(${this.menuList[1].trans}deg) `
      }
    },
    setOpacity: function(){
      return{
        opacity: this.menuList[0].opacity,
        display: this.menuList[0].display
      }
    },
    setOpacity2: function(){
      return{
        opacity: this.menuList[1].opacity,
        display: this.menuList[1].display
      }
    },
    setMain: function(){
      return{
        opacity: this.mainOpacity,
        display: this.mainDisplay,
        transition: '0.2s all',

      }
    },
    setWidth: function(){
      return{
        width: this.width
      }
    },
    setPadding: function(){
      return{
        paddingLeft: this.padding,
        paddingTop: this.paddingTop,
        paddingBottom: this.paddingBot,
        transition: '0.2s all',
      }
    },
    setPadding2: function(){
      return{
        paddingLeft: this.padding2,
        paddingTop: this.paddingTop2,
        paddingBottom: this.paddingBot2,
        transition: '0.2s all',
      }
    },
    opa: function(){
      return{
        opacity: this.mainOpacity
      }
    },
    rotate: function(){
      return{
        transform: `rotate(${this.transform})`
      }
    }
  },
  methods:{
    ...mapMutations([
      'setActive'
    ]),
    setAnimate: function(itr){
      if(this.menuList[itr].can === true)
      {
        if(this.menuList[itr].isActive === false){
          this.can = false;
          this.menuList[itr].height = this.menuList[itr].max;
          this.menuList[itr].trans = 180;
          this.menuList[itr].isActive = true;
          this.menuList[itr].display = 'block';
          setTimeout(()=>{
            this.menuList[itr].opacity = 1.0;
            this.can = true;
          },350)

        }else{
          this.can = false;
          this.menuList[itr].opacity = 0.0
          this.menuList[itr].display = 'block';
          setTimeout(()=>{
            this.menuList[itr].display = 'none';
            this.menuList[itr].height = this.$refs.section.clientHeight;
            this.menuList[itr].trans = 0;
            this.menuList[itr].isActive = false;
            this.can = true;
          },350)
        }
      }
    },
    setFullWidth: _.throttle(function(){
      if(window.innerWidth > 797)
      {
        this.maxWidth = '15%';
      }
      else if(window.innerWidth > 611 && window.innerWidth <= 797)
      {
        this.maxWidth = '25%';
      }
      else if(window.innerWidth > 519 && window.innerWidth <= 611)
      {
        this.maxWidth = '30%';
      }
      else if(window.innerWidth > 417 && window.innerWidth <= 519)
      {
        this.maxWidth = '40%';
      }
      else if(window.innerWidth <= 417)
      {
        this.maxWidth = '50%'
      }
      this.toogleWidth();
      console.log(this.maxWidth);
      console.log(window.innerWidth )
    },50),
    toogleWidth: function(){
      if(this.isActive == false)
      {
        this.width = '50px'

      }
      else{
        this.width = this.maxWidth;

      }
    },
    switchActive: function(){
      if(this.isActive == true) {
        this.isActive = false;
        this.toogleWidth();
        this.mainOpacity = 0.0
        this.display = 'none'
        this.padding = '13px'
        this.paddingTop = '3px'
        this.paddingBot = '3px'
        this.padding2 = '16px'
        this.paddingTop2 = '3px'
        this.paddingBot2 = '3px'
        this.transform = '180deg'
        this.setActive(false);
      }
      else {
        this.isActive = true;
        this.toogleWidth();
        this.mainOpacity = 1.0
        this.display = 'block'
        this.padding = '30px'
        this.paddingTop = '15px'
        this.paddingBot = '15px'
        this.padding2 = '30px'
        this.paddingTop2 = '15px'
        this.paddingBot2 = '15px'
        this.transform = '180deg'
        this.setActive(true);
      }
    }
  },
  mounted(){
    for(let i = 0; i < this.menuList.length; i++)
    {
      this.menuList[i].height = this.$refs.section.clientHeight;
    }
    window.addEventListener('resize',this.setFullWidth);
    this.setFullWidth();
    this.width = this.maxWidth;
    console.log(this.$refs.section.attributes)
  }
}
</script>

<style scoped>
*{font-family: 'Open Sans', sans-serif;}
#sidebar{
  height: 100%;
  width: 15%;
  background: #1f2c33;
  top:0;
  left:0;
  transition: 0.5s all;
  border-right: 1px solid black;
  overflow: auto;
}
#content{
  position: relative;
}
.header{
  width: 100%;
  padding-top: 15px;
  background: #1f2c33;
  padding-bottom: 15px;
}
.header ul{
  margin: 0;
  padding: 0;
}
.logo{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  border:2px solid white;
}
.logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.section{
  padding:15px;
  display: -webkit-box;
  position: relative;
  cursor: pointer;
}
.section:hover{
  background: #192125;
}

.arrow{
  position: absolute;
  right: 0;
  top:50%;
  transform: translate(-140%,-50%) rotate(0deg) ;
  font-size: 20px;
  cursor: pointer;
  transition: all 1s;
}
.arrow:hover{
    transform: translate(-140%, -50%) rotate(180deg) ;
}
.list {
  font-size:14px;
}
.list li {
  color:white;
}

.list ul{
list-style: none;
padding-left: 0px;
}

.group-item {
font-size:12px;
}
.group-item li{
  padding:15px;
  padding-left: 30px;
  cursor:pointer;
}
.group-item li:last-child{
  margin-bottom: 15px;
}
.group-item a{
padding-left: 10px;
color:white;
text-decoration: none;
}
.cwel ul{ transition: 0.5s all;}
.cwel {border-bottom: 1px solid white; transition: 0.5s all;}
.button{
  color: white;
  padding: 15px;
  cursor: pointer;
  display: -webkit-inline-box;
}
.button i{
  font-size: 20px;
}
.dis{
  display: none;
}
.active{background: #192125;}

@media only screen and (max-width: 797px)
{
  #sidebar{width: 25%;}
}
@media only screen and (max-width: 611px)
{
  #sidebar{width: 30%;}
}
@media only screen and (max-width: 519px)
{
  #sidebar{width: 40%;}
}
@media only screen and (max-width: 417px)
{
  #sidebar{width: 50%;}
}
</style>
