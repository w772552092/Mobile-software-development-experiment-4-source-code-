// pages/index/index.js
var common = require("../../utils/common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {src:"http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg"},
      {src:"http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg"},
      {src:"http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg"}
    ],

    newsList:[]

  },

  goToDetail:function(e){
    //获取和data-id匹配的对象的数据
    let id = e.currentTarget.dataset.id
    //携带新闻id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      let list = common.getNewList()
      this.setData({
        newsList:list
      })
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