<template>
  <div id="">
    <div class="social" ref="social">
      <div class="join"><h1>JOIN OUR SOCIALS ></h1></div>
      <div class="social-content">
        <ul>
          <li><a href="#" class="fab fa-facebook-square"></a></li>
          <li><a href="#" class="fab fa-youtube"></a></li>
          <li><a href="#" class="fab fa-twitch"></a></li>
          <li><a><img src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"></a></li>
        </ul>
        <img class="super" src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg">
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return{

    }
  }

}
</script>

<style scoped>
*{padding: 0; margin: 0;}
.social{width:100%; min-height: 250px;background: #363636; position: relative; }
.social ul {list-style: none; text-align: center;}
.social ul li {display: inline-block;}
.social ul li:last-child{display: none;}
.social-content{position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
li{font-size: 22px; border-radius: 50%; padding: 5px; color:white;}
.super{width: 130px; height: 70px;cursor: pointer; margin: 0 auto;}
.join{color:white; padding-left: 10%;}
.join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); transition: 1s all;}
a{text-decoration: none}

@media only screen and (max-width: 870px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); font-size:2.0em;}
}

@media only screen and (max-width: 680px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; top:50%; transform: translateY(-50%); font-size:1.7em;}
  .social-content{position: absolute; right: 50%; top:50%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  li{font-size: 22px; border-radius: 50%; padding: 5px; color:white;}
  .super{width: 110px; height: 50px;cursor: pointer;}
}

@media only screen and (max-width: 600px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; right: 50%; top:35%; transform: translate(50%,-50%); font-size:1.7em;}
  .social-content{position: absolute; right: 50%; top:60%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  li{font-size: 22px; border-radius: 50%; padding: 5px; color:white;}

  .super{width: 110px; height: 50px;cursor: pointer; display: none;}
  .social ul li:last-child{display: inline-block; width: 110px;}
}
@media only screen and (max-width: 516px) {
  .join{color:white; padding-left: 7%;}
  .join h1{display: table-cell; position: absolute; right: 50%; top:35%; transform: translate(50%,-50%); font-size:1.5em;}
  .social-content{position: absolute; right: 50%; top:60%; transform: translate(50%,-50%); border-bottom: 1px solid white;}
  li{font-size: 22px; border-radius: 50%; padding: 5px; color:white;}

  .super{width: 90px; height: 50px;cursor: pointer; display: block;}
  .social ul li:last-child{display: none; width: 110px; width: 110px; height: 15px;}
}

</style>
