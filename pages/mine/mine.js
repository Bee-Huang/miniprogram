// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin:true,
    nick:'',
    avatarUrl:'',
    order_text:[

      {
        id:0,
        text:'我的订单'
      },
      {
        id:1,
        text:'全部',
        src:"../../icon/dingdan.png"
      },
      {
        id:2,
        text:'已接单',
        src:"../../icon/daifukuan.png"
      },
      {
        id:3,
        text:'设计中',
        src:"../../icon/daifahuo.png"
      },
      {
        id:4,
        text:'待收货',
        src:"../../icon/yifahuo.png"
      },
      {
        id:5,
        text:'已完成',
        src:"../../icon/shouhou.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //初始化云服务
    wx.cloud.init({
      env: 'wxpay-8jkfa'
    })
    wx.showLoading({
      title: '登录中…',
    })
    //
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo.nickName)
              that.setData({
                nick:res.userInfo.nickName,
                avatarUrl:res.userInfo.avatarUrl,
                islogin:false
              })
              //获取Openid  
              wx.cloud.callFunction({
                name: 'openid',
                data: {
                  weRunData: wx.cloud.CloudID('wxpay-8jkfa')
                },
                success(res){
                    var app=getApp();
                    console.log(res.result.userInfo.openId)
                    app.globalData.openid=res.result.userInfo.openId;
                    that.setData({
                      openid:res.result.userInfo.openId
                    })
                    wx.hideLoading({
                      success: (res) => {},
                    })
                }
              })
            }
          })
        }else{
          //没有授权
          wx.hideLoading({
            success: (res) => {},
          })
          wx.navigateTo({
            url: '../login/login'
          })
        }
      }
    })
  },

  gotologin:function(){
    wx.navigateTo({
      url: '../login/login'
    })
  },

  click:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../order/order?id='+(e.currentTarget.dataset.id-1)+'&openid='+this.data.openid,
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