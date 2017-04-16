package cn.bootrun.zln.controller;

import cn.bootrun.zln.vo.Demo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by tinker on 17/4/14.
 */
@Controller
@RequestMapping("/test")
public class TestController {

    /**
     * 测试AJAX调用
     *
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/ajax")
    public Demo testAJAX(@RequestParam("name") String name, @RequestParam("pwd") String pwd) {
        System.out.println("name ----- " + name + " ||| pwd ------ " + pwd);
        Map map = new HashMap();
        map.put("statusCode", 200);
        map.put("msg", "success!");
        return new Demo();
    }
}
