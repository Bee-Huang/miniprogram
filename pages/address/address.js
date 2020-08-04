// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name_number_address:[
    ]
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
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];
    //当前页的options，啥意思呢，就是你可能某个函数需要刷新，但是他的参数正好是传过来的参数
    console.log(currPage.__data__); 
    if(currPage.__data__.name){
      this.data.name_number_address.push({
        id:1,
        name:currPage.__data__.name,
        number:currPage.__data__.number,
        address:currPage.__data__.address
      })
      this.setData({
        name_number_address:this.data.name_number_address
      })
    }
    
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