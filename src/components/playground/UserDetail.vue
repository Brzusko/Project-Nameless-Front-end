<template>
  <div id="" class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4 col-md-offset-4">
            <h1>{{msg}}</h1>
            <h2> THis is user id: {{id}}</h2>
            <router-link tag="button" :to="{name: 'userEdit', params: {id: $route.params.id}}" class="btn btn-primary">Edit user {{$route.params.id}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      msg: 'User Detail page',
      id: this.$route.params.id
    }
  },
  watch:{
    '$route'(to,from){
        this.id = to.params.id
    }
  },
  components: {

  },
  beforeRouteEnter(to,from,next){
    if(true)
    {
      next();
    }
    else {
      next(false);
    }
  }
}
</script>

<style scoped>
* {text-align: center;}
</style>
