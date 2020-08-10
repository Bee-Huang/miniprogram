
// pages/clothes_detail/clothes_detail.js
Page({

  /**
   * 页面的初始数据
   */
  //guoshangbaodashabi
  data: { 
    id:'',
    prices:0.00,
    isorder:false,
    QRcode_appear:false,
    swiper_item:[
      {
        id:0,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg'
      },
      {
        id:1,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg'
      },
      {
        id:2,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg'
      },
      {
        id:3,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg'
      },
      {
        id:4,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/JD76000男款24支180g纯棉圆领短袖T恤.jpg'
      },
    ],
    parameter:[
      {
        id:0,
        text1:'面料',
        text2:'黄胜锋大傻子'
      },
      {
        id:1,
        text1:'成分',
        text2:'黄胜锋大傻子'
      },
      {
        id:2,
        text1:'克重',
        text2:'黄胜锋大傻子'
      },
      {
        id:3,
        text1:'面料',
        text2:'黄胜锋大傻子'
      },
      {
        id:4,
        text1:'成分',
        text2:'黄胜锋大傻子黄胜锋大傻子黄胜锋大傻子黄胜锋大傻子'
      },
    ],
    data:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.init()
      wx.showLoading({
        title: '获取数据中',
      })
      console.log(options);
      this.setData({
        id:options.id,
        prices:options.prices
      })
      this.getdata();
      this.gettemp();
  },

  gettemp:function(){
    var that=this
    wx.getStorage({
      key: 'order',
      success (res) {
        console.log(res.data)
        var array=res.data
        if(array.length>0){
          for(let i=0;i<array.length;i++){
            if(array[i]==that.data.id){
              that.setData({
                isorder:true
              })
            }
          }
        }
      }
    })
  },

  getdata:function(){
    var that=this
    const db = wx.cloud.database()
    db.collection('detail')
    .where({
      id:that.data.id
    })
    .get({
      success:function(res){
        if(res.data.length>0){
          that.setData({
            data:res.data[0]
          })
          wx.hideLoading({})
        }else{
          //没有数据
          wx.showToast({
            title: '衣服信息不存在',
            icon: 'none',
            duration: 2000,
            success: function () {
              setInterval(function () {
                wx.navigateBack({
                  delta: 1,
                })
              }, 2000);
            }
          })
        }
      }
    })
  },

  addto:function(){
    wx.showLoading({
      title: '添加中',
    })
    let order=[]
    var that=this
    wx.getStorage({
      key: 'order',
      success: function(res) {
        order=res.data
        console.log(res);
      },
      complete:function(res){
        order.push(that.data.id)
        wx.setStorage({
          key:"order",
          data:order,
          success:function(res){
            console.log(res.data);
            wx.hideLoading()
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 2000
            })
            that.setData({
              isorder:true
            })
          },
        })
      }
    })
  },

  swiper_click:function(e){
    //制作数组
    var array=[]
    for(let i=0;i<this.data.data.swiper.length;i++)
      array.push(this.data.data.swiper[i].src)
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: array
    })
  },

  img_big:function(e){
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.data.detail
    })
  },

  index_click:function(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  cart_click:function(){
    wx.switchTab({
      url: '/pages/clothes_shopping_cart/clothes_shopping_cart'
    })
  },

  service_click:function(){
    wx.previewImage({
      current: 'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg', 
      urls: ['cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'] 
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