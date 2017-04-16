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
    <span class="c-gray en">&gt;</span> 查询记录<span class="c-gray en">&gt;</span>行车记录
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>

<form action="/query/queryData?index=${index}" id="searcher-form" class="form form-horizontal" method="post"
      style="padding-top:10px;">
    <div class="text-c">
        车辆类型:
        <input type="checkbox" name="type" checked="checked"/>小型车
        <input type="checkbox" name="type" checked="checked"/>中型车
        <input type="checkbox" name="type" checked="checked"/>大型车
        <input type="date"class="input-text" id="beginTime" name="beginTime" style="margin-left:15px;margin-right: 15px;width:250px"/>至<input class="input-text"
            type="date"
            id="endTime"
            name="endTime"
            style="margin-left: 15px;width:250px"/>
        <button id="query" class="btn btn-success" onclick="$('#searcher-form').submit"><i class="Hui-iconfont">
            &#xe665;</i>查询
        </button>
    </div>

</form>

<div class="page-container">
    <div class="mt-20">
        <table class="table table-border table-bordered table-bg table-hover">
            <thead>
            <tr class="text-c">
                <th width="100">用户名</th>
                <th width="100">车牌号</th>
                <th width="100">车辆类型</th>
                <th width="100">行为</th>
                <th width="100">时间</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-c">
                <td width="100">张丽娜</td>
                <td width="100">鲁A66666</td>
                <th width="100">小型车</th>
                <td width="100">入库</td>
                <td width="100">2017-04-15 21:27:27</td>
                <td>
                    <i class="Hui-iconfont">&#xe631;</i> <a>详情</a>
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