<template>
  <div id="" class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4 col-md-offset-4">
            <h1>{{msg}}</h1>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      msg: 'User Edit page'
    }
  },
  components: {

  }
}
</script>

<style scoped>
* {text-align: center; margin-top: 75px;}
</style>
