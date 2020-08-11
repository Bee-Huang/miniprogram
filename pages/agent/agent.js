
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openid:'',
      id:0,
      order_text:[
        {
          id:0,
          text:'全部'
        },
        {
          id:1,
          text:'已接单'
        },
        {
          id:2,
          text:'设计中'
        },
        {
          id:3,
          text:'待收货'
        },
        {
          id:4,
          text:'已完成'
        } 
      ],
      order_details:[]
  },

  click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      id:e.currentTarget.dataset.id
    })
    this.getindexdata(e.currentTarget.dataset.id)
  },

  click1:function(e){
    console.log(e.currentTarget.dataset.uid);
    wx.navigateTo({
      url: '../order_details/order_details?type=0&uid='+e.currentTarget.dataset.uid,
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  // click1:function(){
  //   wx.navigateTo({
  //     url: '../order_details/order_details',
  //     success: (result)=>{
        
  //     },
  //     fail: ()=>{},
  //     complete: ()=>{}
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        id:options.id
    })
    wx.cloud.init()
    this.getopenid();
  },

  getindexdata(index){
    var statuss=['订单已提交','代理已接单','设计流程进行中','等待发货','订单完成']
    if(index==0){
      this.getdata();
    }else{
      var that=this
      const db = wx.cloud.database()
      db.collection('order')
      .where({
        _openid:this.data.openid,
        status:statuss[index]
     })
     .get({ 
       success:function(res){
        console.log(res);
        that.setData({
          order_details:res.data
        })
       }
      })
    }
  },

  getdata(){
    //获取全部数据
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      _openid:this.data.openid
   })
   .get({ 
     success:function(res){
      console.log(res);
      that.setData({
        order_details:res.data
      })
     }
    })
  },

  getopenid(){
    var that=this
    wx.cloud.callFunction({
      name: 'openid',
      data: {
        weRunData: wx.cloud.CloudID('wxpay-8jkfa')
      },
      success(res){
        that.setData({
          openid:res.result.userInfo.openId
        })
        that.getindexdata(that.data.id);
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