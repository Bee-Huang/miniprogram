//index.js
//获取应用实例
var app=getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    swiper_item:[
      {
        id:0,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/index-images/image1.jpg",
        name:"第一个",
        url: '/pages/other/other'
      },
      {
        id:1,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/index-images/image2.jpg",
        name:"第二个",
        url: '/pages/other/other'
      },
      {
        id:2,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/index-images/image3.jpg",
        name:"第三个",
        url: '/pages/other/other'
      },
      {
        id:3,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/index-images/image1.jpg",
        name:"第四个",
        url: '/pages/other/other'
      },
      {
        id:4,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/index-images/image2.jpg",
        name:"第五个",
        url: '/pages/other/other'
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
      url1: '/pages/other/other'
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
      console.log(util.formatTime(new Date()));
      
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
