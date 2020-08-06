// pages/clothes_place-order/clothes_place-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address_status:false,
    color:'红色',
    size:'S',
    number:10,
    all_number:10,
    all_money:19.90,
    input_text:'',
    name:'黄胜锋',
    phone:'13727734567',
    address:'广东省茂名市化州市化州第二中学'
  },

  input_text:function(e){
    this.setData({
      input_terxt:e.detail.value
    })
  
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