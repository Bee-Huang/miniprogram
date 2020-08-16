// pages/add_address/add_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    number:'',
    address:'',
    is_checked:false,
    region: ['广东省','茂名市','化州市'],
  },

  input_name:function(e){
    // console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },

  input_number:function(e){
    // console.log(e.detail.value)
    this.setData({
      number:e.detail.value
    })
  },

  switch:function(){
    if(this.data.checked==false){
      this.data.checked=true
      console.log('No')
    }
    else{
      this.data.checked=false
      console.log('Yes')
    }
  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  input_address:function(e){
    // console.log(e.detail.value)
    this.setData({
      address:e.detail.value
    })
  },

  click1:function(){
    wx.navigateBack({
      delta: 1
    });
  },

  click2:function(){
    // if(this.data.name==''){
    //   wx.showModal({
    //     title: '提示',
    //     content: '请填写姓名',
    //     showCancel:false,
    //   })
    //   return
    // }
    // else if(this.data.number==''){
    //   wx.showModal({
    //     title: '提示',
    //     content: '请填写手机号码',
    //     showCancel:false,
    //   })
    //   return
    // }
    // else if(this.data.address==''){
    //   wx.showModal({
    //     title: '提示',
    //     content: '请填写详细地址',
    //     showCancel:false,
    //   })
    //   return
    // }
    if(this.data.name==''){
      wx.showToast({
        title: '请填写姓名',
        icon: 'none',
        duration: 1500
      })
    }else if(this.data.number==''){
      wx.showToast({
        title: '请填写联系电话',
        icon: 'none',
        duration: 1500
      })
    }else if(this.data.address==''){
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none',
        duration: 1500
      })
    }else{
      var addressList = wx.getStorageSync('addressList') || []
      addressList.push({
        name:this.data.name,
        number:this.data.number,
        address:this.data.region[0]+this.data.region[1]+this.data.region[2]+this.data.address
      });
      wx.setStorage({
        key: 'addressList',
        data: addressList,
        success: function (res) {
          wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 1500
          })
          setTimeout(function (){
            wx.navigateBack({
              delta: 1
            })
          },1500);
        }
      });  
    }
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