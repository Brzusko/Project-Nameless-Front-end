<template>
  <div id="server">
    <h1>Server-list</h1>
    <div class="line"></div>
    <div class="container-fluid margins">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <div class="img" style="margin: 0 auto;"><img src="./sad.png"></div>
          <h3>ANY ONE HELP!! THERE IS NO SERVERS LEFT!</h3>
        </div>
      </div>
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
#server h1{ margin-left: 3%; margin-top:3%;}
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
.line{border-top: 1px solid black; width: 94%; margin: 0 auto; margin-bottom: 3%;}
.img{height: 250; width: 500;}
.img img{width: 100%; height: 100%;}
h3{margin:0; padding:0; text-align: center; margin-bottom: 30px;}
</style>
