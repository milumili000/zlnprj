package cn.bootrun.zln.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 用户操作相关接口
 * <p>
 * Created by tinker on 17/4/14.
 */
@Controller
@RequestMapping("/user")
public class UserCtrl {

    /**
     * 用户登录
     *
     * @param name    用户名
     * @param pwd     密码
     * @param type    登录类型 0会员 1管理员 2超级管理员
     * @param session 当前会话
     * @return 用户登录结果
     */
    @ResponseBody
    @RequestMapping("/login")
    public String login(@RequestParam("name") String name, @RequestParam("pwd") String pwd, @RequestParam("type") String type, HttpSession session) {
        StringBuilder builder = new StringBuilder();
        //静态判断用户名和密码
        if ("zln".equals(name) && "123456".equals(pwd)) {
            builder.append("{");
            builder.append("\"statusCode\":200,");
            builder.append("\"type\":\"" + type + "\"");
            builder.append("}");
            session.setAttribute("name", name);
            session.setAttribute("type", "0".equals(type) ? "会员" : "1".equals(type) ? "管理员" : "超级管理员");
            session.setAttribute("time", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        } else {
            builder.append("{");
            builder.append("\"statusCode\":500,");
            builder.append("\"msg\":\"用户名或密码错误\"");
            builder.append("}");
        }

        return builder.toString();
    }
}
