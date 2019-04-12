
<template>
  <div id="register">
    <div class="form">
      <form>
        <input type="email" @input="validateEmail" placeholder="Email" v-model="email"/>
        <input type="text" placeholder="Username" v-model="user"/>
        <div>
          <input type="password" @input="validatePasswords" class="width" placeholder="Password" v-model="password"/>
          <input type="password" @input="validatePasswords" class="width" placeholder="Repeat Password" v-model="repeat"/>
        </div>
        <div class="content">
          {{passwordStatus}}       {{emailStatus}}   {{getStatus}} {{counter}}
        </div>
        <div class="content margin-top">
          <button @click="validateAll">REGISTER</button><button @click="pushToLogin">BACK TO LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import validator from 'email-validator'
export default {
  name: '',
  data () {
    return {
      email: '',
      user: '',
      password: '',
      repeat: '',
      passwordStatus: '',
      emailStatus: '',
      status: '',
      can: true,
      resp: false,
      counter: null
    }
  },
  methods:{
    pushToLogin:function(){
      this.$router.push({name:'Login'});
    },
    validatePasswords:function(){
      if(this.password.length >= 3 && this.repeat.length >=3)
      {
        if(this.password != this.repeat)
        {
          this.passwordStatus = 'PASSWORDS DOESNT MATCHS'
          return false
        }
        else{
          this.passwordStatus = ''
          return true
        }
      }
      else{
        this.passwordStatus = 'PASSWORD AND REPEAT PASSWORD ARE TOO SHORT'
        return false
      }
    },
    validateEmail: function(){
      if(this.email.length >= 4)
      {
        if(validator.validate(this.email) === false)
        {
          this.emailStatus = 'WRONG EMAIL FORMAT'
          return false
        }
        else{
          this.emailStatus = ''
          return true
        }
      }
      else{
        this.emailStatus = 'EMAIL IS TOO SHORT'
        return false
      }
    },
    validateAll: function(){
      if(this.can == true)
      {
        if(this.validateEmail() == true && this.validatePasswords() == true)
        {
          this.$http.post('http://192.168.0.52:8080/register',{email:this.email,user:this.user,password:this.password}).then((res)=>{
            this.status = res.body.status;
            this.can = false;
            this.animation();
            setTimeout(()=>{
              this.can = true;
            },10000)
          }).catch((e)=>{
            this.status = e.body.status
            this.can = false;
            setTimeout(()=>{
              this.can = true;
            },10000)
          });
        }
      }
    },
    google:function(){
      this.resp = true;
      console.log('DDDDDDD');
    },
    animation: function(){
      this.counter = 5 + 's';
      var count = 5;
      const interval = setInterval(()=>{
        count--;
        this.counter = count + 's'
        if(count <= 0)
        {
          this.$router.push({name:'Login'});
          clearInterval(interval);
        }
      },1000);
    }
  },
  computed:{
    getStatus: function(){
      switch(this.status){
        case 0:
          return 'ACCOUNT CREATED, U WILL BE REDICTED TO LOGIN PAGE IN: '
          break;
        case 1:
          return 'THIS USERNAME IS TAKEN'
          break;
        case 2:
          return 'THIS EMAIL IS TAKEN'
          break;
        case 3:
          return 'EMAIL AND USERNAME ARE TAKEN'
          break;
        case 4:
          return 'ERROR WITH DATABASE'
          break;
      }
    }
  },
  // mounted(){
  //   grecaptcha.render('captcha',{
  //     'sitekey': '6LfRUEQUAAAAACpEjSNWc_iAtwZ4UjDD0sknIGs5'
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{color:white}
form{width: 100%; padding-left: 20%; padding-right:20%;}
a{width: 100%; font-size:15px; transition: 0.5s all; cursor: pointer;}
a:hover{color:white; text-decoration: none; font-size:20px;}
input{width:100%;}
input[type=text],input[type=password],input[type=email] {
  background: none;
  border:none;
  font-size: 20px;
  border-bottom:2px solid white;
  padding-bottom: 10px;
  padding-left: 10px;
  transition: 0.5s all;
  margin-bottom: 25px;
}
input[type=text]:focus,input[type=password]:focus,input[type=email]:focus {
font-size:25px;
outline: 0;
}
.content{width: 100%; text-align: center; font-size:18px;}
button{background: none; border: none; border-bottom: 2px solid; margin-right: 5%; margin-bottom: 50px; font-size:18px; transition: 0.5s all;}
button:hover{background: white; color:black; font-size: 22px;}
button:focus{background: white; color:black; font-size: 22px; box-shadow: none; outline: 0;}
button:last-child{margin-right: 0px;}
.margin-top{margin-top: 30px; margin-bottom: 200px;}
</style>
