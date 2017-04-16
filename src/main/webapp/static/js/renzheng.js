//geren renzheng
function renzheng_checkokRz1(id){
	layer.confirm("确定通过该用户的个人实名认证吗?",function(index){
		$.ajax({
			type:"POST",
			url:baseurl+"renzheng1/checkok",
			data:{"id":id},
			dataType:"json",
			success:function(data){
				if(data.statusCode=="200"){
					layer.msg(data.message,{icon:1,time:2000});
	        		window.location.reload(true);								
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
			}
		});
	});
}
//编辑窗口填写驳回因由
function renzheng_opendivcus(id,func){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  shadeClose: true,
	  skin: '#fff',
	  content:getdivcus_str(id,func)
	});
}
function getdivcus_str(id,func){
	var str='<div id="divcus" style="height: 200px;">'+
		'<table class="table">'+
    '<tbody>'+
    	'<tr>'+
	      '<th class="text-r" width="80">驳回理由:</th>'+
	      '<td>'+
	      	'<textarea style="height: 120px;width: 200px" id="tarea"></textarea>'+
	      	'<input class="btn btn-success" type="button" value="发送" id="cusbtnBj" onclick="'+func+'('+id+')"/>'+
	      '</td>'+
	    '</tr>'+
	'</tbody>'+
'</table>'+
'</div>';
	return str;
}
function renzheng_checkfailRz1(id){
	layer.confirm("确定驳回该用户的个人实名认证吗?",function(index){
		 $.ajax({
			type:"POST",
			url:baseurl+"renzheng1/checkfail",
			data:{"id":id,"yy":$("#tarea").val()},
			dataType:"json",
			success:function(data){
				if(data.statusCode=="200"){
					layer.msg(data.message,{icon:1,time:2000});
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
			},
			error:function(){
				alert("系统繁忙!");
			}
		});
	});
}
//qiye renzheng
function renzheng_checkokRz2(id){
	layer.confirm("确定通过该用户的企业实名认证吗?",function(index){
		$.ajax({
			type:"POST",
			url:baseurl+"renzheng2/checkok",
			data:{"id":id},
			dataType:"json",
			success:function(data){
				if(data.statusCode=="200"){
					layer.msg(data.message,{icon:1,time:2000});
	        		window.location.reload(true);								
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
			}
		});
	});
}

function renzheng_checkfailRz2(id){
	layer.confirm("确定驳回该用户的企业实名认证吗?",function(index){
		$.ajax({
			type:"POST",
			url:baseurl+"renzheng2/checkfail",
			data:{"id":id,"yy":$("#tarea").val()},
			dataType:"json",
			success:function(data){
				if(data.statusCode=="200"){
					layer.msg(data.message,{icon:1,time:2000});
				}else{
					layer.msg(data.message,{icon:2,time:2000});
				}
			},
			error:function(){
				alert("系统繁忙!");
			}
		});
	});
}