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
          {id:10,text:'时装',icon:''}],
    type_son:[{type:'圆领短袖',
    data1:[{text:'QX 190# 180G',src:'http://cdn.okktee.com/o_1ebfk97kbqfqvqu9121bdh15dqn.jpg?imageView2/2/w/320/h/320/q/90'},{text:'BMY 5810# 200G',src:'http://cdn.okktee.com/o_1ec9lr9hg1fdg14i317i1fevi4t33.jpg?imageView2/2/w/320/h/320/q/90'},{text:'HBT 806#',src:'http://cdn.okktee.com/o_1dd24vp641n261e271s6t11jh1f7ah.jpg?imageView2/2/w/320/h/320/q/90'}],
    data2:[{text:'BMY YC190-C',src:'http://cdn.okktee.com/o_1e5rftpoq6i88111jtf1v9n12n01r.jpg?imageView2/2/w/320/h/320/q/90'},{text:'BMY WC190-C',src:'http://cdn.okktee.com/o_1e5rgcbv714ab1hfb1ip1o8f17a2t.jpg?imageView2/2/w/320/h/320/q/90'},{text:'HL 6880#',src:'http://img.qudache.cn//pictures/2018-09-07/5b91edc18af23.jpg!labrand'}]
    }]

   },

   switchRightTab:function(e){
     console.log(e);
     console.log(e.currentTarget.dataset.id);
     this.setData({
      nav_id:e.currentTarget.dataset.id
     })
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