// pages/clothes_ordering/clothes_ordering.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    choose_id:-1,
    price: 20,
    all_number: 0,
    all_money: 0, 
    is_select_color:-1,
    appear:false,
    color:[],
    cloth_color:{
      id:0,
      text:'',
      money:'',
      src:'',
      color:''
      },
      
        
      

    cloth:[
      {
        id:0,
        text:'冰丝',
        money:'19.9',
        src:"../../images/dashazi.jpg",
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
          {
            id:8,
            color:'red',
            text:'红色',
            is_select:'false'
          },
          {
            id:9,
            color:'black',
            text:'黑色',
            is_select:'false'
          },
          {
            id:10,
            color:'blue',
            text:'蓝色',
            is_select:'false'
          },
          {
            id:11,
            color:'green',
            text:'绿色',
            is_select:'false'
          },
          {
            id:12,
            color:'purple',
            text:'紫色',
            is_select:'false'
          },
          {
            id:13,
            color:'orange',
            text:'橙色',
            is_select:'false'
          },
          {
            id:14,
            color:'yellow',
            text:'黄色',
            is_select:'false'
          },
          {
            id:15,
            color:'#F5F5F5',
            text:'白色',
            is_select:'false'
          },
        ],
      },
      {
        id:1,
        text:'76000',
        money:'19.9',
        src:"../../images/dashazi.jpg",
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
      },
      {
        id:2,
        text:'牛奶丝',
        money:'19.9',
        src:"../../images/dashazi.jpg",
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
      },
      {
        id:3,
        text:'76000',
        money:'19.9',
        src:"../../images/dashazi.jpg",
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
      },
      {
        id:4,
        text:'牛奶丝',
        money:'19.9',
        src:"../../images/dashazi.jpg",
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
      }
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
    ],
    
  },



  cloth_click:function(e){
    // console.log(e.detail.current)
    this.data.id=e.detail.current
    // console.log(this.data.id)
    this.setData({
      is_select_color:-1,
      color:this.data.cloth[this.data.id].color
    })
    console.log(this.data.color)
  },

  choose_click:function(){
    var array=this.data.cloth_color
    array.id=this.data.id
    array.text=this.data.cloth[this.data.id].text,
    array.money=this.data.cloth[this.data.id].money,
    array.src=this.data.cloth[this.data.id].src,
    array.color=''
    this.setData({
      choose_id:this.data.id,
      cloth_color:array
    })
    console.log(this.data.cloth_color)
  },

  color_click:function(e){
    // console.log(e.currentTarget.dataset.id)
    // console.log(this.data.cloth[this.data.id].color[e.currentTarget.dataset.id].color)
    var color=this.data.cloth[this.data.id].color[e.currentTarget.dataset.id].color
    if(this.data.cloth_color.text==''){
      wx.showToast({
        title: '请先选择布料',
        icon: 'none',
        duration: 3000
      })
    }
    else
    this.data.cloth_color.color=color
    
    this.setData({
      cloth_color:this.data.cloth_color,
      is_select_color:e.currentTarget.dataset.id
    })
    console.log(this.data.cloth_color)
  },

  sure_click:function(){
    console.log(this.data.cloth_color)
    if(this.data.cloth_color.text==''&&this.data.cloth_color.color==''){
      wx.showToast({
        title: '请选择布料/颜色',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      wx.showToast({
        title: '布料/颜色提交成功',
        icon: 'success',
        duration: 1000
      })
      this.setData({
      appear:true
    })
    }
    
  },

  choose_img:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
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
            duration: 1000
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
    
    this.setData({
      color:this.data.cloth[this.data.id].color
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