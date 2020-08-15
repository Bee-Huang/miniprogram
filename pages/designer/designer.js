var util = require('../../utils/util.js');
const { formatTime } = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    state:'all',
    is_add:false,
    addimg_src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/jia.png',
    all_order:[],
    mine_order:[],
    history_order:[],
    designer:[],
  },

click1:function(){
    this.setData({
      state:'all'
    })
},

click2:function(){
    this.setData({
      state:'mine'
    })
},

click3:function(){
    this.setData({
      state:'history'
    })
},

cheak_img1:function(e){
  // console.log(e.currentTarget.dataset.src)
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
  console.log(e);
  // console.log(e.currentTarget.dataset.parent)
  // console.log(e.currentTarget.dataset.childid)
  var parent_id=e.currentTarget.dataset.parent
  var child_id=e.currentTarget.dataset.childid
  var that=this
  wx.chooseImage({
    count: 4,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (res) {
      console.log(res);
      for(let i=0;i<that.data.mine_order.length;i++){
        if(that.data.mine_order[i].uid==e.currentTarget.dataset.uid){
          var dd='mine_order['+i+'].designpic'
          that.setData({
            [dd]:res.tempFilePaths
          })
        }
      }
    }
  }) 

},

designer_input:function(e){
  // console.log(e.currentTarget.dataset.id)
  var id=e.currentTarget.dataset.id
  // console.log(e.detail.value)
  var word='order['+id+'].designer_words'
  this.setData({
    [word]:e.detail.value
  })
},

receive_click:function(e){
  var that=this
  console.log(e);
  console.log(e.currentTarget.dataset.id)
  var id=e.currentTarget.dataset.id
  console.log(this.data.all_order[id].uid);
  console.log(this.data.designer.designer_id);
  wx.showModal({
    title: '提示',
    content: '是否确定接单',
    success (res) {
      if (res.confirm) {
        const db = wx.cloud.database()
        db.collection('order')
        .where({
        uid:that.data.all_order[id].uid
        })
        .update({
        data:{
        designer_id:that.data.designer.designer_id,
        },success:function(res){
          wx.showToast({
            title: '接单成功',
            icon: 'success',
            duration: 600
          })
          that.all_order()
          that.mine_order()
          that.history_order()
        }
        })
      } else if (res.cancel) {
        // console.log('用户点击取消')
      }
    }
  })
  
  // const db = wx.cloud.database()
  // db.collection('order')
  // .where({
  //   uid:that.data.all_order[id].uid
  // })
  // .update({
  //   data:{
  //     designer_id:that.data.designer.designer_id,
  //   },success:function(res){
  //     wx.showToast({
  //       title: '接单成功',
  //       icon: 'success',
  //       duration: 600
  //     })
  //     that.all_order()
  //     that.mine_order()
  //     that.history_order()
  //   }
  // })
  
},

submit_click:function(e){
  var that=this
  console.log(e.currentTarget.dataset.uid);
  console.log(e.currentTarget.dataset.index);
  let index=e.currentTarget.dataset.index
  if(that.data.mine_order[index].designpic==undefined){
    wx.showToast({
      title: '请上传设计图案',
      icon: 'none',
      duration: 1500
    })
    return
  }
  wx.showModal({
    title: '提示',
    content: '是否确定提交',
    success (res) {
      if (res.confirm) {
        if(that.data.mine_order[index].designpic!=undefined){
          const db = wx.cloud.database()
            db.collection('order')
            .where({
              uid:e.currentTarget.dataset.uid
            })
            .update({
              data:{
                designpic:that.data.mine_order[index].designpic,
              },
              success:function(res){
                console.log(res);
                that.setData({
                  mine_order:that.data.mine_order
                })
                wx.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 600
                })
                that.mine_order()
                that.history_order()
              }
            })    
        }
      } else if (res.cancel) {
        // console.log('用户点击取消')
      }
    }
  })



  // if(this.data.mine_order[index].designpic!=undefined){
  //   const db = wx.cloud.database()
  //     db.collection('order')
  //     .where({
  //       uid:e.currentTarget.dataset.uid
  //     })
  //     .update({
  //       data:{
  //         designpic:this.data.mine_order[index].designpic,
  //       },
  //       success:function(res){
  //         console.log(res);
  //         that.setData({
  //           mine_order:that.data.mine_order
  //         })
  //         wx.showToast({
  //           title: '提交成功',
  //           icon: 'success',
  //           duration: 600
  //         })
  //         that.mine_order()
  //         that.history_order()
  //       }
  //     })
      
  // }
  // else{
  //   wx.showToast({
  //     title: '请上传设计图案',
  //     icon: 'none',
  //     duration: 1500
  //   })
  // }
  
},

getopenid:function(){
  var that=this
  wx.cloud.init()
    wx.cloud.callFunction({
      name: 'openid',
      data: {
        weRunData: wx.cloud.CloudID('wxpay-8jkfa')
      },
      success(res){
    // console.log(res.result.userInfo.openId)
        that.setData({
          openid:res.result.userInfo.openId
        })
// console.log(that.data.openid)
        that.login(res.result.userInfo.openId);
      },
      fail:function(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })
},

login:function(e){
  var that=this
  const db = wx.cloud.database()
  db.collection('designer')
  .where({
    _openid:e
  })
  .get({
    success:function(res){
      // console.log(res.data.length);
      if(res.data.length!=0){
        wx.showToast({
          title: '欢迎'+res.data[0].name,
          icon: 'none',
          duration: 1500
        })
        that.setData({
          designer:res.data[0]
        })
        // console.log(that.data.designer.designer_id)
      }
      else{
        wx.showToast({
          title: '你想干什么',
          icon: 'none',
          duration: 1500
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1500);
      }
    },
    fail:function(){
      wx.showToast({
        title: '你想干什么',
        icon: 'none',
        duration: 1500
      })
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 1500);
    }
  })
},

all_order:function(){
  var that=this
  const db = wx.cloud.database()
  db.collection('order')
  .get({
    success:function(res){
      // console.log(res.data);
      if(res.data.length>0){
        that.setData({
          all_order:res.data
        })
        //that.deal_order();
      }
    }
  })
},

mine_order:function(){
  var that=this
  // console.log(this.data.designer);
  // console.log(that.data.designer);
  const db = wx.cloud.database()
  db.collection('order')
  .where({
    designer_id:this.data.designer.designer_id
  })
  .get({
    success:function(res){
      // console.log(res.data)
      if(res.data.length>0){
        var array=[]
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].designpic==undefined&&res.data[i].userpic!=undefined){
            array.push(res.data[i])
          }
        }
        that.setData({
          mine_order:array
        })
      }
    }
  })
},

history_order:function(){
  var that=this
  // console.log(this.data.designer.designer_id);
  const db = wx.cloud.database()
  db.collection('order')
  .where({
    designer_id:this.data.designer.designer_id
  })
  .get({
    success:function(res){
      // console.log(res);
      if(res.data.length>0){
        var array=[]
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].designpic!=undefined){
            array.push(res.data[i]);
          }
        }
        that.setData({
          history_order:array
        })
      }
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  // 执行完 this.getopenid()、that.all_order()，650毫秒后再执行that.mine_order()、that.history_order(),从而获得designer.designer_id
  onLoad: function (options) {
    var that=this
    this.getopenid()
    that.all_order()
    setTimeout(function() {
      that.mine_order()
      that.history_order()
    }, 1000);
    
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