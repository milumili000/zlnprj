<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <%@ include file="/views/common/top.jsp" %>
    <link href="/static/h-ui.admin/css/H-ui.login.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="/static/js/login.js"></script>
    <title>欢迎使用停车场管理系统</title>
</head>
<body>
<input type="hidden" id="TenantId" name="TenantId" value=""/>
<div class="header"><h3 style="color:white;margin-left:20px">欢迎使用停车场管理系统</h3></div>
<div class="loginWraper">
    <div id="loginform" class="loginBox">
        <form class="form form-horizontal">
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60d;</i></label>
                <div class="formControls col-xs-8">
                    <input id="userId" value="zln" type="text" placeholder="账户" class="input-text radius size-L">
                </div>
            </div>
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60e;</i></label>
                <div class="formControls col-xs-8">
                    <input id="pwd" maxLength=30 size=24 value="123456" type="password" placeholder="密码"
                           class="input-text radius  size-L">
                </div>
            </div>
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe643;</i></label>
                <div class="formControls col-xs-8">
                    <select class="select" size="1" name="type" style="height:30px;" id="type">
                        <option value="0">会员登录</option>
                        <option value="1">管理员登录</option>
                        <option value="2">超级管理员</option>
                    </select>
                </div>
            </div>
            <div class="row cl">
                <div class="formControls col-xs-8 col-xs-offset-3">
                    <input name="" type="button" id="loginbtn" onclick="login()" class="btn btn-primary radius size-L"
                           value="安全登录">
                    <input name="" type="reset" class="btn btn-default radius size-L"
                           value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;">
                    <span class="c-red f-14" id="login_info"></span>
                </div>
            </div>
        </form>
    </div>
</div>
<%@ include file="/views/common/bottom.jsp" %>
</body>
</html>
