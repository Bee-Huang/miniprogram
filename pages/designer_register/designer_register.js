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

   update:function(id){
        //上传二维码
        //this.data.QRcode_src
        var pic=this.data.QRcode_src
        let tmp1=pic.split(".")
        let suffix=tmp1[tmp1.length-1]
        var that=this
        wx.cloud.uploadFile({
          filePath : this.data.QRcode_src,
          cloudPath: 'qrcode/'+id+'.'+suffix, // 文件路径
          success: res => {
            // get resource ID
            console.log(res.fileID)
            that.setData({
              QRcode_src:res.fileID
            })
            that.setagent(that);
          },
          fail: err => {
            // handle error
            console.log(err);
          }
        })
      },

  formSubmit(e) {
    wx.showLoading({
      title:'注册中……'
    });
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
        that.update(designer_id)
      }
   })
  },

setagent:function(that){
  const db = wx.cloud.database()
  db.collection('designer')
  .add({
    data: 
      {
        agent_id:that.data.designer_id,
        name: that.data.name,
        sex: that.data.radio_value,
        phone:that.data.phone_number,
        address:that.data.address,
        qrcode:that.data.QRcode_src,
        register_time:that.data.time
      },
      success:function(res){
        wx.hideLoading();
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 1500
         })
        setTimeout(function () {
            wx.redirectTo({
          url: '../designer/designer'
        })
          },
          1500)
      },
      fail:function(res){
        console.log(res);
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
    wx.cloud.init()
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