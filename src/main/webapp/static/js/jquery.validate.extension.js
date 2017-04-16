//验证是否选择  author 老马 2015年1月19日15:57:30 
$.validator.addMethod("isSelect", function(value, element) {
	if(value==-1 || value=="" || value==null ){
		return false;
	}
	return true;
}, "请选择!"); 


//手机号码
$.validator.addMethod("isMobile", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);
        var length = value.length;
        return this.optional(element) || (length == 11 && validatePhone(value));
    }
}, "号码格式不正确");


//用户登录名
$.validator.addMethod("isLoginNameLength", function (value, element, params) {

    if (params == true) {
        value = $.trim(value);
        var length = value.length;
        return this.optional(element) || (length < 50);
    }
}, "最大字符50");

//用户登录名
$.validator.addMethod("isLoginName", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);

        var patrn = /^([A-Za-z0-9]|[@])+$/;

        return this.optional(element) || (patrn.test(value));
    }
}, "只能为数字,字母,@");

//用户名
$.validator.addMethod("isUserRealName", function (value, element, params) {
	
    if (params == true) {
        value = $.trim(value);
        return this.optional(element) || validateCnName(value);
    }
}, "4-20位字符,支持汉字,字母,数字,'_','-'组合,不能包含空格");


//姓名
$.validator.addMethod("isName", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);
        return this.optional(element) || validateName(value);
    }
}, "中文名字");
//不能纯数字
$.validator.addMethod("isNumber", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);
        return this.optional(element) || !validateIsNumber(value);
    }
}, "不能为纯数字");

//邮编
$.validator.addMethod("isYoubian", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);
        return this.optional(element) || validateYoubian(value);
    }
}, "");
//QQ
$.validator.addMethod("isQQ", function (value, element, params) {
    if (params == true) {
        value = $.trim(value);
        return this.optional(element) || parseInt(value)>10000;
    }
}, "");


//六位数字验证码
$.validator.addMethod("isMobileCode", function (value, element, params) {

    if (params == true) {
        value = $.trim(value);

        var length = value.length;
        //var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;

        var mobile = /^\d+$/;

        return this.optional(element) || (length == 6 && mobile.test(value));
    }
}, "请输入六位数字");


//开户行
$.validator.addMethod("isBankName", function (value, element, params) {

    if (params == true) {
        var length = getByteRangeLength(value);

        var mobile = /^[\u0391-\uFFE5\w]+$/;
        return this.optional(element) || (length <= 60 && mobile.test(value));
    }
}, "请输入六位数字");

//银行账号
$.validator.addMethod("isBankNumber", function (value, element, params) {

    if (params == true) {
        //        var mobile = /^\d{16}|\d{19}$/;

        //        var result = true;
        //        if (value.length != 16 && value.length != 19)
        //            result = false;

        var mobile = /^[0-9]*$/;

        var result = true;
        if (value.length > 30)
            result = false;

        return this.optional(element) || (mobile.test(value) && result);
    }
}, "银行账号不正确");


//密码规则验证
$.validator.addMethod("isCheckPassword", function (value, element, params) {

    if (params == true) {

        var password = /^(?:([\w])(?!.*?\1{4})){6,18}$/;

        return this.optional(element) || (password.test(value));
    }
}, "字符重复过多");


//密码长度验证
$.validator.addMethod("isPasswordLength", function (value, element, params) {

    if (params == true) {
        var length = value.length;

        return this.optional(element) || (length <= 20 && length >= 6);
    }
}, "密码6-20位");


// 验证不能存在特殊字符
$.validator.addMethod("isSpecialCharacter", function (value, element, params) {

    if (params == true) {
        result = SpecialCharacter(value);


        return this.optional(element) || (!result);
    }
}, "不能有特殊字符");



// 电话号码验证
$.validator.addMethod("isTel", function (value, element, params) {

    if (params == true) {
        return this.optional(element) || validateTel($(element));
    }
}, "电话号码不正确");


//公司名称认证长度
$.validator.addMethod("isCompanyNameLength", function (value, element, params) {

    if (params == true) {
        var companyNameLength = getByteRangeLength(value);
        return this.optional(element) || (companyNameLength <= 30);
    }
}, "最多30个字符");


//公司名称纯中文名称长度验证
$.validator.addMethod("isCompanyNameChinese", function (value, element, params) {
    if (params == true) {
        var companyName = /^([\u4E00-\u9FA5]|\（|\）)*$/;
        var result = true;
        if (companyName.test(value)) {
            if (value.length < 2 || value.length > 15) {
                result = false;
            }
        }

        return this.optional(element) || (result);
    }
}, "中文名2-15个字");


//公司名称认证
$.validator.addMethod("isCompanyName", function (value, element, params) {

    if (params == true) {
        var companyNameLength = getByteRangeLength(value);
        var companyName = /^([\u4E00-\u9FA5]|[a-zA-Z])*$/;
        //var companyName = /^([\u4E00-\u9FA5]|\（|\）)*$/;

        return this.optional(element) || (companyNameLength <= 30 && companyName.test(value));
    }
}, "只能为汉字和字母");


//地址
$.validator.addMethod("isAddress", function (value, element, params) {

    if (params == true) {
        var companyNameLength = getByteRangeLength(value);
        return this.optional(element) || (companyNameLength <= 100);
    }
}, "字符长度最长100");


//是否是邮箱长度
$.validator.addMethod("isEmailLength", function (value, element, params) {

    if (params == true) {
        var companyNameLength = value.length;
        return this.optional(element) || (companyNameLength <= 40);
    }
}, "请正确填写");


