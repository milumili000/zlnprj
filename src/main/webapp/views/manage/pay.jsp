<%@ page language="java" import="java.util.*" pageEncoding="utf-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
<head>
    <%@ include file="/views/common/top.jsp" %>
</head>
<body>

<nav class="breadcrumb">
    <i class="Hui-iconfont">&#xe67f;</i> 首页
    <span class="c-gray en">&gt;</span> 会员管理<span class="c-gray en">&gt;</span> 余额充值
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>
<article class="page-container">
    <form id="form-template-add" class="form form-horizontal" target="result" method="post" onsubmit="return false;">
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">用户名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" id="number1" maxlength="10" style="width: 250px">
            </div>
        </div>

        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">充值金额：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" id="number2" maxlength="10" style="width: 250px">
            </div>
        </div>

        <div class="row cl">
            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
                <input class="btn btn-primary" type="submit" id="btn_submit" value="充&nbsp;值">
            </div>
        </div>
    </form>
</article>

</div>
<%@ include file="/views/common/bottom.jsp" %>
</body>
</html>