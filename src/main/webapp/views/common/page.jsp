<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="" >
        <div class="cl pd-5 bg-1 bk-gray mt-20  ">
			<span class="l" id="navinfo">
				共1页，当前第1页
			</span>

				<div class="dataTables_wrapper">
            <span class="r ">
				<label>跳转至</label>
				<span class="select-box inline">
					<select class="select" id="page_selector" onchange="jumpToPage()">
						<option>10</option>
						<option>20</option>
					</select>
				</span> 
				<div class="dataTables_paginate" style="padding-top:0px">
				<Button id="previous" class="paginate_button" style="margin-left: 10px;"><i class="Hui-iconfont">&#xe6d4;</i>上一页</Button>
				<span class="paginate_button current">1</span>
				<span class="paginate_button">2</span>
				<span class="paginate_button">3</span>
				<span class="paginate_button">4</span>
				<Button id="next" class="paginate_button disabled">下一页<i class="Hui-iconfont">&#xe6d7;</i></Button>
				</div>
			</span>
				</div>
        </div>
    </div>