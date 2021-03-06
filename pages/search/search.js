// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_keywords:'',
    hot_keywords:[],
    keywords:[
      {
        id:0,
        name:'GDS',
      },
      {
        id:1,
        name:'LKL',
      },
      {
        id:2,
        name:'POLO',
      },
      {
        id:3,
        name:'新款卫衣',
      },
      {
        id:4,
        name:'冲锋衣',
      },
      {
        id:4,
        name:'维方斯',
      },
      {
        id:5,
        name:'XBHD',
      },
      {
        id:6,
        name:'JD',
      },
      {
        id:7,
        name:'76000',
      },
      {
        id:8,
        name:'63000',
      },
      {
        id:9,
        name:'GTSH',
      },
    ]
  },

  onload:function(option){
    hot_keywords=[]
  },

  inputkeyword:function(e){
    this.setData({
      user_keywords:e.detail.value
    })
  },

  onshow:function(){

  },

  search:function(){
    this.data.hot_keywords.push({
     id:1,
     name: this.data.user_keywords
   })
    this.setData({
      hot_keywords:this.data.hot_keywords,
  })
  wx.navigateTo({
    url: '/pages/clothes_list/clothes_list?type=0&word='+this.data.user_keywords,
  });
  },

  clean:function(){
    this.data.hot_keywords=[];
    this.setData({
      hot_keywords:this.data.hot_keywords,
    })
  },

  click_keyword:function(e){
    var index=e.currentTarget.dataset.id
    this.data.user_keywords=this.data.keywords[index].name
    console.log(this.data.user_keywords)
     this.data.hot_keywords.push({
        id:1,
        name: this.data.user_keywords
      })
    this.setData({
      hot_keywords:this.data.hot_keywords,
      user_keywords:this.data.keywords[index].name,
    })
    wx.navigateTo({
      url: '/pages/clothes_list/clothes_list?word='+this.data.user_keywords,
    });
  }
})