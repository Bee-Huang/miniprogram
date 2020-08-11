// pages/agent_register/agent_register.js
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
    class:'',
    dorm:'',
    QRcode_src:'',
  },


  input_name:function(e){
    // console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },

  input_phone_number:function(e){
    // console.log(e.detail.value)
    this.setData({
      phone_number:e.detail.value
    })
  },

  input_class:function(e){
    // console.log(e.detail.value)
    this.setData({
      class:e.detail.value
    })
  },

  input_dorm:function(e){
    // console.log(e.detail.value)
    this.setData({
      dorm:e.detail.value
    })
  },

  // input_introducer:function(e){
  //   // console.log(e.detail.value)
  //   this.setData({
  //     introducer:e.detail.value
  //   })
  // },

  radioChange:function(e){
    // console.log(e.currentTarget.dataset.value)
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
    db.collection('agent')
    .orderBy('agent_id', 'desc')
    .limit(1)
    .field({
      agent_id:true
    })
    .get({
      success:function(res) {
        var agent_id=res.data[0].agent_id+1
        that.setData({
          agent_id:agent_id
        })
        that.setagent(that);
      }
    
   })
  },

setagent:function(that){
  const db = wx.cloud.database()
  db.collection('agent')
  .add({
    data: 
      {
        agent_id:that.data.agent_id,
        name: that.data.name,
        sex: that.data.radio_value,
        phone:that.data.phone_number,
        school_class:that.data.class,
        dorm_id:that.data.dorm,
        qrcode:that.data.QRcode_src,
        register_time:that.data.time
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
      },
      fail:function(res){
        console.log(res);
      }
  })
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