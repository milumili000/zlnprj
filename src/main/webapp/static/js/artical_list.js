var pageNo=1;
var pages=0;
var pageSize;
$(function(){
	pageSize=$("#pageSize").val();
	getPage(pageNo,pageSize);
	$("#next").click(function(){
		var query=$("#is_query").val();
		getNextPage(query);
	});
	$("#previous").click(function(){
		var query=$("#is_query").val();
		getPreviousPage(query);
	});
	
	$("#query").click(function(){
		var pageSize=$("#pageSize").val();
		pageNo=1;
		queryNews(pageNo,pageSize);
	})
	
	$("#delete").click(function(){
		var ids="";
		var obj=$("[name='elechk']");
		for(i=0;i<obj.length;i++){
			if(obj[i].checked){
				ids+=obj[i].value+",";
			}
		}
		ids=ids.substr(0,ids.length-1);
		if(ids==""){
			alert("请先选择要删除的新闻");
			return;
		}
		if(confirm("确实要删除吗")){
			delNews(ids);
		}
	})
})

function getPage(pageNo,pageSize){
	$("#is_query").val("");
	$.post("get_news_list",{"pageNo":pageNo,"pageSize":pageSize},function(data){
		if(data==""){
			alert("暂未添加新闻");
			return;
		}
		$("#news_list").empty();
		$("#sum").text(data[0].sum);
		pages=data[0].pages;
		/////////////////////////////////////////////
		var opt="";
		for(i=1;i<=pages;i++){
			opt+="<option value="+i+">"+i+"</option>";
		}
		$("#page_selector").empty();
		$("#page_selector").append(opt);
		$("#page_selector").val(pageNo);
		/////////////////////////////////////////////
		$("#navinfo").html("共"+pages+"页，当前第"+pageNo+"页");
		$.each(data,function(i,item){
			var mana;
			if(item.nstatus=="未审核"){
				mana="<a href='javascript:changeNewsStatus("+item.nid+",0)'>审批</a>";
			}else if(item.nstatus=="未发布"){
				mana="<a href='javascript:changeNewsStatus("+item.nid+",1)'>发布</a>";
			}else if(item.nstatus=="已发布"){
				mana="<a href='javascript:changeNewsStatus("+item.nid+",2)'>撤回</a>" +
						"&nbsp;&nbsp;<a href='javascript:pushNews("+item.nid+")'>推送</a>";
			}
			var str="<tr class='text-c'><td><input type='checkbox' onchange='listenCheckedAllStatus()' name='elechk' value="+item.nid+"></td>" +
					"<td><a onclick='article_edit("+item.nid+")' href='javascript:;'>"+item.ntitle+"</a></td>" +
					"<td>"+item.ntype+"</td>"+
					"<td>"+item.nadmin+"</td>" +
					"<td>"+new Date(item.nmodifydate).Format("yyyy年MM月dd日hh时mm分")+"</td>" +
					"<td>"+item.nread+"</td>" +
					"<td>"+item.nstatus+"</td>" +
					"<td>"+mana+"</td></tr>";
			$("#news_list").append(str);
		});
	},"json");
}

function jumpToPage(){
	pageNo=$("#page_selector").val();
	var pageSize=$("#pageSize").val();
	var a=$("#is_query").val();
	if(a=="query"){
		getPage(pageNo,pageSize);
	}else{
		queryNews(pageNo,pageSize)
	}
}

function queryNews(pageNo,pageSize){
	$("#is_query").val("query");
	var str=$("#query_str").val();
	$.post("query_news",{"str":str,"pageNo":pageNo,"pageSize":pageSize},function(data){
		if(data==""){
			alert("未找到相关新闻");
		}else{
			$("#news_list").empty();
			$("#sum").text(data[0].sum);
			pages=data[0].pages;
			///////////////////////////////////////////////////
			var opt="";
			for(i=1;i<=pages;i++){
				opt+="<option value="+i+">"+i+"</option>";
			}
			$("#page_selector").empty();
			$("#page_selector").append(opt);
			$("#page_selector").val(pageNo);
			///////////////////////////////////////////////////
			$("#navinfo").html("共"+pages+"页，当前第"+pageNo+"页");
			$.each(data,function(i,item){
				var mana;
				if(item.nstatus=="未审核"||item.nstatus=="未审批"){
					mana="<a href='javascript:changeNewsStatus("+item.nid+",0)'>审批</a>";
				}else if(item.nstatus=="未发布"){
					mana="<a href='javascript:changeNewsStatus("+item.nid+",1)'>发布</a>";
				}else if(item.nstatus=="已发布"){
					mana="<a href='javascript:changeNewsStatus("+item.nid+",2)'>撤回</a>" +
							"&nbsp;&nbsp;<a href='javascript:pushNews("+item.nid+")'>推送</a>";
				}
				var str="<tr class='text-c'><td><input type='checkbox' onchange='listenCheckedAllStatus()' name='elechk' value="+item.nid+"></td>" +
						"<td><a onclick='article_edit("+item.nid+")' href='javascript:;'>"+item.ntitle+"</a></td>" +
						"<td>"+item.ntype+"</td>"+
						"<td>"+item.nadmin+"</td>" +
						"<td>"+new Date(item.nmodifydate).Format("yyyy年MM月dd日hh时mm分")+"</td>" +
						"<td>"+item.nread+"</td>" +
						"<td>"+item.nstatus+"</td>" +
						"<td>"+mana+"</td></tr>";
				$("#news_list").append(str);
			});

		}
	},"json");
}

