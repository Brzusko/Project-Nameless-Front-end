<template>
  <div id="profile">
    <h1>Your profile</h1>
    <div class="line"></div>

    <div class="options margins">
      <ul class="">
        <li v-for="option in profileOptions">{{option.name}}</li>
      </ul>
    </div>

    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      maxWidth: '',
      profileOptions: [
        {link:'', name: 'SETTINGS'},
        {link:'', name: 'TICKETS'},
        {link:'', name: 'SEND TICKET'},
      ]
    }
  },
}
</script>

<style scoped>
#profile h1{ margin-left: 3%; margin-top:3%;}
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
.line{border-top: 1px solid black; width: 94%; margin: 0 auto; margin-bottom: 3%;}
.options ul{list-style: none;}
.options ul li{display: inline; margin-right: 10px;}
.options ul li:last-child{margin-right: 0px;}
</style>
