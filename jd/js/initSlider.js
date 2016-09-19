;$(function(){
	// 淡入淡出轮播图
	function initSlider(){
		var window_w =$(window).width();
		if(window_w<1210){
			var focus_wide=510,
			td_slider_wide=990;
		}else{
			focus_wide=730;
			td_slider_wide=1000;
		}


		//焦点图初始话
		console.log(focus_wide);
		$('#focus_slider').TSPslider({
			'width': focus_wide,
			'height': '454px'
		});
		if(window_w<1210){
			//设置焦点图大小
			$('#focus_slider').reload({height:454,width:510});
		}
		// 楼层全部轮播图初始化
		$('.floor-slider').each(function() {
			$(this).TSPrainbow({
				period: 2000
			});
		});
		// 今日推荐轮播图初始化
		$('.td-slider').TSPrainbow({
			showDot: false
		});
	}
	initSlider();
});