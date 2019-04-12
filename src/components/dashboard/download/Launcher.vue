<template>
  <div class="launcher">
    <div class="container-fluid margins">
      <div class="row">
        <div class="header" style="margin-bottom:50px;">
          <h2>Launcher Download</h2>
        </div>
        <div class="row" >
          <div :class="returnClass(index)" v-for="(download,index) in downloadData">
            <div class="col-xs-12 text-center back">
              <i :class="returnIcon(download.platform)"></i>
              <div><h3>Version {{download.version}}</h3></div>
              <div><h3>Arch {{download.type}}</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'app',
  data(){
    return{
      downloadData:[
        {platform: 'Windows',type:'32x',version:'0.1', downloadLink: ''},
        {platform: 'Windows',type:'64x',version:'0.1', downloadLink: ''},
        {platform: 'Mac',type:'64x',version:'0.1', downloadLink: ''}
      ],
      platforms:[
        {platform:'Windows',icon: "fab fa-windows fa-7x"},
        {platform:'Mac',icon: "fab fa-apple fa-7x"},
        {platform:'Linux',icon: "fab fa-linux fa-7x"}
      ]
    }
  },
  methods:{
    returnIcon: function(value){
      for(let i = 0; i<this.platforms.length;i++)
      {
        if(value == this.platforms[i].platform)
        {
          return this.platforms[i].icon
          break;
        }

        if(i == (this.platforms.length -1)){
          console.log('Didnt found that platform')
          break;
        }
      }
    },
    returnClass: function(itr){
      if(this.downloadData.length % 2 == 0)
      {
        return 'col-xs-12 col-sm-6'
      }
      else {
        if((this.downloadData.length - 1) == itr)
        {
          return 'col-xs-12 col-sm-6 col-sm-offset-3'
        }
        else{
          return 'col-xs-12 col-sm-6'
        }
      }
    }
  },
  mounted(){
    console.log(this.returnClass(2));
  }
}
</script>


<style scoped>
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
h2 {
    overflow: hidden;
}

h2:after {
    content:"";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid black;
}
.container-fluid{margin: 0; padding: 0;}
.back{border:1px solid black; background:black; padding: 10px;  margin-right: 100px; margin-bottom:40px; color:white; position: relative; cursor: pointer;}
</style>
