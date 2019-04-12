
<template>
  <div id="article" style="text-align:center;">
    <form>
      <div class="form-group">
        <input type="text" class="form-control" id="mail" placeholder="Title" v-model="title">
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="5" id="comment" placeholder="Write ur content..." v-model="content"></textarea>
      </div>
    </form>
    <button class="btn alert" @click="submitForm">SUBMIT ARTICLE</button> <button class="btn alert" @click="selectImage">SELECT BACKGROUND</button>
    <div class="img">
      <img :src="imgPath">
    </div>
    <input type="file" style="display:none;" ref="image" @change="changeHandler"/>

    <div class="preview">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-8 col-xs-offset-2">
            <div v-html="getStyling" style="text-align:left;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {markdown} from 'markdown';

export default {
  name: '',
  data () {
    return {
      title: '',
      content: '',
      imgPath: '',
      imgFile: '',
      createdBy: '',
      formData : null,
      res: ''
    }
  },
  methods:{
    selectImage: function(){
      this.$refs.image.click();
    },
    changeHandler: function(event){
      var file = event.target.files;
      var fileReader = new FileReader();
      this.formData.append('article', file[0]);
      fileReader.addEventListener('load',()=>{
        this.imgPath = fileReader.result;
      });
      fileReader.readAsDataURL(file[0]);
    },
    submitForm: function(){
      this.formData.append('title',this.title);
      this.formData.append('content',this.content);
      this.formData.append('createdBy',this.createdBy);
      this.$http.post('http://192.168.0.52:8080/article',this.formData).then((res)=>{
        this.res = res.data;
        this.vanishForm();
      }).catch((e)=>this.res = e);
    },
    vanishForm: function(){
      this.formData = null;
      this.title = '';
      this.content= '';
      this.createdBy = '';
      this.imgPath = '';
      this.formData = new FormData();
      console.log(this.formData);
    },
  },
  computed: {
    getStyling: function(){
      return markdown.toHTML(this.content);
    }
  },
  mounted(){
    this.formData = new FormData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article{margin-top: 300px;}
.img {height: 100px; width: 200px; margin: 0 auto;}
.img img{height: 100%; width: 100%; border: none;}

@media only screen and (max-width: 1170px) {
  #logo{width: auto;}
}
@media only screen and (max-width: 970px) {
  #logo{width: auto;}
}
@media only screen and (max-width: 790px) {

}
@media only screen and (max-width: 430px) {

}

</style>
