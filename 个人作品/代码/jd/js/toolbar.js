;$(function(){
	function goodsHeightResize(){
		var h=$(window).height();
		$('#toolbar_car_panel .content').height(h-90);
		
		$('#toolbar_track_panel .content').height(h-40);	
	}
	goodsHeightResize();
	$(window).resize(function(){
		goodsHeightResize();
	});

	//边栏面板插件初始化
	$('#toolbar_car , #toolbar_track').tsp_panel({wrapper:'shortCut'});


	// 我的足迹图片批量设置
	var tmp_li=$('#toolbar_track_panel li')
	for(var ti=0;ti<7;ti++){
		var new_li=tmp_li.clone();
		new_li.find('img').attr('src','products/track/'+(ti+2)+'.jpg');
		new_li.find('.price a').text('￥'+(ti+2)*100);
		$('#toolbar_track_panel ul').append(new_li);
	}

	//我的购物车批量设置
	var car_txt=[
		'',
		'三星 Galaxy Note 3 Lite (N7508v) 简约白 移动4G手机',
		'美素佳儿（Friso）金装幼儿配方奶粉 2段（6-12个月婴幼儿适用）900',
		'驼驼擦手巾 单笔订单满38+3元换购 限量5000份',
		'川宇（kawau）读卡器 Micro SD/T-Flash TF读卡器',
		'金士顿（Kingston）16GB Class10 TF(Micro SD)存储卡（读速'

	];
	tmp_li =$('#toolbar_car_panel li');
	for(ti=1;ti<6;ti++){
		var new_li=tmp_li.clone();
		new_li.find('img').attr('src','products/side/'+(ti)+'.jpg');
		new_li.find('.title').text(car_txt[ti]);
		$('#toolbar_car_panel ul').append(new_li);
	}


	//回到顶部按钮
	$('#toolbar_top').click(function(){
		$(window).scrollTop(0);
	});
});