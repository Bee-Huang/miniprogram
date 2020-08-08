// pages/clothes_shopping_cart/clothes_shopping_cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectcount:0,
    isallselect:false,
    order_array:[],//这里保存的是本地缓存获取到的清单里面的ID
    details:[],//这里是根据id号获取到的衣服信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  select_tap:function(e){
    var boo=!this.data.details[e.currentTarget.dataset.id].isselect
    var index='details['+e.currentTarget.dataset.id+'].isselect'
    var count=this.data.selectcount
    if(boo)
      count=count+1;
    else
      count=count-1;
    if(count==this.data.details.length){
      this.setData({
        isallselect:true
      })
    }
    this.setData({
      [index]:boo,
      selectcount:count
    })
  },


  getdetails:function(){
    var that=this
    var array=this.data.order_array
    for(let i=0;i<array.length;i++){
      const db = wx.cloud.database()
      db.collection('list')
      .where({
        id:array[i]
      })
      .get({
        success:function(res){
          var tmp=that.data.details
          if(res.data.length>0){
            var ttemp=res.data[0]
            ttemp.isselect=false
            tmp.push(ttemp)
            that.setData({
              details:tmp
            })
          }
        }
      })

    }
  },

  //选择所有
  all_select:function(){
    var boo=!this.data.isallselect;
    for(let i=0;i<this.data.details.length;i++){
      var s='details['+i+'].isselect'
      this.setData({
        [s]:boo
      })
    }
    var len=0
    if(boo)
     len=this.data.details.length;
    this.setData({
      isallselect:boo,
      selectcount:len
    })
  },

  gotodetails:function(e){
      //e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../clothes_detail/clothes_detail?id='+this.data.details[e.currentTarget.dataset.id].id+"&prices="+this.data.details[e.currentTarget.dataset.id].prices
      })
  },

  longtap:function(e){
    var that=this
    wx.showModal({
      title: '删除',
      content: '删除这条清单记录？',
      success (res) {
        if (res.confirm) {
          var array=that.data.details
          array.splice(e.currentTarget.dataset.id,1);
          that.setData({
            details:array
          })
          if(that.data.selectcount!=0){
            var count=that.data.selectcount-1
            that.setData({
              selectcount:count
            })
          }
          var ids=[]
          for(let i=0;i<array.length;i++)
            ids.push(array[i].id)
          wx.setStorage({
            key:"order",
            data:ids,
            success:function(res){
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 1500
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  gotoorder:function(){
    if(this.data.selectcount==0){
      wx.showToast({
        title: '至少选择一个',
        icon: 'none',
        duration: 2000
      })
    }else{
        var array=[]
        for(let i=0;i<this.data.details.length;i++)
          if(this.data.details[i].isselect)
            array.push(this.data.details[i])
        wx.setStorage({
          key:"order_tmp",
          data:array,
          success:function(res){
              wx.navigateTo({
                url: '../clothes_place-order/clothes_place-order'
              })
          }
        })
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
    var that=this
    wx.cloud.init()
    wx.getStorage({
      key: 'order',
      success (res) {
        that.setData({
          order_array:res.data
        })
        that.getdetails();
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      details:[]
    })
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