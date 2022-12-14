// pages/detail/detail.js
var common = require("../../utils/common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{},
    isAdd:false
  },

  //添加收藏
  addFavourites : function(){
    let article = this.data.article
    //缓存文件
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd:true
    })
  },
  //删除收藏
  cancelFavourites :function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //页面一加载就得到新闻id
    // console.log(options.id)
      let id = options.id
      //调用通过id得到新闻内容的函数
      // let result = common.getNewsDetail(id)
      // console.log(result)
      // if(result.code == '200'){
      //   this.setData({
      //     article:result.news
      //   })
      // }  
      
      //检查当前新闻是否在收藏夹中
      var newarticle = wx.getStorageSync(id)
      //已存在
      if(newarticle != ''){
        this.setData({
          isAdd : true,
          article: newarticle
        })
      }else{
        let result = common.getNewsDetail(id)
        //获取新闻内容
        if(result.code == '200'){
          this.setData({
            article:result.news,
            isAdd: false
          })
        }  
      }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})