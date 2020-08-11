var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    QRcode_appear:false,
    name:'',
    radio_value:'男',
    phone_number:'',
    address:'',
    QRcode_src:'',
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

  input_address:function(e){
    console.log(e.detail.value)
    this.setData({
      address:e.detail.value
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
        var QRcode_src=res.tempFilePaths[0]
        that.setData({
          QRcode_src:QRcode_src,
          QRcode_appear:true
        })
      }
    })
    // console.log(this.data.QRcode_src)
  },

  formSubmit(e) {
    var time=util.formatTime(new Date())
    var that=this
    const db = wx.cloud.database()
    db.collection('designer')
    .orderBy('designer_id', 'desc')
    .limit(1)
    .field({
      designer_id:true
    })
    .get({
      success:function(res) {
        var designer_id=res.data[0].designer_id+1
        that.setData({
          designer_id:designer_id
        })
        that.setagent();
      }
   })
  },

setagent(){
  const db = wx.cloud.database()
  db.collection('designer')
  .add({
    data: 
      {
        agent_id:this.data.designer_id,
        name: this.data.name,
        sex: this.data.radio_value,
        phone:this.data.phone_number,
        address:this.data.address,
        qrcode:this.data.QRcode_src,
        register_time:this.data.time
      },
      success:function(res){
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 1500
         })
        setTimeout(function () {
          wx.navigateBack({
                delta: 1
              });
           },
          1500)
      }
  })
},

  formReset(e) {
    // console.log('form发生了reset事')
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