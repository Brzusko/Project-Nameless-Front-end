
<template>
  <div id="article">
    <div id="articles">
      <table class="table table-condensed">
    <thead>
      <tr>
        <th>Article Title</th>
        <th>Delete button</th>
        <th><div @click="refresh">Ref</div> <i class="fas fa-sync-alt" @click="refresh"></i></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articleData">
        <td>{{article.title}}</td>
        <td><div @click="deleteArticle(article.title)">dupa</div></td>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: '',
  data () {
    return {
      articleData: []
    }
  },
  methods:{
    refresh: function(){
      this.$http.get('http://192.168.0.52:8080/article').then((res)=>{
        this.articleData = res.data;
        console.log('reef');
      }).catch((e)=>console.log(e));
    },
    deleteArticle: function(tit){
      axios.delete('http://192.168.0.52:8080/article',{data:{
        title:tit
      }}).then((res)=>{
        console.log(res);
        this.refresh();
      }).catch((e)=>{console.log(e)})
    }
  },
  mounted(){
    this.$http.get('http://192.168.0.52:8080/article').then((res)=>{
      this.articleData = res.data;
    }).catch((e)=>console.log(e));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article{margin-top: 300px;}
#articles{padding: 20px; font-size: 20px;}

svg:hover{cursor: pointer;}

</style>
