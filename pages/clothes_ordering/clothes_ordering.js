// pages/clothes_ordering/clothes_ordering.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 20,
    all_number: 0,
    all_money: 0, 
    is_select_color:-1,
    color:[
      {
        id:0,
        color:'red',
        text:'红色',
        is_select:'false'
      },
      {
        id:1,
        color:'black',
        text:'黑色',
        is_select:'false'
      },
      {
        id:2,
        color:'blue',
        text:'蓝色',
        is_select:'false'
      },
      {
        id:3,
        color:'green',
        text:'绿色',
        is_select:'false'
      },
      {
        id:4,
        color:'purple',
        text:'紫色',
        is_select:'false'
      },
      {
        id:5,
        color:'orange',
        text:'橙色',
        is_select:'false'
      },
      {
        id:6,
        color:'yellow',
        text:'黄色',
        is_select:'false'
      },
      {
        id:7,
        color:'#F5F5F5',
        text:'白色',
        is_select:'false'
      },
    ],
    data:[
      {
        id:0,
        size_data:'XS',
        number_data:0,
      },
      {
        id:1,
        size_data:'S',
        number_data:0,
      },
      {
        id:2,
        size_data:'M',
        number_data:0,
      },
      {
        id:3,
        size_data:'L',
        number_data:0,
      },
      {
        id:4,
        size_data:'XL',
        number_data:0,
      },
      {
        id:5,
        size_data:'XXL',
        number_data:0,
      },
      {
        id:6,
        size_data:'XXXL',
        number_data:0,
      },
    ]

  },

  color_click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      is_select_color:e.currentTarget.dataset.id
    })
  },

  reduce_click:function(e){
    var number=e.currentTarget.dataset.number;
    var id=e.currentTarget.dataset.id;
    var array=this.data.data;
    for(var i=0;i<=array.length;i++){
      if(i==id){
        if(array[i].number_data==0){
          wx.showToast({
            title: '一件都没有，减个屁啊',
            icon: 'none',
            duration: 2000
          })
        }
        else{
          array[i].number_data-=1
          this.data.all_number-=1
          this.data.all_money=this.data.price*this.data.all_number
        }
      }
    }
    this.setData({
      data:array,
      all_number:this.data.all_number,
      all_money:this.data.all_money
    })
  },

  add_click:function(e){
    var number=e.currentTarget.dataset.number;
    var id=e.currentTarget.dataset.id;
    var array=this.data.data;
    for(var i=0;i<=array.length;i++){
      if(i==id){
        array[i].number_data+=1
        this.data.all_number+=1
        this.data.all_money=this.data.price*this.data.all_number
      }
    }
    this.setData({
      data:array,
      all_number:this.data.all_number,
      all_money:this.data.all_money
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