;
$(function() {
	// 顶部弹出广告
	/*
		var ad=$('<div><img src="images/s4.jpg">').css({'width':'100%','background-color':'#EEEEEE'}).hide().prependTo('body');
		ad.find('img').css({'display':'block','margin':'0 auto'});
		ad.delay(2000).slideDown('slow').delay(2000).slideUp('slow');
	*/


	//顶部送货下拉框
var city_txt=['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门','钓鱼岛','海外'];
	var city_ul=$('#city .dropdown-layer ul');
	for(var i=0;i<city_txt.length;i++){
		var city_li=$('<li></li>');
		if(i==0)
			city_li.addClass('cur');
		city_li.html('<a href="#">'+city_txt[i]+'</a>');
		city_ul.append(city_li);
	}



	// 分类导航操作
	$('#category-dt li').mouseenter(function() {
		var dd = $('#category-dd');
		dd.show().find('.block').eq($(this).index()).show().siblings().hide();

		var top = $('#category-dt').offset().top,
			scrollTop=$(window).scrollTop();
			offset=top-scrollTop;

			if(offset<0){
				dd.css('top',-offset);	
			}else{
				dd.css('top',0);
			}

	});
	// 分类菜单显示隐藏
	$('#categorys').mouseleave(function() {
		$('#category-dd').css('display', 'none').find('block').css('display', 'none');
	});

	// 换一批横线移动效果
	$('#guessu .flush').mouseenter(function() {

	});

	// 楼层标签页切换
	$('.floor .tabs li').mouseover(function() {
		$(this).addClass('on').siblings().removeClass('on');
	});
	//楼层图标变色
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop(),
			window_h = $(window).height();
		$('.floor').each(function() {
			var top = $(this).offset().top,
				offset = top - scrollTop,
				i = $(this).find('.mt h2 i');
			if (offset > 0 && offset < window_h / 2) {
				i.stop().animate({
					'height': 25
				});
			} else {
				i.css('height', 0);
			}
		});
	});

	// // 淡入淡出轮播图
	// $('#focus_slider').TSPslider({
	// 	'width': '730px',
	// 	'height': '454px'
	// });
	// // 楼层全部轮播图初始化
	// $('.floor-slider').each(function() {
	// 	$(this).TSPrainbow({
	// 		period: 2000
	// 	});
	// });
	// // 今日推荐轮播图初始化
	// $('.td-slider').TSPrainbow({
	// 	showDot: false,
	// 	speed: 1000
	// });

	//电梯效果
	var window_w=$(window).width();
	//$('#elevator').css('left',(window_w-1210)/2));
	$('#elevator').css('left',((window_w-1210)/2-35));

	//保存各个楼层top位置
	var floor_offset_arr=[];
	$('#elevator li').each(function(i){
		$(this).attr('i',i+1);
		floor_offset_arr[i]=$('#f'+(i+1)).offset().top;
	});

	//楼层按钮点击跳转相应楼层
	$('#elevator li').click(function(){
		var n=$(this).attr('i'),
			id='#f'+n;
		var top=$(id).offset().top;
		$('body,html').animate({scrollTop:top},'slow','linear');
		$(this).addClass('cur').siblings().removeClass('cur');
	});


	//移动界面一楼200像素显示电梯
	$(window).scroll(function(){
		var offset=$('#f1').offset().top;
			if($(document).scrollTop()>offset-200){
				$('#elevator').css('display','block');
			}else{
				$('#elevator').css('display','none');
			}
			for(var i=0;i<floor_offset_arr.length;i++){
				var distance=floor_offset_arr[i]-$(window).scrollTop();
				if(distance>0 && distance<($(window).height()/2)){
					$('#elevator li').eq(i).addClass('cur').siblings().removeClass('cur');
				}
			}
			var special_top=$('#b_special').offset().top;
			var sp_offset=special_top-$(window).scrollTop();
			if(sp_offset<20 && sp_offset>0){
				$('#elevator').css('display','none');
			}
	});


	//晒单滚动
	var roll_ul=$('.tsp-rollup'),
		roll_h=roll_ul.parent().height();
		roll_count=roll_ul.children().size();

	function letsRoll(){
		console.log('s');
		roll_ul.stop().animate({'bottom':-roll_h},500,'linear',function(){
			roll_ul.prepend(roll_ul.children().eq(roll_count-2));
			roll_ul.prepend(roll_ul.children().eq(roll_count-1));
			roll_ul.css('bottom',0);
		});
	}
	var rollUpTimer=setInterval(letsRoll,3000);
	roll_ul.mouseover(function(){
		clearInterval(rollUpTimer);
	});
	roll_ul.mouseout(function(){
		rollUpTimer= setInterval(letsRoll,3000);
	});


});