// pages/clothes_gallery/clothes_gallery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pattern:[],
  },

  check_img:function(e){
    // console.log(e.currentTarget.dataset.src);
    var src=e.currentTarget.dataset.src
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.cloud.init()
    const db = wx.cloud.database()
      db.collection('other')
      .get({
        success:function(res){
          console.log(res.data[0].count);
          for(var i=1;i<=res.data[0].count;i++){
            var src='cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/gallery/pic ('+i+').jpg'
            that.data.pattern.push(src)
          }
          that.setData({
            pattern:that.data.pattern
          })
        }
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