<template>
  <div id="settings">
    <div class="container-fluid">
      <div class="header">
        <h2>Account Info</h2>
      </div>
      <div class="row">
        <div class="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMZ61_YBq_vUIGkG7MHRA9cSztvgRAMIdGu-i9b0RFb4zLDa_g"/></div>
        <h3 class="text-center" style="margin-bottom:50px;">{{userInfo.rank + ' ' + userInfo.nick}}</h3>
         <div class="col-xs-12 col-sm-6 col-sm-offset-3">
           <div class="col-xs-12">
             <h3 class="text-center" style="margin-bottom:40px;">GENERAL INFO</h3>
             <div class="general">
               <div class="row lista">
                 <div class="col-xs-2">
                   <i class="fas fa-envelope fa-2x"></i>
                 </div>
                 <div class="col-xs-10">
                   <h4 style="margin-bottom:4px;">EMAIL</h4>
                   <h4><b>{{userInfo.email}}</b></h4>
                 </div>
               </div>
               <div class="row lista">
                 <div class="col-xs-2">
                   <i class="fas fa-shield-alt fa-2x"></i>
                 </div>
                 <div class="col-xs-10">
                   <h4 style="margin-bottom:4px;">ACCOUNT STATUS</h4>
                   <h4><b>{{userInfo.accountStatus}}</b></h4>
                 </div>
               </div>
               <div class="row lista">
                 <div class="col-xs-2">
                   <i class="fas fa-users fa-2x"></i>
                 </div>
                 <div class="col-xs-10">
                   <h4 style="margin-bottom:4px;">CLAN</h4>
                   <h4><b>{{userInfo.clan}}</b></h4>
                 </div>
               </div>
               <div class="row lista">
                 <div class="col-xs-2">
                   <i class="fab fa-discord fa-2x"></i>
                 </div>
                 <div class="col-xs-10">
                   <h4 style="margin-bottom:4px;">DISCORD</h4>
                   <h4><b>{{userInfo.discord}}</b></h4>
                 </div>
               </div>
               <div class="row lista">
                 <div class="col-xs-2">
                   <i class="fas fa-server fa-2x"></i>
                 </div>
                 <div class="col-xs-10">
                   <h4 style="margin-bottom:4px;">SERVET TOKEN STATUS</h4>
                   <h4><b>{{userInfo.serverToken.status}}</b></h4>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
      <div class="header">
        <h2>Change data</h2>
      </div>
      <div class="container-fluid forms">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <h3>Change password</h3>
            <form role="form">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="password" class="form-control" id="pass" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Repeat Password</label>
                <input type="password" class="form-control" id="repeat" placeholder="Repeat Password">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="new" placeholder="New Password">
              </div>
              <button class="btn btn-primary text-center">Update</button>
            </form>
            <hr>
          </div>
        </div>
      </div>

      <div class="container-fluid forms">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <h3>Update Avatar</h3>
            <div class="img" style="margin-bottom:80px;">
              <div class="update">
                <h3>Pick</h3>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMZ61_YBq_vUIGkG7MHRA9cSztvgRAMIdGu-i9b0RFb4zLDa_g"/>
              <button class="btn btn-primary" style="margin-top:20px;">Update</button>
            </div>
            <hr>
          </div>
        </div>
      </div>

      <div class="container-fluid forms">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <h3>Server Token</h3>
             <form>
              <div class="form-group">
                <input type="input" class="form-control" id="token" placeholder="Server Token">
              </div>
              <div class="text-center">
                <button class="btn btn-primary text-center" style="margin-right:10px;">Generate token</button><button class="btn btn-primary text-center">Show token</button>
              </div>
             </form>
            <hr>
          </div>
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
      userInfo: {
        email: 'wojtas1146@gmail.com',
        nick: 'Spray',
        rank: 'DEV',
        accountStatus: 'none',
        serverToken: {
          token: 'add23131fdsfdsa',
          status: 'none'
        },
        clan: 'unavaiable',
        discord: 'unavaiable'
      }
    }
  },
}
</script>

<style scoped>
#settings {margin-top:30px; margin-left: 3%; margin-right: 3%;}
.line{border-top: 1px solid black;}
.header ul{list-style: none; margin:0; padding:0;}
.header li{display: inline;}
.container-fluid{padding: 0;}
h2 {
    overflow: hidden;
}

h2:after {
    content:"";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid black;
}
.d {background: red;}
.img {height: 150px; width: 150px; margin: 0 auto; margin-top: 50px; border-radius: 50%; position: relative; text-align: center;}
.img img{width: 100%; height: 100%; border:2px solid black; border-radius: 50%;}
.lista h4{margin: 0;}
.lista {margin-bottom: 30px;}
.forms h3{margin-top: 0px;}
.forms {margin-top: 30px;}
.forms label{margin-bottom: 0px; margin-top: 5px;}
.update { position: absolute; width: 100%; height: 100%; border-radius: 50%; cursor: pointer;}
.update:hover {background: rgba(0,0,0,0.6);}
.update:hover h3{display: block;}
.update h3{color:white; position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); display: none;}
</style>
