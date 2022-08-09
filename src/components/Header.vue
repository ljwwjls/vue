<template>
  <div class="hello">
    <ul class="zuo">
      <div class="logok" @click="dj"><img src="../assets/logo.png" alt=""></div>
      <li>
        <router-link to="/" exact>Mcrosoft365</router-link>
      </li>
      <li>
        <router-link to="/Office">Office</router-link>
      </li>
      <li>
        <router-link to="/Windows">Windows</router-link>
      </li>
       <li>
        <router-link to="/Sourface">Sourface</router-link>
      </li>
      <li>
        <router-link to="/Xbox">Xbox</router-link>
      </li>
      <!-- <li>
        <a href="javascript:;">优惠</a>
      </li> -->
      <li>
        <router-link to="/Support">支持</router-link>
      </li>
      </ul>
      <ul class="you">
        <li class="er">
          <a id="aa" href="javascript:;" @click="msg=0" :class="{active:msg==0}">所有Mcrosoft</a>
          <div class="erji" v-show="msg==0">
            <p @click="msg=1" class="close">X</p>
              <div class="ruanjian">
                <b>软件</b>
                <a href="javascript:;">Wiodows应用</a>
                <a href="javascript:;">OneDrive</a>
                <a href="javascript:;">Outlook</a>
                <a href="javascript:;">Skype</a>
                <a href="javascript:;">OneNote</a>
                <a href="javascript:;">Microsoft Teams</a>
              </div>
               <div class="ruanjian">
                <b>PC 和设备</b>
                <a href="javascript:;">购买 Xbox</a>
                <a href="javascript:;">PC 和平板电脑</a>
                <a href="javascript:;">配件</a>
              </div>
               <div class="ruanjian">
                <b>娱乐</b>
                <a href="javascript:;">Xbox 与游戏</a>
                <a href="javascript:;">PC 游戏</a>
              </div>
               <div class="ruanjian">
                <b>企业版</b>
                <a href="javascript:;">Microsoft Cloud</a>
                <a href="javascript:;">Microsoft Azure</a>
                <a href="javascript:;">Microsoft 365</a>
                <a href="javascript:;">Windows 365</a>
                <a href="javascript:;">Microsoft Industry</a>
                <a href="javascript:;">购买商业版</a>
              </div>
               <div class="ruanjian">
                <b>开发人员与 IT</b>
                <a href="javascript:;">.NET</a>
                <a href="javascript:;">Visual Studio</a>
                <a href="javascript:;">Windows Server</a>
                <a href="javascript:;">文档</a>
                <a href="javascript:;">开发 Windows 应用</a>
                <a href="javascript:;">Power Apps</a>
                 <a href="javascript:;">Power Platform</a>
              </div>
               <div class="ruanjian">
                <b>其他</b>
                <a href="javascript:;">免费下载与安全性</a>
                <a href="javascript:;">教育</a>
              </div>
              <div class="ck">查看站点地图></div>
          </div>
        </li>
        <li>
          <a id="aa" href="javascript:;" @click="toggle" >搜索</a>
          <div class="dvde" v-show="isshow">
          <input type="text" placeholder="在 Mcrosoft.com中搜索" class="ss" >
              <img src="https://static01.imgkr.com/temp/c619af69d54c43228321511b6cd25a99.png" alt="">
          <div class="quxiao" @click="toggle">取消</div>
          </div>
        </li>
         <li  class="ab">
        <router-link to="/Shopping"  >购物车</router-link>
      </li>
          <li class="ab">
             <router-link to="/Denglu">登录</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: 0,
    isshow:false
  },
   methods:{
    dj:function(){
      //跳转到指定的路由界面
       this.$router.replace('/')
    },
    toggle:function(){
      this.isshow=!this.isshow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.hello {
  max-width: 1700px;
  min-width: 1200px;
  width: 100%;
  /* overflow: hidden; */
  height: 62px;
  margin: 0 auto;;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
}
.zuo{
  max-width: 770px;
  min-width: 660px;
   width: 100%;
  height: 62px;
  float: left;
  margin-left: 20px;
}
.logok{
  width: 110px;
  padding-top: 19px;
  float: left;
margin-right:30px ;
}
.logok img {
  width: 100%;
}
.zuo li{
  float: left;
  width: 76px;
  list-style: none;
  
}
.zuo li a{
  line-height: 62px;
  font-size: 14px;
  color: black;
  text-decoration: none;
}
.you{
  width: 400px;
  height: 62px;
  float: right;
}
.you li{
  float: left;
  width: 99px;
  list-style: none;
}
#aa{
  line-height: 62px;
  font-size: 14px;
  color: black;
  text-decoration: none;
}
.ab a{
  line-height: 62px;
  font-size: 14px;
  color: black;
  text-decoration: none;
  color: #000 ;
}

.zuo li a:hover{
  border-bottom: 2px solid #000;
}
#aa:hover{
  border-bottom: 2px solid #000;
}
.ab a:hover{
  border-bottom: 2px solid #000;
}
ul li .router-link-active{
  color:rgb(5, 166, 240);
}
.you .ab.router-link-active{
  color:rgb(5, 166, 240);
}
.er{
  position: relative;
}
.erji{
  width: 1270px;
  height: 440px;
  background-color: #f2f2f2;
  position: absolute;
  top: 62px;
  left: -893px;
  z-index: 33;
}
.ruanjian{
  width: 180px;
  overflow: hidden;
  float: left;
  margin-left: 30px;
}
.ruanjian b{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: left;
  display: block;

}
.ruanjian a{
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: block;
  text-decoration: none;
  color: #000;
  text-align: left;
  font-size: 12px;
}
.ck{
  width: 100%;
  height: 30px;
  background-color: #e6e6e6;
  text-align: center;
  float: left;
  line-height: 30px;
  font-size: 13px;
}
.ck:hover{
  cursor: pointer;
}
.close{
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
}
.close:hover{
  color: red;
  cursor: pointer;
}
.ss{
 outline: none;

 width: 1150px;
 height:50px ;
 overflow: hidden;
 float: left;
}
.dvde{
  max-width: 1320px;
  min-width: 1200px;
  width: 100%;
  height: 55px; 
  position: absolute;
 top: 0;
 left: 156px;
 overflow: hidden;
 background-color: #ffffff;
 margin-top: 5px;
}
.dvde img{
  width: 30px;
  height: 30px;
  margin-top: 15px;
  margin-left: 5px;
  float: left;
}
.quxiao{
  width: 60px;
  height:30px;
  border: 1px solid #000;
  text-align: center;
  float: left;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 15px;
  cursor: pointer;
  font-size: 15px;
}
</style>
