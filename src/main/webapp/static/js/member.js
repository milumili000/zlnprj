/*用户-添加*/
function member_add(title,url,w,h){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*用户-查看*/
function member_show(title,url,id,w,h){
	layer_show(title,url,w,h);
}

/*用户-编辑*/
function member_edit(title,url,id,w,h){
	var index = layer.open({
		type: 2,
		title: title,
		content: url+'?userid='+id
	});
	layer.full(index);

}
/*密码-修改*/
function change_password(title,url,id,w,h){
	layer_show(title,url,w,h);	
}
/*用户-删除*/
function member_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		$(obj).parents("tr").remove();
		layer.msg('已删除!',{icon:1,time:2000});
	});
}
/*用户-iP*/
function yijianchaxun(){
    
    $(".iptd").each(function(index,obj){
    
    	var objtext=$(obj).attr("data");
    	$.ajax({
	        type:"post",
	        url:baseurl+"getAddressByIp?ip="+objtext,
	        dataType:"text",
	        success:function(data)
	        {
	        	$(obj).html(data);
	        }
	    });
		   
    });  
}
function chaxunip(ip,obj){
    	$.ajax({
	        type:"post",
	        url:baseurl+"getAddressByIp?ip="+ip,
	        dataType:"json",
	        success:function(data)
	        {
	        	$(obj).html(data.ip);
	        }
	    });
}
/*用户-刷新*/
function searchAllUser(){
	window.location.href=baseurl+"user/userList";
}

/*用户-停用*/
function member_stop(obj,id){
	layer.confirm('确认要停用吗？',function(index){
		$.ajax({
	        type:"post",
	        url:baseurl+"user/upstatus",
	        data:{"userid":id,"status":1},
	        dataType:"json",
	        success:function(data)
	        {
	        	if(data.statusCode=="200"){
	        		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="member_start(this,\''+id+'\')" href="javascript:;" title="启用"><i class="Hui-iconfont">&#xe6e1;</i></a>');
	        		$(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已停用</span>');
	        		$(obj).remove();
	        		layer.msg(data.message,{icon:1,time:2000});
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
	        }
		});
	});
}

/*用户-启用*/
function member_start(obj,id){
	layer.confirm('确认要启用吗？',function(index){
		$.ajax({
	        type:"post",
	        url:baseurl+"user/upstatus",
	        data:{"userid":id,"status":0},
	        dataType:"json",
	        success:function(data)
	        {
	        	if(data.statusCode=="200"){
	        		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="member_stop(this,\''+id+'\')" href="javascript:;" title="停用"><i class="Hui-iconfont">&#xe631;</i></a>');
	        		$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已启用</span>');
	        		$(obj).remove();
	        		layer.msg('已启用!',{icon:1,time:2000});
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
	        }
		});
	});
}

