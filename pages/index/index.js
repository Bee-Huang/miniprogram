//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    swiper_item:[
      {
        id:0,
        src:"../../images/image1.jpg",
        name:"第一个"
      },
      {
        id:1,
        src:"../../images/image2.jpg",
        name:"第二个"
      },
      {
        id:2,
        src:"../../images/image3.jpg",
        name:"第三个"
      },
      {
        id:3,
        src:"../../images/image1.jpg",
        name:"第四个"
      },
      {
        id:4,
        src:"../../images/image2.jpg",
        name:"第五个"
      }
    ],  
    object1:[
      {
      id:0,
      src:"../../icon/jiaoyu.png",
      text:"教育",
      url1: '/pages/other/other'
    },
    {
      id:1,
      src:"../../icon/fuzhuang.png",
      text:"服装",
      url1: '/pages/clothes/clothes'
    },
    {
      id:2,
      src:"../../icon/tongxun.png",
      text:"通讯",
      url1: '/pages/other/other'
    },
    {
      id:3,
      src:"../../icon/canyin.png",
      text:"餐饮",
      url1: '/pages/other/noother1'
    },
    {
      id:4,
      src:"../../icon/jiaxiao.png",
      text:"驾校",
      url1: '/pages/other/other'
    },
    {
      id:5,
      src:"../../icon/lvyouyule.png",
      text:"娱乐",
      url1: '/pages/other/other'
    },
    {
      id:6,
      src:"../../icon/wenti.png",
      text:"文体",
      url1: '/pages/other/other'
    },
    {
      id:7,
      src:"../../icon/keji.png",
      text:"科技",
      url1: '/pages/other/other'
    },
    {
      id:8,
      src:"../../icon/renliziyuan.png",
      text:"人力",
      url1: '/pages/other/other'
    },
    {
      id:9,
      src:"../../icon/shangwuhezuo.png",
      text:"商务",
      url1: '/pages/other/other'
    }
  ],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