//纳税号
$.validator.addMethod("isTax", function (value, element, params) {
    if (params == true) {
        var companyNameLength = value.length;
        var companyName = /^\d+$/;

        return this.optional(element) || (companyNameLength <= 60 && companyName.test(value));
    }
}, "纳税号不符合规范");


//用户信息姓名长度限制
$.validator.addMethod("isUserNameLength", function (value, element, params) {

    if (params == true) {
        var companyNameLength = getByteRangeLength(value);

        return this.optional(element) || (companyNameLength <= 26);
    }
}, "最多26个字符");


//用户信息姓名
$.validator.addMethod("isUserNameChineseLength", function (value, element, params) {

    if (params == true) {
        var companyChinese = /^([\u4E00-\u9FA5])*$/;
        var vResult = true;

        if (companyChinese.test(value)) {
            if (value.length < 2 || value.length > 9) {
                vResult = false;
            }
        }
        return this.optional(element) || (vResult);
    }
}, "名字数2-9位");

//用户信息姓名
$.validator.addMethod("isUserName", function (value, element, params) {

    if (params == true) {
        var companyNameLength = getByteRangeLength(value);
        var companyName = /^([\u4E00-\u9FA5]|[a-zA-Z])*$/;
        var companyChinese = /^([\u4E00-\u9FA5])*$/;
        var vResult = true;
        if (!companyName.test(value)) {
            vResult = false;
        }
        //        if (companyChinese.test(value)) {
        //            if (value.length < 2 || value.length > 9) {
        //                vResult = false;
        //            }
        //        }
        return this.optional(element) || (vResult);
    }
}, "只能为汉字和字母");


//只能输入数字  

//jQuery.validator.addMethod("isNum", function (value, element) {

//    var RegExp = /^\d+$/;

//    return RegExp.test(value);

//}, $.validator.format("只能为数字!"));





//规则名：buga,value检测对像的值    

$.validator.addMethod("buga", function (value) {

    return value == "buga";

}, 'Please enter "buga"!');





//规则名：chinese，value检测对像的值，element检测的对像    

$.validator.addMethod("chinese", function (value, element) {

    var chinese = /^[\u4e00-\u9fa5]+$/;

    return (chinese.test(value)) || this.optional(element);

}, "只能输入中文");






//规则名：byteRangeLength，value检测对像的值，element检测的对像,param参数    

jQuery.validator.addMethod("byteRangeLength", function (value, element, param) {

    var length = value.length;

    for (var i = 0; i < value.length; i++) {

        if (value.charCodeAt(i) > 127) {

            length++;

        }

    }

    return this.optional(element) || (length >= param[0] && length <= param[1]);

}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));

//获取字符长度
function getByteRangeLength(value) {
    var length = value.length;

    for (var i = 0; i < value.length; i++) {

        if (value.charCodeAt(i) > 127) {

            length++;

        }
    }
    return length;
}


// 联系电话(手机/电话皆可)验证  

jQuery.validator.addMethod("isPhone", function (value, element) {

    var length = value.length;
    return this.optional(element) || (validatePhone(value)) || validateTel(value);


}, "请正确填写您的联系电话");




// 验证邮箱格式
//jQuery.validator.addMethod("isEmail", function (value, element) {
//
//    var email = /^\\s*([A-Za-z0-9_-]+(\\.\\w+)*@(\\w+\\.)+\\w{2,5})\\s*$/;
//
//    return this.optional(element) || (email.test(value));
//
//}, "邮箱格式不正确");
//邮政编码验证       
jQuery.validator.addMethod("isEmail", function(value, element) {       
    return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(value);     
}, "请正确填写邮箱格式");



// 邮政编码验证  

jQuery.validator.addMethod("isZipCode", function (value, element) {

    var tel = /^[0-9]{6}$/;

    return this.optional(element) || (tel.test(value));

}, "请正确填写您的邮政编码");



// 字符验证  

jQuery.validator.addMethod("string", function (value, element) {

    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);

}, "不允许包含特殊符号!");


//特殊字符验证
function SpecialCharacter(value) {
    var result = /^[\u0391-\uFFE5\w]+$/.test(value);
    return (!result);
}


// 必须以特定字符串开头验证  

jQuery.validator.addMethod("begin", function (value, element, param) {

    var begin = new RegExp("^" + param);

    return this.optional(element) || (begin.test(value));

}, $.validator.format("必须以 {0} 开头!"));





// 验证值不允许与特定值等于  

jQuery.validator.addMethod("notEqual", function (value, element, param) {

    return value != param;

}, $.validator.format("输入值不允许为{0}!"));





// 验证值必须大于特定值(不能等于)  

jQuery.validator.addMethod("gt", function (value, element, param) {

    return value > param;

}, $.validator.format("输入值必须大于{0}!"));





// 验证值小数位数不能超过两位  

jQuery.validator.addMethod("decimal", function (value, element) {

    var decimal = /^-?\d+(\.\d{1,2})?$/;

    return this.optional(element) || (decimal.test(value));

}, $.validator.format("小数位数不能超过两位!"));





//字母数字  

jQuery.validator.addMethod("alnum", function (value, element) {

    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);

}, "只能包括英文字母和数字");




// 汉字  

jQuery.validator.addMethod("chcharacter", function (value, element) {

    var tel = /^[\u4e00-\u9fa5]+$/;

    return this.optional(element) || (tel.test(value));

}, "请输入汉字");





// 身份证号码验证（加强验证）  

jQuery.validator.addMethod("isIdCardNo", function (value, element) {

    return this.optional(element) || /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/.test(value);

}, "请正确输入您的身份证号码");

