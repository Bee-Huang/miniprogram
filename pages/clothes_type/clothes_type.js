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
    info:[]
   },


   getinfo:function(){
      var infomation=[];
      const small_type=this.data.type_small[this.data.nav_id];
      var big_type=this.data.type[this.data.nav_id].text;
      var i=0;
      for(i=0;i<small_type.length;i++){
        //console.log(this.data.type[this.data.nav_id].text+","+small_type[i]);
        let small_infomation={type:i,data1:[],data2:[]}
        const db = wx.cloud.database()
        db.collection('list')
        .where({
          keyword:this.data.type[this.data.nav_id].text+","+small_type[i]
        })
        .limit(6)
        .get({
          success:function(res){ 
            if(res.data.length>0){
                var o=0;
                for(o=0;o<res.data.length;o++){
                  var tmp={text:res.data[i].code,src:res.data[i].img_src}
                  if(o<3)
                    small_infomation.data1.push(tmp)
                  else
                    small_infomation.data2.push(tmp)
                }
                console.log(small_infomation);
                small_infomation.type=small_type[small_infomation.type]
                infomation.push(small_infomation)
            }    
          }
        })
      }
      this.setData({
        info:infomation
      })
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
      this.getinfo();
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