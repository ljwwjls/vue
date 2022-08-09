<template>
  <div class="office">
    <div class="banner">
      <img src="https://static01.imgkr.com/temp/b362f22d4c3b4ba2a9214d999f035a6e.webp" alt="">
    </div>
    <div class="bangong">
      <div class="chanpin">
        <h2>工作和生活中的高效云</h2>
        <span>了解这对于你而言意味着什么  ></span>
        <ul class="zt">
          <li>
            <img src="https://static01.imgkr.com/temp/86bf00d7a3aa4f96ad29ec7f3ede0406.png" alt="">
            <b>Word</b>
          </li>
          <li>
            <img src="https://static01.imgkr.com/temp/0a765a0b0e7c482e8570677403b237fd.png" alt="">
            <b>Powerpoint</b>
          </li>
          <li>
            <img src="https://static01.imgkr.com/temp/a95820daebae40ee95ed6881531b737b.png" alt="">
            <b>Excle</b>
          </li>
          <li>
            <img src="https://static01.imgkr.com/temp/1e940b743aea47219ca8f5535cf88295.png" alt="">
            <b>Outlook</b>
          </li>
          <li>
            <img src="https://static01.imgkr.com/temp/cafb5692bac54cb9b4c5481a5b62e8a1.png" alt="">
            <b>Teams</b>
          </li>
          <li>
            <p>更多应用</p>
          </li>
        </ul>
      </div>
    </div>
       <ul class="sii">
        <li>
          <div class="newsk2">
            <img src="https://static01.imgkr.com/temp/3e9a95ce12ab4d09b4e1de56fcab05ff.webp" alt="">
          </div>
          <b class="bbb">家庭版</b>
          <p class="bbpp">Microsoft 365 - 全新名称，更多权益，价格不变。适合个人和家庭使用的功能强大的生产力应用。</p>
          <a href="javascript:;" class="dy" >了解详细信息   ></a>
          <a href="javascript:;" class="dy2" >查看计划和定价   ></a>
       </li>
       <li>
          <div class="newsk2">
            <img src="https://static01.imgkr.com/temp/df9cdd33a27f49c68adfc10ad1182548.webp" alt="">
          </div>
          <b class="bbb">商业版</b>
          <p class="bbpp">Microsoft 365 - 全新名称，同样超值，价格不变。适用于中小型企业的生产力解决方案。</p>
          <a href="javascript:;" class="dy" >了解详细信息  ></a>
          <a href="javascript:;" class="dy2" >查看计划和定价  ></a>
       </li>
       <li>
          <div class="newsk2">
            <img src="https://static01.imgkr.com/temp/f03cdcad33ac427dbb3e529a544b3fe8.webp" alt="">
          </div>
          <b class="bbb">企业版</b>
          <p class="bbpp">Microsoft 365 - 相同名称，同样超值，相同价格。企业级生产力、管理和安全性。</p>
          <a href="javascript:;" class="dy" >了解详细信息 ></a>
          <a href="javascript:;" class="dy2" >查看计划和定价  ></a>
       </li>
      </ul>
      <div class="ct">
        <span class="her">
          <h1>常见问题解答</h1>
        </span>
          <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
          </el-tree>
      </div>
      <div class="xq">
        <div class="xq-1">
          <h1>详细了解Microsoft365</h1>
          <ul class="xq-2">
            <li>
              <div class="xtk">
                <img src="https://static01.imgkr.com/temp/ae707ca67bca4c67ad2791f62c16c0ac.png" alt="">
              </div>
              <b>家用</b>
               <a href="javascript:;">了解详情信息  ></a>
            </li>
            <li>
              <div class="xtk">
                <img src="https://static01.imgkr.com/temp/9ec9ef865c084b03bf0e1f5f2eeda910.png" alt="">
              </div>
              <b>商业版</b>
               <a href="javascript:;">了解详情信息  ></a>
            </li>
            <li>
              <div class="xtk">
                <img src="https://static01.imgkr.com/temp/8d8db69122794f46a7f90a6e839b7839.png" alt="">
              </div>
              <b>企业版</b>
               <a href="javascript:;">了解详情信息  ></a>
            </li>
            <li>
              <div class="xtk">
                <img src="https://static01.imgkr.com/temp/42ce952429514325be25b022ecd4e182.png" alt="">
              </div>
              <b>教育版</b>
               <a href="javascript:;">了解详情信息  ></a>
            </li>
          </ul>
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
    data() {
      return {
        data: [{
          label: '我可以使用 Microsoft 365 获取哪些 Office 应用？',
          children: [
            {
            label: '可获取 Word、Excel、PowerPoint、Outlook、OneNote、OneDrive 等 Office 应用。',
           }, 
            {
              label: '详细了解 Microsoft 365 计划：',
              children: [{
                label: '家庭版'
              },{
                label:'商业版'
              },{
                label:'企业版'
              }
            ]
          }]
        }, {
          label: 'Office 365 和 Microsoft 365 有何区别？',
          children: [{
            label: 'Microsoft 365 包含你所知道的 Office 365 中的所有内容。Microsoft 365 旨在帮助人们和企业利用创新的 Office 应用、智能云服务和世界一流的安全性实现更多目标。',
          }]
        },{
          label: '可获取哪些 Microsoft 365 计划？',
          children: [{
            label: 'Microsoft 365 家庭版计划',
            children:[{
              label:'Microsoft 365 家庭版'
            },{
              label:'Microsoft 365 个人版'
            }
            ]
          }, {
            label: 'Microsoft 365 商业版计划',
            children: [{
              label: 'Microsoft 365 商业基础版'
            },{
              label:'Microsoft 365 商业标准版'
            },{
              label:'Microsoft 365 商业高级版'
            },{
              label:'Microsoft 365 商业应用版'
            }
            ]
          },{
            label: 'Microsoft 365 企业版计划',
            children: [{
              label: 'Microsoft 365 E3'
            },{
              label:'Microsoft 365 E5'
            },{
              label:'Microsoft 365 F1'
            },{
              label:'Microsoft 365 企业应用版'
            }
            ]
          },]
        },{
          label: '现有的 Office 365 家庭版和商业版订阅有什么变化？',
          children: [{
            label: '一些 Office 365 订阅将自动更名为 Microsoft 365 订阅。你无需执行任何操作。',
            children:[{
              label:'Office 365 个人版将更名为 Microsoft 365 个人版。'
            },{
              label:'Office 365 家庭版将更名为 Microsoft 365 家庭版。'
            },{
              label:'Office 365 商业协作版将更名为 Microsoft 365 商业基础版。'
            },{
              label:'Office 365 商业高级版将更名为 Microsoft 365 商业标准版。'
            },{
              label:'Microsoft 365 商业版将更名为 Microsoft 365 商业高级版。'
            },
            {
              label:'Office 365 商业版将更名为 Microsoft 365 商业应用版。'
            },{
              label:'Office 365 专业增强版将更名为 Microsoft 365 企业应用版。'
            }
            ]
          }, {
            label: '以下 Office 365 企业版计划不会发生任何变化：',
            children: [{
              label: 'Office 365 E1'
            },{
              label:'Office 365 E3'
            },{
              label:'Office 365 E5'
            }
            ]
          }]
        },{
          label: 'Microsoft 365 的价格更高吗？',
          children: [{
            label: '不，订阅费用将保持不变。',
          }]
        },
        {
          label: '哪些 Office 365 计划仍可用？',
          children: [{
            label: '以下Office 365 企业版计划仍可用： ',
            children: [{
              label: 'Office 365 E1'
            },{
              label:'Office 365 E3'
            },{
              label:'Office 365 E5'
            }
            ]
          }]
        }, {
          label: 'Microsoft 365 是否需要 Internet 连接？',
          children: [{
            label: '是，安装和激活 Microsoft 365 以及获取所有最新版应用和服务都需要 Internet 连接。 ',
          },{
            label: '请注意，如果你已经是订阅者，则无需重新安装或购买其他订阅。 ',
          },{
             label: '无需连接到 Internet 即可使用 Word、Excel 和 PowerPoint 等 Office 应用，因为这些应用程序是完全安装在计算机上的。',
          }]
        },
        {
          label: 'Microsoft 365 入门的步骤有哪些？',
          children: [{
            label: '选择计划并购买订阅：',
            children:[{
              label:'Microsoft 365 家庭版计划'
            },
            {
              label:'Microsoft 365 商业版计划'
            },
            {
              label:'Microsoft 365 企业版计划'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin: 0;
  padding: 0;
}
.office{
  max-width:1700px ;
   width: 100%;
  min-width: 1200px;
  margin: 0 auto;
}
.banner{
  width: 100%;
}
.banner img{
  width: 100%;
}
.bangong{
  max-width: 1700px;
  min-width: 1200px;
   width: 100%;
  margin: 0 auto;
}
.chanpin{
  width: 784px;
  overflow: hidden;
  margin: 0 auto;
}
.chanpin h2{
  margin: 30px 0;
}
.chanpin span{
  color: rgb(0,103,184);
  cursor: pointer;
  line-height: 20px;
  margin-bottom: 50px ;
  display: block;
}
.zt{
  width: 784px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.zt li{
  width: 70px;
  height: 108px;
  list-style: none;
  float: left;
}
.zt li img{
  width: 70px;
  height: 70px;
}
.zt li  b{
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.zt li p{
  text-align: center;
  font-weight: 900;
  font-size: 14px;
  line-height: 30px;
  margin-top: 30px;
  cursor: pointer;
}
 .sii{
   max-width: 1700px;
    width: 100%;
   min-width: 1200px;
   /* padding: 0 30px; */
   margin: 0 auto;
   overflow: hidden;
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
 }
 .sii li{
   width: 449px;
   height: 485px;
   list-style: none;
   float: left;
   position: relative;
   margin-left: 15px;
 }
 .newsk2{
   width: 100%;
   height: 253px;
 }
 .newsk2 img{
   width: 100%;
 }
 .quanxin{
   width: 100%;
   height:30px ;
    margin-top:10px;
 }
 .quanxin span{
   width: 100px;
   height: 30px;
   background-color: #ffd800;
   text-align: center;
   line-height: 30px;
   font-size: 15px;
   float: left;
 }
 .bbb{
   width: 100%;
   display: block;
   float: left;
   text-align: left;
   font-size: 20px;
   line-height: 50px;
 }
 .bbpp{
   text-align: left;
   width: 100%;
   height: 70px;
   float: left;
   margin-bottom: 10px;
 }
 
 .dy{
   float: left;
   text-decoration: none;
   color: #0067b8;
   font-weight: 800;
 }
 .dy:hover{
   border-bottom: 1px solid #0067b8;
 }

 .dy2{
   width: 100%;
   height: 30px;
   line-height: 30px;
   display: block;
   float: left;
   text-decoration: none;
   color: #0067b8;
   font-weight: 800;
   text-align: left;
   margin-top: 10px;
 }
 .ct{
max-width: 1700px;
   min-width: 1200px;
    width: 100%;
 }
 h1{
   width: 227px;
   height: 110px;
   text-align: left;
   padding: 0 30px;
   display: block;
   line-height: 110px;
 }
 .el-tree-node{
   background-color: #f0f0f0;
   /* width: 1200px; */
   margin: 0 auto;
   max-width: 1700px;
    width: 100%;
   min-width: 1200px;
   /* margin: 0 30px; */
   font-size: 15px;
 }
 .el-tree-node .el-tree-node__content{
    max-width: 1700px;
     width: 100%;
   min-width: 1200px;
   height: 52px;
   line-height: 52px;
   margin: 0 auto;
 }
 .el-tree-node is-current is-focusable{
  max-width: 1700px;
   min-width: 1200px;
    width: 100%;
   height: 52px;
   line-height: 52px;
 }
.xq{
  max-width: 1700px;
   width: 100%;
  min-width: 1200px;
  margin: 0 auto;
}
.xq-1{
  width: 988px;
  height: 365px;
  margin: 0 auto;
}
.xq-1 h1{
  width: 100%;
  text-align: center;
}
.xq-2{
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.xq-2 li{
  width: 120px;
  height: 149px;
  list-style: none;
  
}
.xtk{
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.xtk img{
  width: 100%;
}
.xq-2 li  b{
  text-align: center;
  line-height: 40px;
 
}
.xq-2 li a{
  text-decoration: none;
  font-size: 14px;
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
</style>
