<template>
  <div id="blogView">
    <div id="headerImage" :style="setBack">
      <div id="headerContent">
        <h1>{{blog.title}}</h1>
        <ul>
          <li><i class="fab fa-address-book" aria-hidden="true"></i>DEV {{blog.createdBy}}</li>
          <li><i class="fab fa-calendar" aria-hidden="true"></i>31/0.2/2018</li>
          <li><i class="fab fa-tags" aria-hidden="true"></i>PN, PN NATIVE, UPDATE</li>
        </ul>
      </div>
    </div>
    <div id="blogContent">
      <div class="container margino">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1">
            <div class="content-text">
              {{blog.content}}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1" id="autor">
            <div class="autor-img">
              <img src="http://reels.syntheticpictures.com/img/directors/blank-avatar.png">
            </div>
            <div class="autorro">
              <h2>Autor DEV {{blog.createdBy}}</h2>
              <p>Founder, webmaster, UI designer and c++ programmer.</p>
              <h3>Tags:</h3>
              <div class="tags">
                <a>#raz</a><a>#raz</a><a>#raz</a><a>#raz</a><a>#raz</a>
              </div>
            </div>
          </div>
        </div>
        <div class="button">BACK TO LIST</div>
      </div>
      <div class="back" v-if="getEditorState || getCreatorState" @click="backToEdit">
        <div style="position:relative;"><div style="position:absolute; right:50%; top:50%; transform: translate(50%,50%);"><i class="fas fa-times fa-3x"></i></div></div>
      </div>
    </div>
    <social/>
  </div>
</template>

<script>
import Header from './../play/Header.vue'
import Footer from './../shared/Footer.vue'
import Social from './Social.vue'
import {mapGetters} from 'vuex'
export default {

  data(){
    return{
      img: '',
      name: '',
      content: '',
      createdBy: '',
      blog: {}
    }
  },
  components:{
    social: Social,
    appFooter: Footer,
    appHeader: Header
  },
  computed:{
    ...mapGetters([
      'getBlogObject',
      'getEditorState',
      'getCreatorState'
    ]),
    setBack: function(){
      return{
        background: `url("${this.blog.imgPath}")`,
        backgroundSize: 'cover'
      }
    }
  },
  methods:{
    click: function(){
      this.$refs.cli.click();
    },
    onChange: function(event){
      const files = event.target.files;
      const formData = new FormData();
      formData.append('article', files[0]);
      formData.append('title', this.name);
      formData.append('content',this.content);
      formData.append('createdBy',this.createdBy);
    //   let filename = files[0].name;
    //   const fileReader = new FileReader();
    //   fileReader.addEventListener('load',()=>{
    //     this.img = fileReader.result;
    //   });
    //   fileReader.readAsDataURL(files[0]);
    // }
      this.$http.post('http://192.168.0.52:8080/article',formData).then((res)=>{
        console.log(res.data);
      }).catch((e)=>console.log(e));
    console.log(formData);
    },
    backToEdit:function(){
      if(this.getEditorState == true)
      {
        this.$router.push({name: 'BlogEdit', params:{id:this.blog._id},query:{title:this.blog.title}});
      } else if (this.getCreatorState == true) {
        this.$router.push({name: 'BlogCreate'});
      }

    }
  },
  mounted(){
    this.blog = this.getBlogObject;
    console.log(this.getCreatorState + ' its creator');
    console.log(this.getEditorState + ' its editor')
  }
}
</script>

<style scoped>
#blogView{}
#headerImage{min-height: 480px; width: 100%; background: url('https://i.imgur.com/9g1cJoF.png'); background-size: cover; margin-bottom: 100px;}
#headerContent{color:white; font-weight: bold; text-align: center; padding-top: 300px;}
#headerContent li {display: inline-block;}
#headerContent ul {padding: 0;}
#headerContent i {margin-right: 10px;}
#headerContent h1 {font-size: 40px; width: 100%;}
#blogContent {color:#9b9b9b; font-size:16px; position: relative;}
#blogContent h1,h2,h3,h4,h5,h6{color:black; margin-bottom: 20px;}
#autor{margin-bottom: 50px; display: inline-flex; border-bottom: solid 1px black; padding-bottom: 30px;}
.button{margin-bottom: 50px; text-align: center; background: none; border: none; font-size:30px; color:black; border-bottom: 1px solid black; padding-bottom: 10px; margin-right: 30%; margin-left: 30%;cursor: pointer; transition: 0.5s all;}
.button:hover{text-decoration: line-through;}
.content-text{border-bottom: solid 2px #9b9b9b; margin-bottom: 50px; padding-bottom: 30px;}
.autor-img {height: 100px; width: 100px;}
.autor-img img{height: 100%; witdh:100%;border-radius: 50%; border:1px solid black;}
.autorro{padding-left: 30px;}
.autorro h2{margin-top: 0;}
.tags a{text-decoration: none; margin-right: 10px; color:black; border:1px solid black; padding-top:1px; padding-bottom: 1px; padding-left: 6px; padding-right: 6px; cursor: pointer; transition: 0.5s all;}
.tags a:hover{background: black; color:white;}
.back{position: fixed; width: 100px; height: 100px; bottom:50px;; right:30px; background: rgba(0,0,0,0.7); z-index: 3; cursor: pointer; color:white; }

@media only screen and (max-width: 500px) {
  .autor-img{height: 70px; width: 70px;}
  .tags a{ margin-right: 5px; padding-left: 3px; font-size: 10px;}
}

</style>
