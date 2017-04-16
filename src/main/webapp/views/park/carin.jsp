<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <%@ include file="/views/common/top.jsp" %>
</head>
<body>
<nav class="breadcrumb">
    <i class="Hui-iconfont">&#xe67f;</i> 首页
    <span class="c-gray en">&gt;</span> 车辆管理<span class="c-gray en">&gt;</span>车辆入库
    <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px"
       href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>
<article class="page-container">
    <form id="form-template-add" class="form form-horizontal" target="result" method="post" onsubmit="return false;">
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">车牌号：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" id="number1" maxlength="10" style="width: 250px">
            </div>
        </div>

        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">重复车牌号：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" id="number2" maxlength="10" style="width: 250px">
            </div>
        </div>

        <div class="row cl">
            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
                <input class="btn btn-primary" type="submit" id="btn_submit" value="车辆入库">
            </div>
        </div>
    </form>
</article>
<%@ include file="/views/common/bottom.jsp" %>

<script type="text/javascript">
    $(function () {
        /* 保存发布 */
        $('#btn_submit').click(function () {

            if ($("#number1").val() != $("#number2").val()) {
                layer.alert('车牌号不一致');
            } else if ($("#number1").val() == "") {
                layer.alert('请输入车牌号');
            } else {
                layer.alert('提交成功,请前往 A区5号位 停车');
            }
        });
    });
</script>
</body>
</html>