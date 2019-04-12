<template>
  <div id="slider">
    <div class="dots">
      <ul>
        <div class="dot" v-for="val in sliders" :class="{active: val.active}" @click="applyActive(val.id)"></div>
      </ul>
    </div>
    <div class="arrow left" @click="leftArrow">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="arrow right" @click="rightArrow">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="content">
      <div :style="getStyle(val.id)" v-for="val in sliders" class="bloor">
      </div>
        <div class="text" v-for="val in sliders"><h1 v-if="val.active">{{val.text}}</h1></div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: '',
  props:['time'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sliders: [
        {img: 'https://i.imgur.com/9g1cJoF.png', text: 'PROJENCT-NAMLESS NATIVE',opacity: 1.0,id:0,active: true},

      ],
      lastSliderId: 2,
      currentSliderId: 0,
      canDoIt: true,
      animCan: true
    }
  },
  computed: {
    getStyle: function(){
      var vm = this;
      return function(itr){
        return{
          background: `url("${this.sliders[itr].img}")`,
          'background-size': 'cover',
          opacity: this.sliders[itr].opacity,
          position: 'absolute',
          height: '100%',
          width: '100%'
        }
      }
    }
  },
  methods: {
    sliderInit: function(){
      setInterval(()=>{
        // if(this.canDoIt == true)
        // {
        //   if(this.currentSliderId >=0 && this.currentSliderId <= 1)
        //   {
        //     this.currentSliderId++;
        //     this.lastSliderId++
        //     if(this.lastSliderId >= 2)
        //     {
        //       this.lastSliderId = 0;
        //     }
        //   }
        //   else{
        //     this.currentSliderId = 0;
        //     this.lastSliderId = 2;
        //   }
        //   this.animationFade(this.lastSliderId,this.currentSliderId);
        //   this.setActive(this.currentSliderId);
        // }
        // else {
        //   this.canDoIt = true;
        // }
        //
        // this.animationFade(2,1);
      },this.time);
    },
    animationFade: function(last,current){
      const anim = setInterval(()=>{
        if(this.animCan = true)
        {
          this.animCan = false;
          this.sliders[last].opacity -= 0.1;
          this.sliders[current].opacity += 0.1;

          if(this.sliders[current].opacity >= 1.0)
          {
            this.animCan = true;
            clearInterval(anim);
          }
        }
      },25);
    },
    setActive: function(curr){
      for(let i = 0; i < this.sliders.length;i++)
      {
        if(i === curr)
        {
          this.sliders[i].active = true;
        }
        else{
          this.sliders[i].active = false;
        }
      }
    },
    leftArrow: function(){
      if(this.animCan == true)
      {
        if(this.currentSliderId == 0)
        {
          this.lastSliderId = this.currentSliderId;
          this.currentSliderId = this.sliders.length - 1;
        }
        else
        {
          this.lastSliderId = this.currentSliderId;
          this.currentSliderId--
        }
        this.animationFade(this.lastSliderId,this.currentSliderId);
        this.setActive(this.currentSliderId);
        this.canDoIt = false;
      }
    },
    rightArrow: function(){
      if(this.animCan == true)
      {
        if(this.currentSliderId == this.sliders.length - 1)
        {
          this.lastSliderId = this.currentSliderId;
          this.currentSliderId = 0;
        }
        else
        {
          this.lastSliderId = this.currentSliderId;
          this.currentSliderId++
        }
        this.animationFade(this.lastSliderId,this.currentSliderId);
        this.setActive(this.currentSliderId);
        this.canDoIt = false;
      }
    },
    applyActive: function(curr){
      this.lastSliderId = this.currentSliderId
      this.currentSliderId = curr;
      this.animationFade(this.lastSliderId,this.currentSliderId);
      this.setActive(this.currentSliderId);
    }
  },
  created(){
    this.sliderInit();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slider {position: relative; min-height: 300px; width: 100%; background: gray;}
.dots{position: absolute; left: 50%; transform: translate(-50%); bottom: 0; z-index: 1;}
ul{padding: 0; margin: 0;}
.dot{display: inline-flex; font-size:100px; cursor: pointer; color:white; transition: all 0.5s; height: 30px; width: 30px; border:3px solid white; border-radius: 50%; margin:15px; margin-bottom: 30%;}
.arrow svg {font-size:100px; color:white; transition: all 0.5s;}
.arrow {position: absolute; transform: translateY(-50%); top:50%; cursor: pointer; z-index: 1; }
.arrow svg:hover {font-size: 130px;}
.left{left:0%; padding-left: 50px;}
.right{right:0%; padding-right: 50px;}
.content{max-height: 700px; width: 100%; height: 700px; position: relative;}
.text{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); cursor: pointer;}
h1{ z-index: 1;}
.active{height: 40px; width: 40px; background: white;}
.bloor{filter: blur(1px);}

