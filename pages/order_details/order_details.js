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
    design_count:false,
    agent:undefined,
    color:'红色',
    size:'S',
    number:10,
    all_number:10,
    all_money:19.90,
    imgUrl:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
  },

  click:function(){
    if(this.data.order_details.status!='订单已提交'){
      if(this.data.order_details.deposit){
          if(this.data.now_progress>2){
            wx.showToast({
              icon:'none',
              title: '已经完成啦…',
              duration:1500
            })
          }else{
            wx.setStorage({
              key:"design_tmp",
              data:this.data.order_details.sample_list
            })
            wx.navigateTo({
              url: '../clothes_ordering/clothes_ordering?uid='+this.data.uid
            });
          }
      }else{
        wx.showToast({
          icon:'none',
          title: '还没签订合同…',
          duration:1500
        })
      }
    }else{
      wx.showToast({
        icon:'none',
        title: '代理还没接单哦！',
        duration:1500
      })
    }
  },

  click1:function(e){
    console.log(e.currentTarget.dataset.src)
    wx.previewImage({
      urls: [e.currentTarget.dataset.src], //需要预览的图片http链接列表，注意是数组
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接，默认是第一个
    })
  },

  check_progress(){
     console.log(this.data.order_details.confirm_type);
      if(this.data.order_details.confirm_type!=undefined){
         this.setData({
          confirm_count:true
         })
      }
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
        that.deal_time();
        that.checkcount();
        that.getagent(res.data[0].agent);
        that.check_progress();
        wx.hideLoading({
          success: (res) => {},
        })
      }
     }
    })
  },

  getagent:function(id){
    var that=this
    var agent_idd=parseInt(id)
    const db = wx.cloud.database()
    db.collection('agent')
    .where({
      agent_id:agent_idd
   })
   .get({ 
     success:function(res){
        if(res.data.length>0){
          that.setData({
            agent:res.data[0]
          })
        }
     }
    })
  },

  deal_time(){
    var tmp=this.data.order_details.time
    tmp=tmp.substring(0,4)+"-"+tmp.substring(4,6)+"-"+tmp.substring(6,8)+" "+tmp.substring(8,10)+":"+tmp.substring(10,12)
    var ttmp=this.data.order_details
    ttmp.time=tmp
    this.setData({
      order_details:ttmp
    })
  },

  checkcount:function(){
    var type=['订单已提交','代理已接单','设计进行中','厂家生产发货中','已完成']
    for(let i=0;i<type.length;i++){
      if(this.data.order_details.status==type[i]){
        this.setData({
          now_progress:i
        })
      }
    }
  },

  agnetimg:function(){
    wx.previewImage({
      urls: [this.data.agent.qrcode], //需要预览的图片http链接列表，注意是数组
      current: this.data.agent.qrcode, // 当前显示图片的http链接，默认是第一个
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
    this.getorderdata();
    
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