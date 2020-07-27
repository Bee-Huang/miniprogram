// pages/clothes_detail/clothes_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // 面料
    Fabric:[
      {
        id:0,
        text:'选择面料'
      },
      {
        id:1,
        text:'莫代尔'
      },
      {
        id:2,
        text:'纯棉'
      },
      {
        id:3,
        text:'丝光棉'
      },
      {
        id:4,
        text:'莱卡棉'
      },
      {
        id:5,
        text:'牛奶丝'
      },
      {
        id:6,
        text:'速干'
      }
    ],
    color:[
      {
        id:0,text:'选择颜色'
      },
      {
        id:1,text:'橙色'
      },
      {
        id:2,text:'黑色'
      },
      {
        id:3,text:'灰色'
      },
      {
        id:4,text:'黄色'
      },
      {
        id:5,text:'绿色'
      },
      {
        id:6,text:'紫色'
      },
      {
        id:7,text:'棕色'
      },
      {
        id:8,text:'白色'
      },
      {
        id:9,text:'青色'
      },
      {
        id:10,text:'蓝色'
      },
      {
        id:11,text:'红色'
      },
      {
        id:12,text:'粉色'
      }
    ]
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  translate: function () {
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-245, 0).step()
    this.setData({ animation: this.animation.export() })
  },

  success: function () {
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  tryDriver: function () {
    this.setData({
      background: "#89dcf8"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

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