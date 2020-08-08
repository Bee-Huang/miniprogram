// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openid:'',
      id:0,
      order_text:[
        {
          id:0,
          text:'全部'
        },
        {
          id:1,
          text:'已接单'
        },
        {
          id:2,
          text:'配货中'
        },
        {
          id:3,
          text:'待发货'
        },
        {
          id:4,
          text:'待收货'
        },
        {
          id:5,
          text:'已收货'
        }, 
      ],
      order_details:[
        {
          id:1,
          order_number:'12345678910',
          is_close:'已关闭',
          src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg",
          clothe_text:'JD76000男款24支180g纯棉圆领短袖T恤',
          clothe_color:'红色',
          clothe_size_number:[
            {
              size:'S',
              number:10
            },
            {
              size:'M',
              number:0
            },
            {
              size:'L',
              number:10
            },
            {
              size:'XL',
              number:0
            },
            {
              size:'XXL',
              number:0
            } 
          ]
        },
        {
          id:2,
          order_number:'13579246810',
          is_close:'已关闭',
          src:"cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg",
          clothe_text:'JD76000男款24支180g纯棉圆领短袖T恤',
          clothe_color:'黄色',
          clothe_size_number:[
            {
              size:'S',
              number:10
            },
            {
              size:'M',
              number:0
            },
            {
              size:'L',
              number:10
            },
            {
              size:'XL',
              number:10
            },
            {
              size:'XXL',
              number:10
            } 
          ],
        }
      ]
  },

  click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      id:e.currentTarget.dataset.id
    })
  },

  click1:function(){
    wx.navigateTo({
      url: '../order_details/order_details',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    var app=getApp();
    this.setData({
        openid:app.globalData.openid,
        id:options.id
    })
  

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