
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openid:'',
      id:0,
      agent:{},
      order_text:[
        {
          id:0,
          text:'全部'
        },
        {
          id:1,
          text:'已接单'
        },
        {
          id:2,
          text:'设计中'
        },
        {
          id:3,
          text:'待收货'
        },
        {
          id:4,
          text:'已完成'
        } 
      ],
      order_details:[]
  },

  click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      id:e.currentTarget.dataset.id
    })
    this.getindexdata(e.currentTarget.dataset.id)
  },

  click1:function(e){
    console.log(e.currentTarget.dataset.uid);
    wx.navigateTo({
      url: '../order_details/order_details?type=0&uid='+e.currentTarget.dataset.uid,
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  click_tap:function(e){
    this.setData({
      id:e.currentTarget.dataset.id
    })
    if(this.data.id==0)
      this.getdata()
    else
      this.getmydata()
  },

  deal_time(){
    for(let i=0;i<this.data.order_details.length;i++){
        var tmp=this.data.order_details[i].time
        tmp=tmp.substring(0,4)+"-"+tmp.substring(4,6)+"-"+tmp.substring(6,8)+" "+tmp.substring(8,10)+":"+tmp.substring(10,12)
        var ii='order_details['+i+'].time'
        this.setData({
          [ii]:tmp
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '验证身份中',
    })
    this.setData({
        id:options.id
    })
    wx.cloud.init()
    this.getopenid();
  },

  login:function(openid){
    var that=this
    const db = wx.cloud.database()
    db.collection('agent')
    .where({
      _openid:openid
   })
    .get({ 
      success:function(res){
        console.log(res);
        if(res.data.length==0){
          wx.hideLoading({})
          wx.showToast({
            title: '身份验证失败',
            icon:'none',
            duration:1500
          })
          setTimeout(() => {
            wx.navigateBack({
              delta: 0,
            })
          }, 1500);
        }else{
          that.setData({
            agent:res.data[0]
          })
          that.getdata(that.data.id);
          wx.hideLoading({})
          wx.showToast({
            title: '欢迎'+that.data.agent.name,
            icon:'success',
            duration:2000
          })
        }
      }
    })
  },

  getmydata:function(){
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      agent:this.data.agent.agent_id
   })
    .get({ 
      success:function(res){
        console.log(res);
        

        that.setData({
          order_details:res.data
        })
        that.deal_time()
      },
      fail:function(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  getdata:function(){
    //获取全部数据
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      status:'订单已提交'
   })
    .get({ 
      success:function(res){
        console.log(res);
        that.setData({
          order_details:res.data
        })
        that.deal_time()
      },
      fail:function(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })

  },

  getopenid(){
    var that=this
    wx.cloud.callFunction({
      name: 'openid',
      data: {
        weRunData: wx.cloud.CloudID('wxpay-8jkfa')
      },
      success(res){
        that.setData({
          openid:res.result.userInfo.openId
        })
        that.login(res.result.userInfo.openId);
      },
      fail:function(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  recevice:function(e){
    var that=this
    console.log(e.currentTarget.dataset.uid);
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid: e.currentTarget.dataset.uid
    })
    .update({
      data: {
        agent:this.data.agent.agent_id,
        status:'代理已接单'
      },
      success:function(res){
        console.log(res.stats.updated);
        if(res.stats.updated>0){
          that.getdata();
        }
      }
    })
    
  },
  to_detail:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../agent_edit/agent_edit?uid='+e.currentTarget.dataset.uid,
    })
  } 
  
})