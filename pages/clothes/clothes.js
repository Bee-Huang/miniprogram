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
    type:['个性班服','活动文化衫','工作服','户外服装','运动服饰'],
    type_id:[
    ['511','1750','5042','272','3247','6401','3826','4982','5230'],
    ['3153','451','4180','1142','6443','21','2620','2467','1419'],
    ['5753','5754','3797','3798','4853','4718','4710','4702','4875'],
    ['6501','6502','6504','3653','6505','3518','3524','2617','6517'],
    ['2532','2856','2533','102','413','414','6538','6415','6637']],
    box1:[],
  

  },
  gotodetail:function(e){
    console.log();
    wx.navigateTo({
      url: '../clothes_detail/clothes_detail?id='+e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    var that=this
    var p=0
    var array=[]
    //初始化数组
    for(p=0;p<this.data.type.length;p++)
      array.push({type:this.data.type[p],data:[]});
    this.setData({
      box1:array
    })
    for(let i=0;i<this.data.type.length;i++){
      let small_id=this.data.type_id[i];
      console.log(small_id); 
      let array_small=[]
      for(let o=0;o<small_id.length;o++){
        const db = wx.cloud.database()
        db.collection('list')
        .where({
          id:small_id[o]
        })
        .get({
          success:function(res){
            array_small.push(res.data[0])
            var data='box1['+i+'].data'   
            that.setData({
              [data]:array_small
            })
          }
        })
      }
    }
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