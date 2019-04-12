<template>
  <div class="container-fluid" id="footer">
    <div class="row">
      <div class="col-xs-12">
        <ul  style="text-align:center;">
          <li>Project-Namless &copy 2018. Side made by Spray</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {font-family: 'Shadows Into Light', cursive; color:white;}
#footer{background:#292929; max-height: 100px; min-height: 0px; padding:10px;}
.logos{max-height:75px;}
ul {list-style-type: none; margin:0; padding: 0;}
li {display: inline;}

</style>
