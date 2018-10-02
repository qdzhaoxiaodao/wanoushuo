//全局函数调用
export default {
  //限制字符数，不限制字符类型
  limitNumberUnlimitType(min, max, val) {
    var jmz = {};
    jmz.GetLength = function (str) {
      return str.replace(/[\u0391-\uFFE5]/g, "aa").length; //先把中文替换成两个字节的英文，在计算长度
    };
    var nameLength = jmz.GetLength(val);
    console.log(nameLength)
    if (nameLength <= max && nameLength >= min) {
      return true;
    } else {
      return false;
    }
  },
  //纯数字判断
  isNumber(val) {
    var reg = /^\d+(?=\.{0,1}\d+$|$)/;
    if (reg.test(val)) return true;
    return false;
  },
  //限制min~max字符，仅支持中英文
  limitNumberAndType(min, max, val) {
    var min = min;
    var max = max;
    var reg = /^[\u4e00-\u9fffa-zA-Z]{min,max}$/;
    if (reg.test(val)) return true;
    return false;
  },
  //手机号电话7-11位数字
  isPhone(val) {
    var iphone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    var num = /^\d{7}$/;
    if (iphone.test(val) || num.test(val)) return true;
    return false;
  }
}
