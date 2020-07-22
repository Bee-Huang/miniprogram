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
      url1: '/pages/clothes_type/clothes_type?index=0'
    },
    {
      id:1,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/polo.png",
      text:"polo",
      url1: '/pages/clothes_type/clothes_type?index=1'
    },
    {
      id:2,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/weiyiweiku.png",
      text:"卫衣卫裤",
      url1: '/pages/clothes_type/clothes_type?index=2'
    },
    {
      id:3,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/fengyimajia.png",
      text:"风衣马甲",
      url1: '/pages/clothes_type/clothes_type?index=3'
    },
    {
      id:4,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/zhiyezhuang.png",
      text:"职业装",
      url1: '/pages/clothes_type/clothes_type?index=4'
    },
    {
      id:5,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/yundongfu.png",
      text:"运动服",
      url1: '/pages/clothes_type/clothes_type?index=5'
    },
    {
      id:6,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/laobaofu.png",
      text:"劳保服",
      url1: '/pages/clothes_type/clothes_type?index=6'
    },
    {
      id:7,
      src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/chongfengyitaozhaung.png",
      text:"冲锋衣套装",
      url1: '/pages/clothes_type/clothes_type?index=7'
    },
    ],

    box:[
      {hand_text:'班服系列',
      clothes:[{text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'}]},
      {hand_text:'工作服系列',
      clothes:[{text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'}]},
      {hand_text:'运动系列',
      clothes:[{text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'}]},
      {hand_text:'活动系列',
      clothes:[{text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'}]},
      {hand_text:'户外系列',
      clothes:[{text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'},
      {text:'ZHJM118881000G精品冲锋衣',src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/HL6880陶瓷桑蚕丝POLO.jpg',money:'19.9元'}]}
    ],
   
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