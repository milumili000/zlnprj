<%@ page language="java" import="java.util.*" pageEncoding="utf-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
<head>
    <%@ include file="/views/common/top.jsp" %>
    <title>信息统计中心</title>
</head>
<body>

<nav class="breadcrumb">
    <i class="Hui-iconfont">&#xe67f;</i> 首页
    <span class="c-gray en">&gt;</span> 信息统计中心
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>

<form action="/query/queryData?index=${index}" id="searcher-form" class="form form-horizontal" method="post" style="padding-top:10px;">
    <div class="text-c">
        可查询类型:
        <c:forEach items="${set}" var="item"><input type="checkbox" name="type" value="${item}"
                                                    checked="checked"/>${item}</c:forEach>
        <input type="date" id="beginTime" name="beginTime" style="margin-right: 15px"/>至<input type="date"
                                                                                        id="endTime" name="endTime"
                                                                                        style="margin-left: 15px"/>
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
                <th width="100">测量时间</th>
                <th width="100">测量类型</th>
                <th width="100">测量值</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${list}" var="item">
                <tr class="text-c">
                    <td width="100">${item.createTime}</td>
                    <td width="100">${item.type}</td>
                    <td width="100">${item.val}</td>
                    <td>
                        <i class="Hui-iconfont">&#xe631;</i> <a href="/query/photo?index=${item.index}">折线统计图</a>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
        <%@ include file="/views/common/page.jsp" %>
    </div>
</div>
<%@ include file="/views/common/bottom.jsp" %>
</body>
</html>