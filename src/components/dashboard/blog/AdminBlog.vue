<template>
  <div id="download">
    <h1>Blog Panel</h1>
    <div class="line"></div>

    <div class="options margins">
      <ul class="">
        <li v-for="option in profileOptions">{{option.name}}</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      maxWidth: '',
      profileOptions: [
        {link:'', name: 'BLOG LIST'},
        {link:'', name: 'CREATE NEW'}
      ]
    }
  },
}
</script>

<style scoped>
#download h1{ margin-left: 3%; margin-top:3%;}
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
.line{border-top: 1px solid black; width: 94%; margin: 0 auto; margin-bottom: 3%;}
.img{height: 250; width: 500;}
.img img{width: 100%; height: 100%;}
h3{margin:0; padding:0; text-align: center; margin-bottom: 30px;}
.options ul{list-style: none;}
.options ul li{display: inline; margin-right: 10px;}
.options ul li:last-child{margin-right: 0px;}
</style>
