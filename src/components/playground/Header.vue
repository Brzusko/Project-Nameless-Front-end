<template>
  <div id="" class="container-fuild">
    <div class="row">
      <div class="col-xs-12">
        <router-link to="/" tag="button" class="btn" active-class="active" exact>Home</router-link>
        <router-link to="/user/" tag="button" class="btn" active-class="active">User</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      msg: 'Home page'
    }
  },
  components: {

  }
}
</script>

<style scoped>
* {text-align: center;}
btn:active {background-color: red;}
.active {background-color: red;}
</style>
