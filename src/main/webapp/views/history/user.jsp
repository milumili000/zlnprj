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
    <span class="c-gray en">&gt;</span> 查询记录<span class="c-gray en">&gt;</span>会员查询
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>

<article class="page-container">

</article>

<div class="page-container">
    <form id="form-template-add" class="form form-horizontal" target="result" method="post" onsubmit="return false;">
        <div class="text-c">
            用户名:<input type="text" class="input-text" style="width:250px"/>
            注册时间:<input type="date" class="input-text"  id="beginTime" name="beginTime"
                   style="width:250px;margin-right: 15px"/>至<input type="date" class="input-text"
                                                       id="endTime"
                                                       name="endTime"
                                                       style="margin-left: 15px;width:250px"/>
            <button id="query" class="btn btn-success"><i class="Hui-iconfont">
                &#xe665;</i>查询
            </button>
        </div>

    </form>
    <div class="mt-20">
        <table class="table table-border table-bordered table-bg table-hover">
            <thead>
            <tr class="text-c">
                <th width="100">用户名</th>
                <th width="100">拥有车辆数</th>
                <th width="100">余额</th>
                <th width="100">注册时间</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-c">
                <td width="100">张丽娜</td>
                <th width="100">3</th>
                <td width="100">100.00</td>
                <td width="100">2017-04-15 21:25:34</td>
                <td><i class="Hui-iconfont">&#xe631;</i> <a>详情</a>
                </td>
            </tr>
            </tbody>
        </table>
        <%@ include file="/views/common/page.jsp" %>
    </div>
</div>
<%@ include file="/views/common/bottom.jsp" %>
</body>
</html>