<template>
  <div id="native" class="">
    <app-header/>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="550" class="">
      <div class="top-section">
        <h1>PN-NATIVE VERSION {{version}}</h1>
        <ul>
          <li><i class="far fa-play-circle"></i></li>
          <li><i class="fas fa-volume-off"></i></li>
        </ul>
      </div>
    </app-parallax>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="550" class="">
      <div class="next-top">
        <div class="wrapper">
          <div class="left negate dis">
          </div>
          <div class="right">
            <div class="content">
              <h1>ABOUT</h1>
              <div class="line"></div>
              <p>PN-NATIVE is free multiplayer mod for Gothic 2 based on "Gothic 2 Online" fundamentals. You can easliy play up to 150 players at one server with great scripting API. Thats one help u develop ur own server, with ur own rules.</p>
            </div>
          </div>
        </div>
      </div>
    </app-parallax>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="550" class="">
      <div class="next-top">
        <div class="wrapper">
          <div class="left">
            <div class="content">
              <h1>API</h1>
              <div class="line"></div>
              <p>PN-NATIVE provieds strong scripting API with great documentation. You can easliy do what u want with OOP script language Squrriel in client/server model. You can also develop your own Modules thats extends your game expirance.</p>
              <button>VISIT DOCS</button>
            </div>
          </div>
          <div class="right negate dis">
          </div>
        </div>
      </div>
    </app-parallax>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="550" class="">
      <div class="next-top">
        <div class="wrapper">
          <div class="left negate dis">
          </div>
          <div class="right">
            <div class="content">
              <h1>HELPFULL DEVS</h1>
              <div class="line"></div>
              <p>If u got any problem with our mod, u can write to us on our Discord Server.</p>
            </div>
          </div>
        </div>
      </div>
    </app-parallax>
    <app-parallax img="https://i.imgur.com/Q3f9vAa.jpg" size="550" class="">
      <div class="next-top">
        <div class="wrapper">
          <div class="left">
            <div class="content">
              <h1>SUPPORTED CLANS</h1>
              <div class="line"></div>
              <p>We will talk about that in our later video.</p>
            </div>
          </div>
          <div class="right negate dis">
          </div>
        </div>
      </div>
    </app-parallax>
    <app-social/>
    <app-footer/>
  </div>

</template>

<script>
import Parallax from './../shared/Parallax.vue'
import Social from './../blog/Social.vue'
import Header from './../play/Header.vue'
import Footer from './../shared/Footer.vue'
export default {
  name: 'app',
  data(){
    return {
      msg: 'Home page',
      version: '1.4.0'
    }
  },
  components: {
    appParallax: Parallax,
    appSocial: Social,
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped>
*{color:white; margin: 0; padding: 0;}
.top-section h1 {margin: 0; padding: 0; position: absolute; top:30%; left: 9%; font-size: 60px;}
.top-section ul {list-style: none; padding: 0;position: absolute; bottom: 0; right: 50%; transform: translateX(50%);padding-bottom: 30px;}
.top-section li {display: inline-block; padding: 0; font-size:30px; margin-right: 10px; cursor: pointer;}
.top-section li:last-child{margin-right: none;}
app-parallax{position: relative;}
.next-top{position: absolute; height: 100%; width: 100%;}
.wrapper{display: flex; height: 100%;}
.left{width: 50%; height: 100%;position: relative; background: rgba(0,0,0,0.6);}
.right{width: 50%; height: 100%; background: rgba(0,0,0,0.6);position: relative;}
.line{width: 15%; border-bottom: 1px solid white; padding-bottom: 20px;}
.content{width: 80%; padding-top:100px; margin-left: 10%;}
.content p{margin-top: 20px; font-size: 18px;}
.content h1{font-size:52px;}
.content button{color:white; background: none;  padding: 5px; padding-left: 10px; padding-right: 10px; margin-top: 30px; letter-spacing: 7px; transition: 1s all;}
.content button:hover {color: black; background: white;}
.negate{background: none;}

@media only screen and (max-width: 768px) {
  .dis{display: none;}
  .left{width: 100%;}
  .right{width: 100%;}
  .top-section h1 {font-size:35px; left: 0%; text-align: center; padding-left: 5%;}
  .content p{margin-top: 20px; font-size: 14px;}
  .content h1{font-size:32px;}
}
</style>
