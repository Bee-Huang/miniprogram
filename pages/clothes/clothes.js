// pages/clothes/clothes.js
Page({

  /**
   * 服装页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    swiper_item:[
      {
        id:0,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper1.jpg",
        name:"swiper1",
        url: '/pages/other/other'
      },
      {
        id:1,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper2.jpg",
        name:"swiper2",
        url: '/pages/other/other'
      },
      {
        id:2,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper3.jpg",
        name:"swiper3",
        url: '/pages/other/other'
      },
      {
        id:3,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper4.jpg",
        name:"swiper4",
        url: '/pages/other/other'
      },
      {
        id:4,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper5.jpg",
        name:"swiper5",
        url: '/pages/other/other'
      },
      {
        id:5,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper6.jpg",
        name:"swiper6",
        url: '/pages/other/other'
      },
      {
        id:6,
        src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/swiper7.jpg",
        name:"swiper7",
        url: '/pages/other/other'
      },
    ], 

    object1:[
      {
      id:0,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/Txu.jpg",
      text:"T恤",
      url1: '/pages/other/other'
    },
    {
      id:1,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/polo.png",
      text:"polo",
      url1: '/pages/other/other'
    },
    {
      id:2,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/weiyiweiku.png",
      text:"卫衣卫裤",
      url1: '/pages/other/other'
    },
    {
      id:3,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/fengyimajia.png",
      text:"风衣马甲",
      url1: '/pages/other/other'
    },
    {
      id:4,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/zhiyezhuang.png",
      text:"职业装",
      url1: '/pages/other/other'
    },
    {
      id:5,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/yundongfu.png",
      text:"运动服",
      url1: '/pages/other/other'
    },
    {
      id:6,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/laobaofu.png",
      text:"劳保服",
      url1: '/pages/other/other'
    },
    {
      id:7,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/chongfengyitaozhaung.png",
      text:"冲锋衣套装",
      url1: '/pages/other/other'
    },
    ],

    box:[
    {id:0,text:"班服系列"},{id:1,text:"工作服系列"},{id:2,text:"运动系列"},{id:3,text:"活动系列"},{id:4,text:"户外系列"},
    ],

    box3:[
      {id:0,text:"系列"},{id:1,text:"工作服系列"},{id:2,text:"运动系列"},{id:3,text:"活动系列"},{id:4,text:"户外系列"},
      ],

    box2:[
      {
        clothes:[
          {
            id:0,
            text:"0"
          },
          {
            id:1,
            text:"1"
          },
          {
            id:2,
            text:"2"
          },
          {
            id:3,
            text:"3"
          },
          {
            id:4,
            text:"4"
          },
        ]
      }     
    ]
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})