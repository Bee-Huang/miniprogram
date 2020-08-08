// pages/order_details/order_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_progress:0,
    uid:'',//这里是订单号
    back_type:1,
    order_details:{},
    confirm_count:false,

    color:'红色',
    size:'S',
    number:10,
    all_number:10,
    all_money:19.90,
    imgUrl:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
  },

  click:function(){
    wx.navigateTo({
      url: '../clothes_ordering/clothes_ordering',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  click1:function(e){
    console.log(e)
    var imgUrl = this.data.imgUrl;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.cloud.init()
    //这里传进type，判断type为0就返回前两个页面，type为2就返回前一个页面
    this.setData({
      back_type:options.type,
      uid:options.uid
    })
    wx.showLoading({
      title: '获取订单数据中……',
    })
    this.getorderdata();
  },

  getorderdata(){
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid:this.data.uid
   })
   .get({ 
     success:function(res){
      console.log(res);
      if(res.data.length>0){
        that.setData({
          order_details:res.data[0]
        })
        wx.hideLoading({
          success: (res) => {},
        })
      }
     }
    })
  },

  checkcount(){
    var type=['订单已提交','代理已接单','设计进行中','厂家生产发货中','已完成']
    for(let i=0;i<type.length;i++){
      if(this.data.order_details.status==type[i]){
        this.setData({
          now_progress:i
        })
      }
    }
     

    if(this.data.order_details.confirm_size!=undefined){
      
    }
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
    wx.navigateBack({
      delta: this.data.back_type
    })
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