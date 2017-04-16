/*----------------------------------基于jquery的验证--------------------------------------*/
//验证手机号
function validatePhone(val){
	return val.match(/^(1(([3587][0-9])|(47)))\d{8}$/);
}
//验证电话1
function validateTel(val){
	return val.match(/^(\d{3,4}[-]{0,1})\d{7,8}$/);
}
//验证电话2
function validateTel2(val){
	return val.match( /^\d{7,8}$/);	
}
//验证邮箱
function validateEmail(val){
	return val.length>0 && val.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
}
// 公司验证,大于等于
function validateCompany(val){
	return val.length>=4 &&val.length<=20;
}
// 真实姓名验证
function validateTrueName(val){
	return val.length>=2;
}

//户名
function validateCnName(val){
	return val.length>0 && val.match("^[A-Za-z0-9\\_\\-\\u4e00-\\u9fa5]+$");  // ^([a-zA-Z\u4E00-\u9FA5-_].*$)|(^.*[a-zA-Z\u4E00-\u9FA5-_]$)
}
//验证姓名2-6位字符,支持汉字
function validateName(val){
	return val.length>0 && val.match(/^[\u4e00-\u9fa5]{2,6}$/);
}


//验证QQ号
function validateQQ(val){
	return val.match(/^[1-9]\d{5,9}$/);
}

//验证邮编（开头不能为0，共6位）
function validateYoubian(val){
	return val.match(/^[1-9][0-9]{5}$/);
}


//验证开始结束时间
function validateenddate(end,start) {
    var start = new Date(start.replace("-", "/").replace("-", "/"));
    var end = new Date(end.replace("-", "/").replace("-", "/"));
    if (end>start) {
        return true;
    }
}
//验证开始结束时间1
function validateenddate1(end,start) {
    var start = new Date(start.replace("-", "/").replace("-", "/"));
    var end = new Date(end.replace("-", "/").replace("-", "/"));
    if (end>=start) {
        return true;
    }
}

//固定电话区号
function validateQuhao(val){
	return val.match(/^[0,8][0-9]{2,3}$/);
}

//验证两个值是否相同
function validatevalueeq(val1,val2){
	if(val1.length>0 && val2.length>0){
		return (val2==val1);	
	}	
}
//验证是否纯数字
function validateIsNumber(value) {
	return value.match(/^[\d]*$/);
}
//验证整数或小数
function validateIsNumber2(value){
	return value.match(/^\d+(\.\d+)?$/);
}
//判断值是否为null
function validateIsNull(value) {
    if (value == undefined || value == null || value == "" || value.length == 0) {
        return true;
    }
    return false;
}
//验证只能是字母与数字
function validateIsNumLet(value){
	return value.match(/^[a-z0-9]+$/i);
}

/*-----------------ajax------------------------*/
/*获得结果json
* url:url
* datas:data
* return:json
*/
function getQueryJson(url,datas){
	var data;
	 $.ajax({
			url:baseurl+url,
			type:'post',
			data:datas,
			async:false,
			dataType:'json',
			success:function(d){
				data=d;
			}
	});	
	 return data;
}


/* --------------------------layer ------------------------- */
/*弹出层*/
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="404.html";
	};
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	layer.open({
		type: 2,
		area: [w+'px', h +'px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: title,
		content: url
	});
}

/*关闭弹出框口*/
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}