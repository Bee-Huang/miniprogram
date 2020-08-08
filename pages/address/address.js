// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
    ]
  },

  clearCache(e) {
    // 获取索引值
    let index = e.currentTarget.dataset.id
    // 先获取缓存中的内容
    let array = wx.getStorageSync('addressList')
    // 设置一个新的数组 arrays，注意这里带有 s
    let arrays = []
    for (var i = 0; i< array.length; i++) {
      if (i != index) {
        arrays.push(array[i])
      }
    }
    // 重新设置缓存
    wx.setStorage({
      key: 'addressList',
      data: arrays,
    })
    this.onLoad();
  },

  click:function(){
    wx.navigateTo({
      url: '../add_address/add_address',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  returnto:function(e){
    console.log(e.currentTarget.dataset.index);
    var index=e.currentTarget.dataset.index
    var that = this;
    var pages = getCurrentPages(); 
    var prevPage = pages[pages.length - 2];   //上一页
    prevPage.setData({
      address: that.data.addressList[index].address,
      phone: that.data.addressList[index].number,
      name:that.data.addressList[index].name,
      address_status:true
    })
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync('addressList') || [];
    // 更新数据  
    this.setData({
      addressList: arr
    });
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
    this.onLoad();



    // let pages = getCurrentPages();
    // let currPage = pages[pages.length - 1];
    // //当前页的options，啥意思呢，就是你可能某个函数需要刷新，但是他的参数正好是传过来的参数
    // if(currPage.__data__.name){
    //   this.data.name_number_address.push({
    //     id:1,
    //     name:currPage.__data__.name,
    //     number:currPage.__data__.number,
    //     address:currPage.__data__.address
    //   })
    //   this.setData({
    //     name_number_address:this.data.name_number_address
    //   })
    // }
    
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