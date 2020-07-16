//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    object1:[
      {
      id:0,
      src:"../../images/kecheng1.png",
      text:"第一个"
    },
    {
      id:1,
      src:"../../images/kecheng2.png",
      text:"第二个"
    },
    {
      id:2,
      src:"../../images/kecheng3.png",
      text:"第三个"
    },
    {
      id:3,
      src:"../../images/kecheng4.png",
      text:"第四个"
    },
    {
      id:4,
      src:"../../images/kecheng5.png",
      text:"第五个"
    },
    {
      id:5,
      src:"../../images/kecheng1.png",
      text:"第六个"
    },
    {
      id:6,
      src:"../../images/kecheng2.png",
      text:"第七个"
    },
    {
      id:7,
      src:"../../images/kecheng3.png",
      text:"第八个"
    },
    {
      id:8,
      src:"../../images/kecheng4.png",
      text:"第九个"
    },
    {
      id:9,
      src:"../../images/kecheng5.png",
      text:"第十个"
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
