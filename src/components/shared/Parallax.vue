<template>
  <div id="parallax" :style="setStyle" ref="parallax">
    <slot></slot>
  </div>
</template>

<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: '',
  props: ['img','size'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scrollOffsets:{
        x: 0,
        y: 0
      },
      wart: 40,
      last: 0,
    }
  },
  methods: {
    setPos: function(offset){
      if(this.wart >= 10 && this.wart <=70)
      {
        this.wart -= offset;
      }
      else{
        if(this.wart >=71)
        {
          this.wart = 70;
        }
        else if(this.wart <=10)
        {
          this.wart = 10;
        }
      }

    },
    checkOffset: function(last,curr)
    {
      var sum = last - curr;
        if(sum >= 0)
        {
            return -0.4;
        }
        else
        {
            return 0.4;
        }
    },
  },
  computed:{
    setStyle: function(){
      return{
        background: `url("${this.img}")`,
        minHeight: this.size + 'px',
        //transform: `matrix(1, 0, 0, 1, 0, ${this.wart})`,
        backgroundPositionX: 'center',
        backgroundPositionY: `${this.wart}%`,
        backgroundRepeat: 'no-repeat',

        zIndex: '0'
      }
    }
  },
  mounted(){
    this.scrollOffsets.y = window.scrollY;
    this.last = this.scrollOffsets.y;
    window.addEventListener('scroll',()=>{

      this.last = this.scrollOffsets.y;
      this.scrollOffsets.y = window.scrollY;
      try{
        if(this.$refs.parallax.offsetTop === undefined)
        {
          return;
        }
        else {
          if(window.scrollY >= (this.$refs.parallax.offsetTop-((60/100)*this.$refs.parallax.offsetTop)))
          {
              this.setPos(this.checkOffset(this.last, this.scrollOffsets.y));
          }
        }
      }
      catch(err){

      }
      //console.log(window.scrollY)

    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #parallax{position: relative; margin-bottom: -50px; margin-top: -50px;} */
#parallax{position: relative;}

</style>
