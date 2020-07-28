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
    ],
    clothes:[
      {
        id:0,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
      {
        id:1,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
      {
        id:2,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
      {
        id:3,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
      {
        id:4,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
      {
        id:5,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/clothes-images/img/BMYMC-190C男款珂桠180克纯棉圆领（克重可能会因批次不同而有所差异）.jpg',
        name:'BMYMC-190C男款珂桠180克纯棉圆领',
        money:'19.9￥'
      },
    ]
  },
  onReady: function () {
    this.animation1 = wx.createAnimation({
      duration:400,
      timingFunction:'ease-out'
    })
    this.animation = wx.createAnimation({
      duration:400,
      timingFunction:'ease-out'
    })
  },
  
  translate1: function(){
    this.setData({
      isRuleTrue1: true
    })
    this.setData({ animation1: this.animation1.export() })
  },

  translate2: function () {
    this.setData({
      isRuleTrue: true
    })
    // animation.translate()中的值的单位是px,导致动画在不同的机型出现不同的位置，所以需要将px转换为rpx：px = rpx / 750 * wx.getSystemInfoSync().windowWidth;
    var systemInfo = wx.getSystemInfoSync();
    this.animation.translate(-570 / 750 * systemInfo.windowWidth, 0).step()
    this.setData({ animation: this.animation.export() })
  },

  success1: function () {
    this.setData({
      isRuleTrue1: false
    })
    this.animation1.translate(0, 0).step()
    this.setData({ animation1: this.animation1.export() })
  },

  success: function () {
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
  },

click: function(){
  
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