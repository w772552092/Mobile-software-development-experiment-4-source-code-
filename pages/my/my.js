// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:"未登录",
    src:"/images/index1.png",

    newsList:[],

    number: 0
  },

  getMyInfo: function(e) {
   
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          isLogin: true
          
        })
        //获取新闻列表
        this.getMyFavorites()
      },
    })

  },

  //更新Number的函数
  getMyFavorites:function(e){
    let info = wx.getStorageInfoSync() //读取本地缓存信息
    let keys = info.keys //获取全部key信息
    let num = keys.length //获取收藏新闻数量

    let myList = [];
    for(var i = 0;i < num; i++){
        let obj = wx.getStorageSync(keys[i])
        myList.push(obj)
    }

    //更新收藏列表
    this.setData({
        newsList:myList,
        number: num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.clearStorage({
      success: (res) => {},
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
    if(this.data.isLogin){
        this.getMyFavorites()
    }
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