export default {
  /**
   * token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "iView-admin",
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  // * @description 默认打开的首页的路由name值，默认为home
  // */
  homeName: "home",
  baseUrl: {
    dev: "/api",
    // dev: "/api",  //跨域配置
    alp: "线上测试环境测试",
    pro: "https://easy-mock.com/mock/5c416d4e0bb19c6a02e017b0/example/"
  }
};
