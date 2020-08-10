// pages/agent_register/agent_register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    QRcode_appear:false,
    QRcode_src:'',
    radio_value:'r1',
    name:'',
    phone_number:'',
    class:'',
    dorm:'',
    introducer:''
  },


  input_name:function(e){
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
  input_phone_number:function(e){
    console.log(e.detail.value)
    this.setData({
      phone_number:e.detail.value
    })
  },
  input_class:function(e){
    console.log(e.detail.value)
    this.setData({
      class:e.detail.value
    })
  },
  input_dorm:function(e){
    console.log(e.detail.value)
    this.setData({
      dorm:e.detail.value
    })
  },
  input_introducer:function(e){
    console.log(e.detail.value)
    this.setData({
      introducer:e.detail.value
    })
  },

  radioChange:function(e){
    console.log(e.currentTarget.dataset.value)
    this.setData({
      radio_value:e.currentTarget.dataset.value
    })
  },

  add_QRcode:function(){
    var that=this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var QRcode_src=res.tempFilePaths
      that.setData({
        QRcode_src:QRcode_src,
        QRcode_appear:true
      })
      }
    })
    // console.log(this.data.QRcode_src)
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
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