@media only screen and (max-width: 1170px) {

}
@media only screen and (max-width: 970px) {
  #slider {position: relative; min-height: 300px; width: 100%; background: gray; transition: 1s all;}
  .dots{position: absolute; left: 50%; transform: translate(-50%); bottom: 0; z-index: 1;}
  ul{padding: 0; margin: 0;}
  .dot{display: inline-flex; font-size:100px; cursor: pointer; color:white; transition: all 0.5s; height: 22px; width: 22px; border:3px solid white; border-radius: 50%; margin:15px; margin-bottom: 30%;}
  .arrow svg {font-size:80px; color:white; transition: all 0.5s;}
  .arrow {position: absolute; transform: translateY(-50%); top:50%; cursor: pointer; z-index: 1; }
  .arrow svg:hover {font-size: 100px;}
  .left{left:0%; padding-left: 50px;}
  .right{right:0%; padding-right: 50px;}
  .content{max-height: 700px; width: 100%; height: 532px; position: relative;}
  .text{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); cursor: pointer;}
  h1{ z-index: 1; font-size:2.2em;}
  .active{height: 30px; width: 30px; background: white;}
}
@media only screen and (max-width: 790px) {
  #slider {position: relative; min-height: 300px; width: 100%; background: gray; transition: 1s all;}
  .dots{position: absolute; left: 50%; transform: translate(-50%); bottom: 0; z-index: 1;}
  ul{padding: 0; margin: 0;}
  .dot{display: inline-flex; font-size:80px; cursor: pointer; color:white; transition: all 0.5s; height: 18px; width: 18px; border:3px solid white; border-radius: 50%; margin:15px; margin-bottom: 30%;}
  .arrow svg {font-size:70px; color:white; transition: all 0.5s;}
  .arrow {position: absolute; transform: translateY(-50%); top:50%; cursor: pointer; z-index: 1; }
  .arrow svg:hover {font-size: 80px;}
  .left{left:0%; padding-left: 50px;}
  .right{right:0%; padding-right: 50px;}
  .content{max-height: 700px; width: 100%; height: 532px; position: relative;}
  .text{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); cursor: pointer;}
  h1{ z-index: 1; font-size:1.9em;}
  .active{height: 24px; width: 24px; background: white;}

}
@media only screen and (max-width: 658px) {
  #slider {position: relative; min-height: 300px; width: 100%; background: gray; transition: 1s all;}
  .dots{position: absolute; left: 50%; transform: translate(-50%); bottom: 0; z-index: 1;}
  ul{padding: 0; margin: 0;}
  .dot{display: inline-flex; font-size:80px; cursor: pointer; color:white; transition: all 0.5s; height: 12px; width: 12px; border:3px solid white; border-radius: 50%; margin:15px; margin-bottom: 30%;}
  .arrow svg {font-size:50px; color:white; transition: all 0.5s;}
  .arrow {position: absolute; transform: translateY(-50%); top:50%; cursor: pointer; z-index: 1; }
  .arrow svg:hover {font-size: 60px;}
  .left{left:0%; padding-left: 50px;}
  .right{right:0%; padding-right: 50px;}
  .content{max-height: 700px; width: 100%; height: 432px; position: relative;}
  .text{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); cursor: pointer;}
  h1{ z-index: 1; font-size:1.3em;}
  .active{height: 18px; width: 18px; background: white;}
}

@media only screen and (max-width: 460px) {
  #slider {position: relative; min-height: 232px; width: 100%; background: gray; transition: 1s all;}
  .dots{position: absolute; left: 50%; transform: translate(-50%); bottom: 0; z-index: 1;}
  ul{padding: 0; margin: 0;}
  .dot{display: inline-flex; font-size:80px; cursor: pointer; color:white; transition: all 0.5s; height: 8px; width: 8px; border:2px solid white; border-radius: 50%; margin:15px; margin-bottom: 30%;}
  .arrow svg {font-size:35px; color:white; transition: all 0.5s;}
  .arrow {position: absolute; transform: translateY(-50%); top:50%; cursor: pointer; z-index: 1; }
  .arrow svg:hover {font-size: 45px;}
  .left{left:0%; padding-left: 50px;}
  .right{right:0%; padding-right: 50px;}
  .content{max-height: 700px; width: 100%; height: 232px; position: relative;}
  .text{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); cursor: pointer;}
  h1{ z-index: 1; font-size:1.0em;}
  .active{height: 12px; width: 12px; background: white;}
}
</style>
