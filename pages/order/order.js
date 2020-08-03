// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openid:'',
      is_select_color:-1,
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
        
      ]
  },

  click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      is_select_color:e.currentTarget.dataset.id
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
    var app=getApp();
    this.setData({
        openid:app.globalData.openid
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