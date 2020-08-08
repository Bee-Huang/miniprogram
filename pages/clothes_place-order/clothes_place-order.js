var app=getApp()
var util = require('../../utils/util.js')

// pages/clothes_place-order/clothes_place-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address_status:false,
    uid:'',
    all_number:0,
    input_text:'',
    name:'',
    time:'',
    phone:'',
    address:'',
    listdata:[]
  },

  input_text:function(e){
    this.setData({
      input_terxt:e.detail.value
    })
  },

  gotoaddress:function(){
    wx.navigateTo({
      url: '/pages/address/address'
    })
  },

  getordertmp:function(){
    var that=this
    wx.getStorage({
      key: 'order_tmp',
      success (res) {
        var count=res.data.length
        that.setData({
          listdata:res.data,
          all_number:count
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.init()
      this.getordertmp();
      var timee = util.formatTime(new Date());
      var udid=timee+util.wxuuid();
      this.setData({
        uid:udid,
        time:timee
      })
  },

  submit:function(){
    console.log(this.data.address_status);
    if(this.data.address_status==true){
      this.submit2();
    }else{
      wx.showToast({
        title: '请选择联系信息',
        icon: 'none',
        duration: 1500
      })
    }
  },


  submit2:function(){
    const db = wx.cloud.database()
      db.collection('order').add({
        data: {
          time:this.data.time,
          uid:this.data.uid,
          status:'订单已提交',
          deposit:false,
          contactinfo:{
            name:this.data.name,
            phone:this.data.phone,
            address:this.data.address
          },
          sample_list:this.data.listdata
        },
        success:function(res){
          wx.removeStorage({
          key: 'order_tmp'
          })
          wx.removeStorage({
            key: 'order'
            })
          wx.showToast({
            title: '订单提交成功',
            icon: 'success',
            duration: 1500
          })
        },
        fail:function(res){
          console.log(res);
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