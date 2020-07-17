// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  login_to:function(e){
    var errmsg=e.detail.errMsg;
    if(errmsg.indexOf("fail")>0){
      //用户选择了拒绝
      console.log("用户拒绝权限")
      wx.navigateBack({})
    }else{
      console.log("用户授权权限")
      console.log(e.detail)
      let pages = getCurrentPages(); // 当前页的数据，
      let prevPage = pages[pages.length - 2]; // 上一页的数据
      prevPage.setData({
        rawdata:e.detail.rawData
      })
      wx.navigateBack({})
    }
  },

  cancel:function(){
    wx.navigateBack({})
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