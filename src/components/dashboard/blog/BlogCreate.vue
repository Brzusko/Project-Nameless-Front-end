<template>
  <div id="edit" :class="">
    <div class="editor">
      <div v-if="">
        <div class="img"><img src="./../../../assets/logo1.png"></div>
        <div style="text-align:center; margin-top:50px;">
          <label style="">Blog editor, that supports Markdown formatting.</label>
        </div>
        <div class="form">
          <form style="margin-bottom:32%;">
            <input type="text" placeholder="Title" v-model="blogData.title"/>
            <textarea class="form-control" rows="5" id="comment" placeholder="content" v-model="blogData.content"></textarea>
            <div class="text-center"><button @click="selectImage">SELECT BACKGROUND</button><button @click="preview">PREVIEW</button><button>SUBMIT</button></div>
            <input type="file" style="display:none;" ref="image" @change="changeHandler"/>
            <img :src="blogData.imgPath" class="img-responsive">
          </form>
        </div>
        <div class="exit" @click="backToList">&#9840;</div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data(){
    return{
      blogData: {_id: '', title: '', createdBy: '', imgPath: '', content: ''},
      params: this.$route.params,
      query: this.$route.query,
      isRendex: false,
      isEditor: false
    }
  },
  methods:{
    ...mapActions([
      'setBlogInfoData',
      'setFullBlogData',
      'wipeBlogInfo',
      'setEditorState',
      'wipeAllData',
      'setBackground',
      'setCreatorState'
    ]),
    selectImage: function(){
      this.$refs.image.click();
    },
    changeHandler: function(event){
      var file = event.target.files;
      this.setBackground(file);
      var fileReader = new FileReader();
      fileReader.addEventListener('load',()=>{
        this.blogData.imgPath = fileReader.result;
      });
      fileReader.readAsDataURL(file[0]);
    },
    backToList:function(){
      this.setEditorState(false);
      this.setCreatorState(false);
      this.wipeAllData();
      this.$router.push({name:'BlogList'});
    },
    fetchData:function(id){
      return new Promise((resvole,reject)=>{
        let blog;
        for(let i = 0; i<this.blogDatas.length; i++)
        {
          if(id === this.blogDatas[i]._id)
          {
            blog = this.blogDatas[i];
          }
        }
        if(blog !== undefined)
        {
          this.setFullBlogData(blog).then((obj)=>{
            this.blogData = obj;
            resvole(true);
          }).catch((e)=>{reject(false)});
        }
        else{
          reject(false);
        }
      });
    },
    preview: function(){
      this.setCreatorState(true);
      this.setFullBlogData(this.blogData).then((obj)=>{
        this.$router.push({name:'BlogDetail'});
      }).catch((e)=>{throw e});
    }
  },
  mounted(){
    console.log(this.getEditorState)
    if(this.getCreatorState)
    {
      this.blogData = this.getBlogObject
    }


  },
  computed:{
    ...mapGetters([
      'getActiveState',
      'getBlogObject',
      'getBlogInfo',
      'getEditorState',
      'getCreatorState'
    ]),
  }
}
</script>


<style scoped>
#edit{ top:0; left:0; width: 100%; height: 100%; padding:1%;}
.editor{border:7px solid black; height: 100%; width: 100%; position: relative;}
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
.img{margin: 0 auto; height: 200px; width: 200px; margin-top: 50px;}
.img img{height: 100%; width: 100%;}
form{width: 100%; padding-left: 20%; padding-right:20%; margin-bottom: 20%;}
a{width: 100%; font-size:15px; transition: 0.5s all; cursor: pointer;}
a:hover{color:white; text-decoration: none; font-size:20px;}
input{width:100%;}
input[type=text],input[type=password] {
  background: none;
  border:none;
  font-size: 20px;
  border-bottom:2px solid black;
  padding-bottom: 10px;
  padding-left: 10px;
  transition: 0.5s all;
  margin-bottom: 25px;
}
input[type=text]:focus,input[type=password]:focus {
font-size:25px;
outline: 0;
}
.content{width: 100%; text-align: center;}
button{background: none; border: none; border-bottom: 2px solid; margin-bottom: 50px; font-size:18px; transition: 0.5s all;}
button:hover{background: white; color:black; font-size: 22px;}
button:focus{background: white; color:black; font-size: 22px; box-shadow: none; outline: 0;}
.margin-top{margin-top: 30px; margin-bottom: 200px;}
textarea{border: none; border-left: 2px solid black; border-right: 2px solid black; font-size:20px;}
*:focus{outline: none; border-color:black; box-shadow: none;}
.exit{font-size:40px; position: absolute; top:3%; left:3%; cursor: pointer; transition: 0.5s all;}
.exit:hover{font-size:50px;}
label{font-size:20px; margin-bottom:30px; border-right:2px solid black; border-left:2px solid black; padding-left:30px;padding-right:30px;}
button{margin-right: 20px;}
button:last-child{margin-right: 0;}
.abs{position: absolute;}
.loader{position: absolute; right: 50%; top:50%; transform: translate(50%,-50%);}
.loader h3{position: absolute; width: 100%;}
@media only screen and (max-width: 476px)
{
  input[type=text],input[type=password] {
    background: none;
    border:none;
    font-size: 18px;
    border-bottom:2px solid black;
    padding-bottom: 10px;
    padding-left: 10px;
    transition: 0.5s all;
    margin-bottom: 25px;
  }
  input[type=text]:focus,input[type=password]:focus {
  font-size:22px;
  outline: 0;
  }
  form{width: 100%; padding-left: 5%; padding-right:5%;}
  label{padding-left:8px;padding-right:8px;}
}
</style>
