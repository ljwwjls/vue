<template>
  <div class="basj">
    <div class="basjz">
      <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="">
      <b>登录</b> 
      <form>
        <input type="text" placeholder="电子邮件、电话或者Skype" @change="usename" v-model="name">
        <span v-text="msgname" :style="styles" style="color:red;"></span>
      </form>
      <a href="javascript:;">创建一个！</a>
      <span>使用Windows Hellow或安全密钥登录
        <img src="https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg" alt="">
        </span>
        <p  @click="tj">下一步</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'',
       msgname: '',
    }
   
  },
  methods:{
    usename:function(){
      var regEmail=/^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if(this.name==''){
        this.msgname='请输入有效的电子邮件地址、电话号码或 Skype 用户名。'
        return true
      }else if(!regEmail.test(this.name)){
        this.msgname='邮箱格式不正确!'
      }else{
        this.msgname=''
        return false
      }
    },
      tj:function(){
      if(this.usename()==true){
        this.usename();
      }else if(this.passw()==true){
        this.passw();
      }else if(this.passwd()==true){
        this.passwd();
      }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html,body{
  width: 100%;
  height: 100%;
}
.basj{
  max-width: 1920px;
  width: 100%;
  /* height: 815px; */
  height: auto;
  overflow: hidden;
  background-image: linear-gradient(-90deg, #ef5767, #f1ccb8);
  margin: 0 auto;
  position: absolute;
  top: 62px;
  left: 0;
  min-height: 100%;
}
.basjz{
  width: 524px;
  height: 442px;
  background-color: white;
  margin: 0 auto;
  margin-top: 185px;
  overflow: hidden;
}
.basjz img{
  width: 141px;
  height: 62px;
  float: left;
  padding: 15px;
}
.basjz b{
  width: 100%;
  float: left;
  text-align: left;
  padding-left: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Segoe UI","Helvetica Neue","Lucida Grande","Roboto","Ebrima","Nirmala UI","Gadugi","Segoe Xbox Symbol","Segoe UI Symbol","Meiryo UI","Khmer UI","Tunga","Lao UI","Raavi","Iskoola Pota","Latha","Leelawadee","Microsoft YaHei UI","Microsoft JhengHei UI","Malgun Gothic","Estrangelo Edessa","Microsoft Himalaya","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Yi Baiti","Mongolian Baiti","MV Boli","Myanmar Text","Cambria Math";
}
.basjz input{
  width: 80%;
  float: left;
  margin:  10px 0 0 30px ;
  outline: none;
  border: 0 ;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  border-bottom: 1px solid #000;
}
.basjz a{
  text-decoration: none;
  color: #0067b8;
  float: left;
  margin-left: 30px;
  line-height: 80px;
}
.basjz a::before{
  content: '没有账户？';
  color: #000;
}
.basjz span{
  float: left;
  width: 100%;
  text-align: left;
  padding-left: 30px;
  color: #0067b8;
  cursor: pointer;
  position: relative;
  font-size: 15px;
}
.basjz span img{
  width:20px;
  height: 20px;
  position: absolute;
  top: -13px;
  right: 219px;
}
.basjz p{
  width: 125px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  color: white;
  background-color:#0067b8 ;
  float: left;
  margin-top: 64px;
  margin-left: 334px;
  cursor: pointer;
}
</style>
