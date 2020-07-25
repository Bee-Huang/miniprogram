// pages/clothes_type/clothes_type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_id:0,//现在显示的id
    type:[{id:0,text:'T恤',icon:''},{id:1,text:'POLO',icon:''},
          {id:2,text:'卫衣卫裤',icon:''},{id:3,text:'风衣马甲',icon:''},
          {id:4,text:'职业装',icon:''},{id:5,text:'运动系列',icon:''},
          {id:6,text:'劳保服',icon:''},{id:7,text:'冲锋衣套装',icon:''},
          {id:8,text:'其他',icon:''},{id:9,text:'裤子',icon:''},
          {id:10,text:'时装'}],
    type_small:[["圆领短袖","圆领长袖","V领","中袖","背心"],["翻领短袖","翻领长袖","立领短袖"],["圆领卫衣","带帽套头卫衣","带帽拉链卫衣","卫裤","立领卫衣","棒球服"],["风衣","马甲"],["短袖衬衫","西装外套","西裤","西裙","长袖衬衫","西装马甲","西装套装"],["篮球服","足球服","运动训练服","瑜伽健身服","乒羽服","休闲运动裤"],["劳保服"],["冲锋衣","冲锋裤"],["短裤","休闲运动裤"],["时装"],["帽子","围裙","围巾","袜子"]],
    info:[],
    info2:[]
   },

   switchRightTab:function(e){
     console.log(e);
     console.log(e.currentTarget.dataset.id);
     this.setData({
      nav_id:e.currentTarget.dataset.id
     })
     this.getinfo();
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.init()
      var that=this
      this.setData({
        nav_id:options.index
      })
      let small_type=this.data.type_small[0];
      var i=0;
      var array=[]
      for(i=0;i<small_type.length;i++){
        const db = wx.cloud.database()
        db.collection('list')
        .where({
          keyword: 'T恤,'+small_type[i]
        })
        .limit(6)
        .get({
          success:function(res){
            var type_tmp=res.data[0].keyword.split(',')[1];
            var tmp={type:type_tmp,data:res.data}
            array.push(tmp)
            that.setData({
              info2:array
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