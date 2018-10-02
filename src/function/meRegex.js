//全局函数调用
export default {

  //手机号码 11位数字
  isPhone(val) {
    const phone = /^1[0-9]{10}$/;
    return phone.test(val);
  },

  //密码 6-16位 必须包含字母跟数字
  isPassword(val) {
    const pwdReg = /^(?![^a-zA-Z]+$)(?!\D+$)/; //数字与字母组合
    return pwdReg.test(val) && val.length >= 6 && val.length <= 16;
  }
  // 账号密码校验

}
