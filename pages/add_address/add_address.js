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
    if(this.data.name==''){
      wx.showModal({
        title: '提示',
        content: '请填写姓名',
        showCancel:false,
      })
      return
    }
    else if(this.data.number==''){
      wx.showModal({
        title: '提示',
        content: '请填写手机号码',
        showCancel:false,
      })
      return
    }
    else if(this.data.address==''){
      wx.showModal({
        title: '提示',
        content: '请填写详细地址',
        showCancel:false,
      })
      return
    }
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[ pages.length - 2 ];  
    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
        name:this.data.name,
        number:this.data.number,
        address:this.data.region[0]+this.data.region[1]+this.data.region[2]+this.data.address
    })
    //上一个页面内执行setData操作，将我们想要的信息保存住。当我们返回去的时候，页面已经处理完毕。
    //最后就是返回上一个页面。
    wx.navigateBack({
        delta: 1  // 返回上一级页面。
    })
    //此时页面数据已经改变为我们传递过来的数据。如果想要返回之后处理这些数据，那么要在onShow函数里执行，因为我们执行的是返回，所以不会触发onLoad函数，所以我们要在onShow里执行我们想要使用的函数。
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