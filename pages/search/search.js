// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_keywords:'',
    hot_keywords:[
      {
       id:0,
       name:''
      }
    ],

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

  inputkeyword:function(e){
    this.setData({
      user_keywords:e.detail.value
    })
  },


  search:function(){
  
    this.data.hot_keywords.push({
     id:1,
     name: this.data.user_keywords
   })
    this.setData({
      hot_keywords:this.data.hot_keywords,
  })
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
    this.setData({
      user_keywords:this.data.keywords[index].name
    })
  }

  
})