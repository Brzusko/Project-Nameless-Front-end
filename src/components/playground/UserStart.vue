<template>
  <div id="" class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4 col-md-offset-4">
            <p> Please select a User</p>
            <hr>
            <ul class="list-group">
              <router-link tag="li" to="/user/1" class="list-group-item" style="cursor: pointer;">User 1</router-link>
              <router-link tag="li" to="/user/2" class="list-group-item" style="cursor: pointer;">User 2</router-link>
              <router-link tag="li" to="/user/3" class="list-group-item" style="cursor: pointer;">User 3</router-link>
            </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      msg: 'User Start page'
    }
  },
  components: {

  }
}
</script>

<style scoped>
* {text-align: center;}
</style>
