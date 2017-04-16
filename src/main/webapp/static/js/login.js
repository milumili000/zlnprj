//登陆
function login() {
    if ($("#userId").val() == '') {
        $("#login_info").text("请输入用户名!");
        return;
    } else if ($("#pwd").val() == '') {
        $("#login_info").text("请输入密码!");
        return;
    }
    $.ajax({
        type: "POST",
        url: '/user/login',
        data: {
            name: $('#userId').val(),
            pwd: $('#pwd').val(),
            type: $('#type').val()
        },
        dataType: "json",
        success: function (data) {
            if (data.statusCode == "200") {
                location.href="/views/index.jsp";
            } else if (data.statusCode == "500"){
                // 出错提示
                $("#login_info").text(data.msg);
            }else {
                $("#login_info").text("系统繁忙请稍候再试");
            }
        }

    });
}