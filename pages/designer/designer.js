var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_true:true,
    is_add:false,
    order:[
      {
        id:0,
        is_submit:false,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg',
        cloth:'76000',
        color:'红色',
        words:'jlbdafghlfbgbadfghbldsfhgs',
        img:[
          {
            id:0,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:1,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:2,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:3,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
        ],
        desiger_img:{},
        submit_time:'',
      },
      {
        id:1,
        is_submit:false,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg',
        cloth:'76000',
        color:'红色',
        words:'jlbdafghlfbgbadfghbldsfhgs',
        img:[
          {
            id:0,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:1,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:2,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
          {
            id:3,
            src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/icon.jpg'
          },
        ],
        desiger_img:{},
        submit_time:'',
      },
    ]
  },

  click1:function(){
    if(this.data.is_true==false){
      this.setData({
        is_true:true
      })
    }
  },

  click2:function(){
    if(this.data.is_true==true){
      this.setData({
        is_true:false
      })
    }
  },

cheak_img1:function(e){
  console.log(e.currentTarget.dataset.src)
  wx.previewImage({
    current: e.currentTarget.dataset.src, // 当前显示图片的http链接
    urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表
  })
},

cheak_img2:function(e){
  // console.log(e.currentTarget.dataset.src)
  wx.previewImage({
    current: e.currentTarget.dataset.src, // 当前显示图片的http链接
    urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表
  })
},

add_img:function(e){
  console.log(e)
  // var that=this
  // wx.chooseImage({
  //   count: 1,
  //   sizeType: ['original', 'compressed'],
  //   sourceType: ['album', 'camera'],
  //   success (res) {
  //     // tempFilePath可以作为img标签的src属性显示图片
  //     const tempFilePaths = res.tempFilePaths
  //     that.data
  //     console.log(tempFilePaths)
  //     // that.setData({
        
  //     // })
  //   }
  // })
},

  submit_click:function(e){
    console.log(e.currentTarget.dataset.id)
    var id=e.currentTarget.dataset.id
    var submit='order['+id+'].is_submit'
    var time='order['+id+'].submit_time'
    this.setData({
      [submit]:true,
      [time]:util.formatTime(new Date())
    })
    console.log(this.data.order)
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