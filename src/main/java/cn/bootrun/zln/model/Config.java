package cn.bootrun.zln.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;

/**
 * Created by mac on 2016/12/5.
 */
public class Config extends ObjectMapper {
    public Config() {
        registerModule(new Hibernate4Module());
    }
}


