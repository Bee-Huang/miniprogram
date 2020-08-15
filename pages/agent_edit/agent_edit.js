// pages/agent_edit/agent_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_progress:0,
    order_details:{},
    deposit:false,
  },

  checkprogress(){
    var type=['订单已提交','代理已接单','设计进行中','厂家生产发货中','已完成']
    for(let i=0;i<type.length;i++){
      if(this.data.order_details.status==type[i]){
        this.setData({
          now_progress:i
        })
      }
    }
  },

  getorderdetail:function(uidd){
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid:uidd
   })
    .get({ 
      success:function(res){
          if(res.data.length>0){
            that.setData({
              order_details:res.data[0],
              deposit:res.data[0].deposit
            })
            that.checkprogress()
          } 
      },
      fail:function(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  prices:function(e){
    var dd='order_details.value.prices'
    this.setData({
      [dd]:e.detail.value
    })
  },

  discount:function(e){
    var dd='order_details.value.discount'
    this.setData({
      [dd]:e.detail.value
    })
  },

  remark:function(e){
    var dd='order_details.value.remark'
    this.setData({
      [dd]:e.detail.value
    })
  },

  values:function(){
    var that=this
    wx.showModal({
      cancelText: '取消',
      confirmText: '确认',
      content: '您设置的定价为'+this.data.order_details.value.prices+',优惠金额为'+this.data.order_details.value.discount+',其他优惠为：'+this.data.order_details.value.remark,
      showCancel: true,
      title: '提示：',
      success: (result) => {
        console.log(result);
        if(result.confirm){
           //点击了确定
           that.update_values();
        }
      }
    })
  },

  //手记：还差个清除用户设计流程功能

  update_values(){
     //
     var that=this
     const db = wx.cloud.database()
     db.collection('order')
     .where({
       uid: this.data.order_details.uid
     })
     .update({
        data: {
          value:this.data.order_details.value,
        },
  
        success:function(res){
          console.log(res);
          
        },
        fail:function(res){
          console.log(res);
        }
     })
  },

  clear:function(res){
    //清楚设计流程的设计信息
   var that=this
    wx.showModal({
      title: '警告',
      content: '你确定要清除该订单的所有设计流程信息吗？',
      success (res) {
        if (res.confirm) {
          wx.showModal({
            title: '警告',
            content: '清除之后所有信息将无法恢复（所选布料、颜色、提交的图案、设计师设计的图案，尺码数量）都无法恢复！！谨慎!!',
            success (res) {
              if (res.confirm) {
                wx.showToast({
                  title: '联系开发者',
                })
              }
            }
          })
        }
      }
    })
  },

  img_click:function(res){
    console.log(res.currentTarget.dataset);
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: res.currentTarget.dataset.urls // 需要预览的图片http链接列表
    })
  },

  update_deposit:function(){
    //
    const dbb = wx.cloud.database()
    console.log(this.data.order_details.uid);
    dbb.collection('order')
    .where({
      uid: this.data.order_details.uid
    })
    .update({
      data: {
        deposit:true
      },
      success:function(res){
        console.log(res);
      },
      fail:function(res){
        console.log(res);
        
      }
    })
  },

  switchchange:function(e){
    var that=this
    console.log(e.detail.value);
    wx.showModal({
      cancelText: '取消',
      confirmText: '确认',
      content: '请确认用户已交定金和已签订合同，确认后不可修改',
      showCancel: true,
      title: '提示：',
      success: (result) => {
        console.log(result);
        if(!result.cancel){
          //点击了确定
          that.update_deposit();
          var dd='order_details.deposit'
          that.setData({
            deposit:true,
            [dd]:true
          })
        }else if(result.cancel){
          that.setData({
            deposit:false
          })
        }
      },
      fail: (res) => {
        that.setData({
          deposit:false
        })
      },
      complete: (res) => {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
    this.getorderdetail(options.uid);
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