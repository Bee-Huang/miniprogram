// pages/order_details/order_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back_type:1,
    color:'红色',
    size:'S',
    number:10,
    all_number:10,
    all_money:19.90,
    imgUrl:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
  },

  click:function(){
    wx.navigateTo({
      url: '../clothes_ordering/clothes_ordering',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  click1:function(e){
    console.log(e)
    var imgUrl = this.data.imgUrl;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    //这里传进type，判断type为0就返回前两个页面，type为2就返回前一个页面
    this.setData({
      back_type:option.type
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
    wx.navigateBack({
      delta: this.data.back_type
    })
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