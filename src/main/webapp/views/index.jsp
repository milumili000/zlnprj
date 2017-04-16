<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <%@ include file="/views/common/top.jsp" %>
    <title>欢迎使用停车场管理系统</title>
</head>
<body>

<header class="navbar-wrapper">
    <div class="navbar navbar-fixed-top">
        <div class="container-fluid cl">
            <a class="logo navbar-logo f-l mr-10 hidden-xs" href="javascript:;"
               target="_blank">停车场管理系统</a>
            <a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" href="javascript:;">&#xe667;</a>

            <nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">
                <ul class="cl">

                    <li style="margin-right: 35px">欢迎!${type} ${name}</li>
                    <li id="Hui-skin" class="dropDown right dropDown_hover"><a href="javascript:;" class="dropDown_A"
                                                                               title="换肤"><i class="Hui-iconfont"
                                                                                             style="font-size:18px">
                        &#xe62a;</i></a>
                        <ul class="dropDown-menu menu radius box-shadow">
                            <li><a href="javascript:;" data-val="default" title="黑色">黑色(默认)</a></li>
                            <li><a href="javascript:;" data-val="blue" title="蓝色">蓝色</a></li>
                            <li><a href="javascript:;" data-val="green" title="绿色">绿色</a></li>
                            <li><a href="javascript:;" data-val="red" title="红色">红色</a></li>
                            <li><a href="javascript:;" data-val="yellow" title="黄色">黄色</a></li>
                            <li><a href="javascript:;" data-val="orange" title="绿色">橙色</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
<aside class="Hui-aside">
    <input runat="server" id="divScrollValue" type="hidden" value=""/>
    <div class="menu_dropdown bk_2">


        <dl id="menu-article">
            <dt><i class="Hui-iconfont">&#xe616;</i> 停车管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
            <dd>
                <ul>
                    <li><a _href="/views/park/carin.jsp" data-title="车辆入库" href="javascript:;">车辆入库</a></li>
                    <li><a _href="/views/park/carout.jsp" data-title="车辆出库" href="javascript:;">车辆出库</a></li>
                    <li><a _href="/views/park/list-park.jsp" data-title="车位查询" href="javascript:;">车位查询</a></li>
                </ul>
            </dd>

            <dt><i class="Hui-iconfont">&#xe616;</i> 查询记录<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
            <dd>
                <ul>
                    <li><a _href="/views/history/car.jsp" data-title="行车记录" href="javascript:;">行车记录</a></li>
                    <li><a _href="/views/history/user.jsp" data-title="会员查询" href="javascript:;">会员查询</a></li>
                </ul>
            </dd>


            <dt><i class="Hui-iconfont">&#xe616;</i> 会员管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
            <dd>
                <ul>
                    <li><a _href="/views/manage/user.jsp" data-title="会员注册" href="javascript:;">会员注册</a></li>
                    <li><a _href="/views/manage/pay.jsp" data-title="余额充值" href="javascript:;">余额充值</a></li>
                </ul>
            </dd>


        </dl>

    </div>
</aside>
<div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a>
</div>
<section class="Hui-article-box">
    <div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
        <div class="Hui-tabNav-wp">
            <ul id="min_title_list" class="acrossTab cl">
                <li class="active"><span title="我的桌面" data-href="welcome.html">我的桌面</span><em></em></li>
            </ul>
        </div>
        <div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default size-S"
                                                  href="javascript:;"><i class="Hui-iconfont">&#xe6d4;</i></a>
            <a id="js-tabNav-next" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">
                &#xe6d7;</i></a></div>
    </div>
    <div id="iframe_box" class="Hui-article">
        <div class="show_iframe">
            <div style="display:none" class="loading"></div>
            <iframe scrolling="yes" frameborder="0" src="/views/welcome.jsp"></iframe>
        </div>
    </div>
</section>
<%@ include file="common/bottom.jsp" %>

</body>
</html>
