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
    <span class="c-gray en">&gt;</span> 车辆管理<span class="c-gray en">&gt;</span>车位查询
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>
<article class="page-container">
    <form id="form-template-add" class="form form-horizontal" target="result" method="post" onsubmit="return false;">
        <div class="text-c">

            <select size="1" style="height:30px;" id="size">
                <option value="1">A区</option>
                <option value="2">B区</option>
            </select>
            <select size="1" style="height:30px;" id="point">
                <option value="1">1号车位</option>
                <option value="2">2号车位</option>
                <option value="3">3号车位</option>
            </select>
            <button id="query" class="btn btn-success"><i class="Hui-iconfont">
                &#xe665;</i>查询
            </button>
        </div>

    </form>
</article>
<div class="page-container">
    <div class="mt-20">
        <h1>视频监控区</h1>
    </div>
</div>
<%@ include file="/views/common/bottom.jsp" %>
</body>
<script type="text/javascript">
    $(function () {
        $('#query').click(function () {
            layer.alert('已有车辆停放\n停放时间:2017-04-13 15:34:10');
        });
    });
</script>
</html>