
<template>
  <div id="login">
    <div class="form">
      <form>
        <input type="text" placeholder="Username" v-model="cwel"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <div class="content">
          <a>Lost password</a>
        </div>
        <div class="content margin-top">
          <button @click="login" style="margin-right: 5%">LOGIN</button><button @click="pushToRegister">REGISTER</button>
          <div class="font-size:30px; color:white">
            {{getStatus}}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: '',
  data () {
    return {
      status: null,
      cwel: '',
      password: ''
    }
  },
  methods:{
    ...mapActions([
      'onLogin'
    ]),
    pushToRegister: function(){
      this.$router.push({name:'Register'});
    },
    login: function(){
      if(this.isUserLoggedIn == true)
      {
        this.status = 3;
        return
      }
      this.$http.post('http://localhost:8080/login',{user: this.cwel, password: this.password}).then((res)=>{
        console.log(res.body.status);
        this.status = res.body.status;
        if(this.status === 0)
        {
          this.onLogin({userObject:res.body.account,token:res.body.token});
        }
      }).catch((res)=>{this.status = res.body.status});
    }
  },
  computed:{
    ...mapGetters([
      'getUserObject',
      'getAuthToken',
      'isUserLoggedIn'
    ]),
    getStatus: function(){
      if(this.status >=0)
      {
        switch(this.status){
          case 0:
            return 'SUCCESSFUL LOGIN ACTION'
            break;
          case 1:
            return 'SOMETHING GOES WRONG'
            break;
          case 2:
            return 'BAD LOGIN OR PASSWORD'
            break;
          case 3:
            return 'U ARE ALREADY LOGGED IN'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{color:white}
form{width: 100%; padding-left: 20%; padding-right:20%;}
a{width: 100%; font-size:15px; transition: 0.5s all; cursor: pointer;}
a:hover{color:white; text-decoration: none; font-size:20px;}
input{width:100%;}
input[type=text],input[type=password] {
  background: none;
  border:none;
  font-size: 20px;
  border-bottom:2px solid white;
  padding-bottom: 10px;
  padding-left: 10px;
  transition: 0.5s all;
  margin-bottom: 25px;
}
input[type=text]:focus,input[type=password]:focus {
font-size:25px;
outline: 0;
}
.content{width: 100%; text-align: center;}
button{background: none; border: none; border-bottom: 2px solid; margin-bottom: 50px; font-size:18px; transition: 0.5s all;}
button:hover{background: white; color:black; font-size: 22px;}
button:focus{background: white; color:black; font-size: 22px; box-shadow: none; outline: 0;}
.margin-top{margin-top: 30px; margin-bottom: 200px;}

</style>
