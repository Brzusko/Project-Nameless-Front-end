<template>
  <div id="tickets">
    <div class="header">
      <h2>Send Ticket</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <div class="form-group">
              <label for="comment">Ticket's title</label>
              <input type="text" class="form-control" placeholder="Title of the topic"></input>
            </div>
            <div class="select">
              <label>Pick subject</label><br>
                <div v-for="sub in topic" @click="setActive(sub.id)" :class="{selected: sub.isActive}">{{sub.name}}</div>
            </div>
            <div class="form-group">
              <label for="comment">Ticket content. <a>Tickets supports Markdown formating.</a></label>
              <textarea class="form-control" rows="10" id="comment"></textarea>
            </div>
            <div><button class="btn btn-primary" style="margin-bottom:30px;">Send Ticket</button></div>
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
      topic: [
        {name:'Account',isActive:false,id:0},
        {name:'Website',isActive:false,id:1},
        {name:'Download',isActive:false,id:2},
        {name:'PN Native',isActive:false,id:3},
        {name:'PN Launcher',isActive:false,id:4},
        {name:'Discord',isActive:false,id:5},
        {name:'Offers',isActive:false,id:6},
      ]
    }
  },
  methods:{
    setActive: function(itr){
      if(this.topic[itr].isActive === true) this.topic[itr].isActive = false;
      else this.topic[itr].isActive = true;
    }
  }
}
</script>

<style scoped>
#tickets{margin-top:30px; margin-left: 3%; margin-right: 3%;}
h2 {
    overflow: hidden;
}
tr{cursor: pointer;}
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
ul{
  list-style: none;
  padding:0;
}
li{
  display: inline;
  margin-right: 15px;
  padding-left:15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
li:last-child{margin-right: 0;}
.select div{margin:5px; border:none; border:solid 1px black; transition: 0.2s all; display: inline-block; padding: 5px; cursor: pointer;}

.selected {color:white; background:black;}
</style>
