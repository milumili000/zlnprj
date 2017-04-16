<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>观测点数据统计平台</title>
    <%@ include file="/views/common/top.jsp" %>
</head>
<body>
<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"/>
<%@ include file="/views/common/bottom.jsp" %>
<script src="/static/lib/Highcharts/4.1.7/js/highcharts.js"></script>
<script src="/static/lib/Highcharts/4.1.7/js/modules/exporting.js"></script>
<script type="text/javascript">
    $(function () {
        var chart = null;
        $('#container').highcharts({
            title: {
                text: '数据统计折线图',
                x: -20 //center
            },
            xAxis: {
                categories: [<c:forEach items="${xSet}" var="item">'${item}', </c:forEach>]
            },
            yAxis: {
                title: {
                    text: '测量值'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: ${dataList},
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            }
        });
    });
</script>
</body>
</html>
