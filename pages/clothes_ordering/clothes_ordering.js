// pages/clothes_ordering/clothes_ordering.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:'',
    now_progress:0,
    progress:['选择衣服材料/颜色','选择/提交图案要求给设计师'
              ,'设计师设计中','选择尺码和数量'],
    clothes:[],
    id:0,
    choose_id:-1,
    order:{},
    all_number: 0,
    all_money: 0, 
    is_select_color:0,
    appear:false,
    color:[],
    picture:[],
    remark:'',
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
    pattern:[
      {
        id:0,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      {
        id:1,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      {
        id:2,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      {
        id:3,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      {
        id:4,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      {
        id:5,
        src:'cloud://wxpay-8jkfa.7778-wxpay-8jkfa-1302658837/12.jpg'
      },
      
    ]
  },

  setsize:function(){
    //这里是获取衣服的码数表
    console.log("id是");
    var ids=this.data.order.confirm_type.id
    console.log(ids);
    var that=this
    const db = wx.cloud.database()
    db.collection('detail')
    .where({
      id: ids
    })
    .get({
      success:function(res){
        if(res.data.length>0){
          var tmp=[]
          for(let i=0;i<res.data[0].size.length;i++){
            console.log(res.data[0].size[i]);
            let obj={}
            obj.id=i
            obj.size_data=res.data[0].size[i]
            obj.number_data=0
            tmp.push(obj)
          }
          console.log(tmp);
          that.setData({
            data:tmp
          })
        }
      }
    })
  },

  cloth_click:function(e){
    this.setData({
      is_select_color:0,
      id:e.detail.current
    })
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

  bigimg:function(e){
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: [e.currentTarget.dataset.src]
    })
  },

  color_click:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      is_select_color:e.currentTarget.dataset.id
    })
  },

  writedatabase_pro1:function(e){
    console.log(e);
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid: this.data.uid
    })
    .update({
      data: {
        confirm_type:{
          id:e.type,
          color:e.color,
          title:e.title,
          img_src:e.img_src
        },
        status:'设计进行中'
      },
      success:function(res){
        if(res.errMsg=="collection.update:ok"){
           var order_tmp=that.data.order
            order_tmp.confirm_type=e
            that.setData({
              now_progress:1,
              order:order_tmp
            })
        }
      }
    })
  },

  wirteimg:function(){
    wx.showLoading({
      title: '上传中…',
    })
    var that=this
    var array=[]
    for(let i=0;i<this.data.picture.length;i++){
      let pic=this.data.picture[i]
       let tmp1=pic.split(".")
       let suffix=tmp1[tmp1.length-1]
       wx.cloud.uploadFile({
        cloudPath: 'design/'+this.data.uid+i+"."+suffix,
        filePath: this.data.picture[i],
        success: res => {
          array.push(res.fileID)
          console.log(array);
          that.updateimg(array)
        }
      })
    }  
  },

  updateimg:function(array){
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid: this.data.uid
    })
    .update({
      data: {
        userpic:{
          item:array,
          remarks:this.data.remark,
          status:'设计进行中'
        }
      },
      success:function(res){
        if(res.errMsg=="collection.update:ok"){
           var order_tmp=that.data.order
            order_tmp.userpic={item:array,remarks:that.data.remark}
            that.setData({
              order:order_tmp
            })
            if(order_tmp.userpic.item.length==that.data.picture.length){
              wx.hideLoading({
                success: (res) => {},
              })
              wx.showToast({
                title: '上传成功…',
                icon:'success',
                duration:1500
              })
              setTimeout(function () {
                  that.setData({
                    now_progress:2
                  })
              }, 1500)
            }
        }
      }
    })
  },

  reamark:function(e){
    this.setData({
      remark:e.detail.value
    })
  },

  chooess:function(){
    var that=this
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            picture:tempFilePaths,
          })
          console.log(that.data.picture)
          
      }
    })
  },

  sure_click:function(){
    var that=this
    wx.showModal({
      title: '确认选择',
      content: '选择的布料是：'+this.data.clothes[this.data.id].title+"   颜色是："+this.data.clothes[this.data.id].color[this.data.is_select_color].name,
      success (res) {
        if (res.confirm) {
            var obj={type:that.data.clothes[that.data.id].id,color:that.data.clothes[that.data.id].color[that.data.is_select_color].name,title:that.data.clothes[that.data.id].title,img_src:that.data.clothes[that.data.id].swiper[that.data.is_select_color].src}
            that.writedatabase_pro1(obj);
        } else if (res.cancel) {
            console.log('用户点击取消')
        }
      }
    })

  },

  Start: function(e) {
    this.setData({
      startTime: e.timeStamp
    })
  },

  End: function(e) {
    this.setData({
      endTime: e.timeStamp
    })
  },

  choose_img_click: function(e) {
      if(this.data.endTime  - this.data.startTime < 300) {
        console.log(e.currentTarget.dataset.id)
        this.setData({
          pattern_id:e.currentTarget.dataset.id
        })
      }
  },

  check_img_click:function(e){
    var that=this
    // console.log(e.currentTarget.dataset.id)
    var id=e.currentTarget.dataset.id
    // console.log(that.data.pattern[id].src)
    wx.previewImage({
      current: that.data.pattern[id].src ,// 当前显示图片的http链接
      urls: [that.data.pattern[id].src] // 需要预览的图片http链接列表
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

  getcolthes(detail){
    var that=this
    const db = wx.cloud.database()
    db.collection('detail')
    .where({
      id:detail.id
   })
   .get({ 
     success:function(res){
       if(res.data.length>0){
         var array=that.data.clothes
         var obj=res.data[0]
         obj.prices=detail.prices
         array.push(res.data[0])
         that.setData({
           clothes:array
         })
       }
     }
    })
  },

  check_progress:function(){
    if(this.data.order.confirm_type!=undefined){
      this.setData({
        now_progress:1
      })
    }
     //继续检查是否已经选择照片
     if(this.data.order.userpic!=undefined){
      this.setData({
        now_progress:2
      })
    }
    //继续检查是否设计师已经提交效果图
    if(this.data.order.designpic!=undefined){
      this.setData({
        now_progress:3
      })
      console.log('aaa');
      this.setsize();
    }
  },

  showdesign_code(){
      this.getorder_details();//更新数据
      if(this.data.order.designer_id!=undefined){ 
        var that=this
        const db = wx.cloud.database()
        db.collection('designer')
        .where({
          designer_id: this.data.order.designer_id
        })
        .get({
          success:function(res){
            if(res.data.length>0){
              wx.previewImage({
                current: res.data[0].qrcode,
                urls: [res.data[0].qrcode]
              })
            }
          }
        })
      }else{
        //还没有设计师接单
        wx.showToast({
          title: '正在安排设计师',
          icon:'none',
          duration:1500
        })
      }
  },

  submit_order:function(e){
    //整体订单提交
    var that=this
    wx.showModal({
      cancelColor: 'cancelColor',
      cancelText: '再想想',
      confirmColor: 'confirmColor',
      confirmText: '确认提交',
      content: '确定提交吗？提交后不可修改哦',
      showCancel: true,
      title: '提交?',
      success: (result) => {
        console.log(result);
        if(result.confirm){
            wx.showLoading({
              title: '提交中……',
            })
            if(that.data.all_number!=0){
              that.update_cout();
            }else{
              wx.hideLoading({
                success: (res) => {},
              })
              wx.showToast({
                title: '请选择数量',
                icon:'none',
                duration:1500
              })
            }
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })


   
  },

  update_cout:function(){
    var that=this
    const db = wx.cloud.database()
    db.collection('order')
    .where({
      uid: this.data.uid
    })
    .update({
      data: {
        confirm_size:this.data.data,
        status:'厂家生产发货中'
      },
      success:function(res){
        wx.hideLoading({
          success: (res) => {},
        })
        wx.showToast({
          title: '提交成功',
          icon:'success',
          duration:1500
        })
        setTimeout(function(){
          wx.navigateBack({
            delta: 0,
          })
        },1500)
      }
    })
  },

  number_input:function(e){
    console.log(e.currentTarget.dataset.id);
    var index=e.currentTarget.dataset.id
    var number=e.detail.value
    if(number!=''){
       number=parseInt(number)
       var ii='data['+index+'].number_data'
       this.setData({
         [ii]:number
       })
    }else{
      //为空
      var ii='data['+index+'].number_data'
      this.setData({
        [ii]:0
      })
    }
    //统计所有码数
    var total=0
    for(let i=0;i<this.data.data.length;i++)
      total=total+this.data.data[i].number_data
    this.setData({
      all_number:total
    })
  },

  designed_img:function(e){
    console.log(e.currentTarget.dataset.src);
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.order.designpic
    })
  },

  getorder_details:function(){
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
            order:res.data[0]
          })
          that.check_progress();
       }
     }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.cloud.init()
    wx.getStorage({
      key: 'design_tmp',
      success (res) {
        if(res.data.length>0)
          for(let i=0;i<res.data.length;i++)
            that.getcolthes(res.data[i])
      }
    })
    this.setData({
      uid:options.uid
    })
    this.getorder_details();
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