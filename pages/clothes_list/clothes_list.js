// pages/clothes_detail/clothes_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:'',
    is_click:false,
    // 面料
    Fabric:[
        {
          id:0,
          text:'选择面料'
        },
        {
          id:1,
          text:'T恤,圆领短袖',
          isture:false
        },
        {
          id:2,
          text:'纯棉',
          isture:false
        },
        {
          id:3,
          text:'丝光棉',
          isture:false
        },
        {
          id:4,
          text:'莱卡棉',
          isture:false
        },
        {
          id:5,
          text:'牛奶丝',
          isture:false
        },
        {
          id:6,
          text:'速干',
          isture:false
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
    clothes:[]
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
//综合点击
  translate1: function(){
    if(this.data.isRuleTrue1==false){
      this.setData({
        isRuleTrue1: true
      })
    } 
    else
      this.setData({
        isRuleTrue1: false
      })
    this.setData({ animation1: this.animation1.export() })
  },
//筛选点击
  translate2: function () {
    this.setData({
      isRuleTrue: true,
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
// 综合
  comprehensive:function (){
    var that=this
    const db = wx.cloud.database()
    db.collection('list')
    .where({
      keyword: 'T恤,圆领短袖'
    })
    .limit(20)
    .get({
      success:function(res){
        that.setData({
          clothes:res.data
        })
      }
    })
  },
// 价格降序
  grade_down:function (){
    var that=this
    const db = wx.cloud.database()
    db.collection('list')
    .where({
      keyword: 'T恤,圆领短袖'
    })
    .orderBy('prices', 'asc')
    .limit(20)
    .get({
      success:function(res){
        console.log(res.data);
       that.setData({
         clothes:res.data
       })
      }
    })

  },
//价格升序
  grade_up:function (){
    var that=this
    const db = wx.cloud.database()
    db.collection('list')
    .where({
      keyword: 'T恤,圆领短袖'
    })
    .orderBy('prices', 'desc')
    .limit(20)
    .get({
      success:function(res){
        console.log(res.data);
       that.setData({
         clothes:res.data
       })
      }
    })
  },

  success: function () {
    if(this.data.is_click){
      this.setData({
        is_click:false
      })
      return
    }
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
  },

  success2:function(){
    this.setData({
      is_click:true
    })
  },

tryDriver: function (e) {
  console.log(e);
  let text=e.currentTarget.dataset.text
  var that=this
    const db = wx.cloud.database()
    db.collection('list')
    .where({
      color_count:'12色'
    })
    .limit(20)
    .get({
      success:function(res){
        console.log(res.data);
       that.setData({
         clothes:res.data
       })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.word);
    this.setData({
      word:options.word
    })
    
    wx.cloud.init()
    var that=this
    const db = wx.cloud.database()
    db.collection('list')
    .where({
      keyword: 'T恤,圆领短袖'
    })
    .limit(20)
    .get({
      success:function(res){
        that.setData({
          clothes:res.data
        })
      }
    })
    
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