<template>
  <div class="hello">
    <div class="win11">
      <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLjs8" alt="">
    </div>
    <div class="vcr">
      <video autoplay muted src="https://wus-streaming-video-rt-microsoft-com.akamaized.net/d271ec57-5cdd-465e-97ec-bdc039372c50/7cc0686b-1d39-495e-b0be-b5554d944fe6.mp4"></video>
    </div>
    <div class="zm">
      <h2>让您的桌面规整有序</h2>
      <p>Windows 11 配备了简单易用的工具，可帮助您优化屏幕空间并最大化工作效率。与 Microsoft 365 订阅 配合使用，为您扫清工作过程中的阻碍。</p>
      <div class="zm-1">
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWIl0j" alt="">
      </div>
    </div>
     <div class="zm">
      <h2>电脑游戏性能新动态</h2>
      <p>使用画质逼真的显卡畅玩新游戏。与其他玩家畅玩主机游戏。使用喜爱的外设畅玩游戏。以您自己的方式畅玩游戏，Windows 11 让这成为可能。</p>
      <div class="zm-1">
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWJ9rm" alt="">
      </div>
    </div>
     <div class="foot">
      <ul>
        <li>
          <b>新增内容</b>
          <a href="javascript:;">Microsoft 365</a>
          <a href="javascript:;">Surface Laptop 2</a>
          <a href="javascript:;">Surface Go</a>
          <a href="javascript:;">Windows 10 应用程序</a>
        </li>
         <li>
          <b>Microsoft Store</b>
          <a href="javascript:;">帐户个人资料</a>
          <a href="javascript:;">下载中心</a>
          <a href="javascript:;">订单跟踪</a>
        </li>
         <li>
          <b>教育</b>
          <a href="javascript:;">Microsoft 教育领域</a>
          <a href="javascript:;">适合学生的 Office</a>
          <a href="javascript:;">适用于学校的 Office 365</a>
          <a href="javascript:;">Microsoft Azure 教育领域</a>
        </li>
         <li>
          <b>企业</b>
          <a href="javascript:;">Azure</a>
          <a href="javascript:;">AppSource</a>
          <a href="javascript:;">汽车</a>
          <a href="javascript:;">医疗保健</a>
          <a href="javascript:;">制造业</a>
          <a href="javascript:;">金融服务</a>
          <a href="javascript:;">零售业</a>
        </li>
         <li>
          <b>开发人员</b>
          <a href="javascript:;">Microsoft Visual Studio</a>
          <a href="javascript:;">Windows 开发人员中心</a>
          <a href="javascript:;">开发人员中心</a>
          <a href="javascript:;">Microsoft 开发人员计划</a>
          <a href="javascript:;">第9频道</a>
          <a href="javascript:;">Microsoft 365 开发人员中心</a>
          <a href="javascript:;">Microsoft 365 开发人员计划</a>
        </li>
         <li>
          <b>公司</b>
          <a href="javascript:;">招贤纳士</a>
          <a href="javascript:;">关于 Microsoft</a>
          <a href="javascript:;">公司新闻</a>
          <a href="javascript:;">Microsoft 隐私</a>
          <a href="javascript:;">投资人</a>
          <a href="javascript:;">安全性</a>
        </li>
      </ul>
    </div>
     <div class="di">
          <div class="di-1">
            <img src="https://static01.imgkr.com/temp/7a46b5c1099743fea9277e96d5741b8f.png" alt="">
            <a href="javascript:;">中文（中国）</a>
          </div>
          <ul class="di-2">
            <li>与 Microsoft 联系</li>
            <li>隐私</li>
            <li>管理 Cookie</li>
            <li>使用条款</li>
            <li>商标</li>
            <li>关于我们的广告</li>
            <li style="width:210px">京ICP备09042378号-6</li>
            <!-- <li style="width:210px">京公网安备 11010802023178</li> -->
            <li style="width:200px">© Microsoft 2021</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.win11{
  max-width: 1700px;
  min-width: 1200px;
   width: 100%;
  height: 855px;
  margin: 0 auto;
}
.win11 img{
  width: 100%;
}
.vcr{
   max-width: 1700px;
  min-width: 1200px;
   width: 100%;
  height: 654px;
  overflow: hidden;
 
  margin: 0 auto; 
  margin-top: 50px;
}
.vcr video{
  width: 100%;
}
.zm{
   max-width: 1700px;
  min-width: 1200px;
   width: 100%;
  overflow: hidden;
    margin: 0 auto;
}
.zm h2{
  text-align: center;
  line-height: 50px;
  font-weight: 600;
  padding: 30px 0 2px;
}

.zm p{
  line-height: 20px;
  margin-bottom: 50px;
}
.zm-1{
  width: 100%;
  overflow: hidden;

}
.zm-1 img{
  width: 100%;
}

</style>