function changeNumPerPage(){
	var a=$("#is_query").val();
	var pageSize=$("#pageSize").val();
	pageNo=1;
	if(a=="query"){
		queryNews(pageNo,pageSize);
	}else{
		 getPage(pageNo,pageSize);
	}
}

function changeNewsStatus(nid,flag){
	$.post("change_news_status",{"nid":nid,"flag":flag},function(data){
		alert(data.info);
		var pageSize=$("#pageSize").val();
		getPage(1,pageSize);
	},"json");
}

function pushNews(nid){
	//layer_show(title, url, w, h);弹出新窗口，进行新闻推送，传递新闻id，推送成功，关闭窗口
	/*$.post("push_news",{"nid":nid},function(data){
		alert(data.info);
	},"json");*/
	push_news(nid);
}

function delNews(ids){
	$.post("del_news",{"ids":ids},function(data){
		alert(data.info);
		var pageSize=$("#pageSize").val();
		getPage(1,pageSize);
		$("#query_str").val("");
	},"json");
}

function listenCheckedAllStatus(){
	if($(":checkbox[name='elechk']:checked").length==$(":checkbox[name='elechk']").length){
		$("#checkedAll").attr("checked",true);
	}else{
		$(":checkbox[name='checkedAll']").attr("checked",false);
	}
}

function getNextPage(flag){
	pageNo=pageNo+1;
	if(pageNo>pages){
		pageNo=pages
		alert("已经是最后一页了");
		return;
	}
	var pageSize=$("#pageSize").val();
	if(flag=="query"){
		queryNews(pageNo,pageSize);
	}else{
		getPage(pageNo,pageSize);
	}
}

function getPreviousPage(flag){
	pageNo=pageNo-1;
	if(pageNo<1){
		pageNo=1;
		alert("已经是第一页了");
		return;
	}
	var pageSize=$("#pageSize").val();
	if(flag=="query"){
		queryNews(pageNo,pageSize);
	}else{
		getPage(pageNo,pageSize);
	}
}

Date.prototype.Format = function(fmt) {
	var o = {
			"M+" : this.getMonth()+1,                 //月份 
			"d+" : this.getDate(),                    //日 
			"h+" : this.getHours(),                   //小时 
			"m+" : this.getMinutes(),                 //分 
			"s+" : this.getSeconds(),                 //秒 
			"q+" : Math.floor((this.getMonth()+3)/3), //季度 
			"S"  : this.getMilliseconds()             //毫秒 
	}; 
	if(/(y+)/.test(fmt))
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	return fmt; 
}

/*资讯-添加*/
function article_add(title,url,w,h){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*资讯-编辑*/
function article_edit(nid){
	var index = layer.open({
		type: 2,
		title: "编辑新闻",
		content: "article_update.jsp?nid="+nid
	});
	layer.full(index);
}
/*资讯-删除*/
function article_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		$(obj).parents("tr").remove();
		layer.msg('已删除!',1);
	});
}
/*资讯-审核*/
function article_shenhe(obj,id){
	layer.confirm('审核文章？', {
		btn: ['通过','不通过'], 
		shade: false
	},
	function(){
		$(obj).parents("tr").find(".td-manage").prepend('<a class="c-primary" onClick="article_start(this,id)" href="javascript:;" title="申请上线">申请上线</a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已发布</span>');
		$(obj).remove();
		layer.msg('已发布', {icon:6,time:1000});
	},
	function(){
		$(obj).parents("tr").find(".td-manage").prepend('<a class="c-primary" onClick="article_shenqing(this,id)" href="javascript:;" title="申请上线">申请上线</a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-danger radius">未通过</span>');
		$(obj).remove();
    	layer.msg('未通过', {icon:5,time:1000});
	});	
}
/*资讯-下架*/
function article_stop(obj,id){
	layer.confirm('确认要下架吗？',function(index){
		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="article_start(this,id)" href="javascript:;" title="发布"><i class="Hui-iconfont">&#xe603;</i></a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已下架</span>');
		$(obj).remove();
		layer.msg('已下架!',{icon: 5,time:1000});
	});
}

/*资讯-发布*/
function article_start(obj,id){
	layer.confirm('确认要发布吗？',function(index){
		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="article_stop(this,id)" href="javascript:;" title="下架"><i class="Hui-iconfont">&#xe6de;</i></a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已发布</span>');
		$(obj).remove();
		layer.msg('已发布!',{icon: 6,time:1000});
	});
}
/*资讯-申请上线*/
function article_shenqing(obj,id){
	$(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">待审核</span>');
	$(obj).parents("tr").find(".td-manage").html("");
	layer.msg('已提交申请，耐心等待审核!', {icon: 1,time:2000});
}

function push_news(id){
	layer_show("新闻推送中...","push_news.jsp?id="+id,500,400);	
}