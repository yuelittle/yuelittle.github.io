// JavaScript Document
//

$(function() {
		//导航轮播图控制开始
		var k = 0;
		var timer;

		function runn() {

				k++; //变量自增
				if (k == 6) {
					k = 0;
				}
				//		clearInterval(timer);
				//		div显示和隐藏
				$('.banner_first .banner_floor').eq(k).show().siblings('.banner_first .banner_floor').hide();
				$('.circle li').eq(k).css('background', '#C40000').siblings().css('background', '#000000');
				//大图缩小
				$('.banner_first .banner_floor img.o').eq(k).css({
					'transition': 'transform 4s linear 0s',
					'transform': 'scaleX(1) scaleY(1)'
				}).parents('.banner_first .banner_floor').siblings(".banner_first .banner_floor").find('img.o').css('transform', 'scaleX(1.05) scaleY(1.05)');
				//小图隐藏
				$('.banner_first .banner_floor .pic span img').eq(k).fadeTo(600, 1).parents('.banner_first .banner_floor').siblings('.banner_first .banner_floor').find('.pic span img').fadeTo(0, 0);
			}
			//设置定时器
		timer = setInterval(runn, 4000);
		//鼠标移入清理定时器
		$('.banner_first .banner_floor .pic').mouseenter(function() {
				k = $(this).index();
				clearInterval(timer);

			})
			//鼠标移出事件
		$('.banner_first .banner_floor .pic').mouseleave(function() {
				timer = setInterval(runn, 4000);
			})
			//鼠标放上数字时改变数字颜色和对应的图片	
		$('.circle li').mouseenter(function() {
				clearInterval(timer); //清除定时器
				k = $(this).index();
				$(this).css('background', '#C40000').siblings().css('background', '#000000');
				$('.banner_first .banner_floor').eq(k).show().siblings('.banner_first .banner_floor').hide();
			//大图缩小
		$('.banner_first .banner_floor img.o').eq(k).css({
			'transition': 'transform 4s linear 0s',
			'transform': 'scaleX(1) scaleY(1)'
		}).parents('.banner_first .banner_floor').siblings(".banner_first .banner_floor").find('img.o').css('transform', 'scaleX(1.05) scaleY(1.05)');
		//小图隐藏
		$('.banner_first .banner_floor .pic span img').eq(k).fadeTo(600, 1).parents('.banner_first .banner_floor').siblings('.banner_first .banner_floor').find('.pic span img').fadeTo(0, 0);	
			})
			
		//给轮播图加动态效果结束
		$('#left_nav li').mouseenter(function() {
				//获取当前序号
				//					alert($('.banner_floor .pic>a img').length)
				var flag = $(this).index();
				// document.title = flag;
				if (flag < 1) {
					//判断li序号小于1显示第一个大div
					$('.banner_first').show().siblings('.banner_all').hide();
					//给轮播图加动态效果开始	
					//大总管


					//设置定时器
					//	timer =setInterval(runn,4000);	

				} else if (flag >= 1) {
					//判断序号大于1显示第二个大div
					$('.banner_all').show().siblings('.banner_first').hide();
					//第二个大div里序号对应的div显示隐藏
					$('.banner_all .banner_floor').eq(flag - 1).show().siblings().hide();
					//			alert($('.banner_floor img.o').length)
					$('.banner_all .banner_floor img.o').eq(flag - 1).css({
						'transition': 'transform 4s linear 0s',
						'transform': 'scaleX(1) scaleY(1)'
					}).parents('.banner_all .banner_floor').siblings(".banner_all .banner_floor").find('img.o').css('transform', 'scaleX(1.05) scaleY(1.05)');
					//		$('.banner_floor img.o').eq(flag).css({'width':'100px'}).parents('.banner_floor').siblings(".banner_floor").find('img.o').css('width','300px');
					$('.banner_all .banner_floor .pic span img').eq(flag - 1).fadeTo(600, 1).parents('.banner_all .banner_floor').siblings('.banner_all .banner_floor').find('.pic span img').fadeTo(0, 0);
				}

			})
			//	.siblings().css({'width':'850px','top':'-12px','left':'-20px'})
			//导航轮播图控制结束
			//左侧楼层导航开始
			//	获取当前位置距离顶部的距离
		var re = $(window).scroll(function() {
				var re = $(document).scrollTop();
				//	document.title = re;
				//顶部搜索开始
				if (re > 650) {
					$('#fixed_top').fadeIn(500)
				} else {
					$('#fixed_top').fadeOut(500)
				}
				//顶部搜索结束
				//判断位置显示隐藏
				if (re > 530) {
					$('#floor_nav').fadeIn(500);
				} else {
					$('#floor_nav').fadeOut(500);
				}
				if (re > 1130 && re < 1300) {
					$('#floor_nav a').eq(0).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(0).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 1300 && re < 1700) {
					$('#floor_nav a').eq(1).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(1).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 1700 && re < 2300) {
					$('#floor_nav a').eq(2).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(2).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 2300 && re < 2700) {
					$('#floor_nav a').eq(3).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(3).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 2700 && re < 3200) {
					$('#floor_nav a').eq(4).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(4).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 3200 && re < 3800) {
					$('#floor_nav a').eq(5).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(5).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 3800 && re < 4200) {
					$('#floor_nav a').eq(6).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(6).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 4200 && re < 4700) {
					$('#floor_nav a').eq(7).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(7).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 4700 && re < 5200) {
					$('#floor_nav a').eq(8).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(8).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 5200 && re < 5700) {
					$('#floor_nav a').eq(9).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(9).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 5700 && re < 6100) {
					$('#floor_nav a').eq(10).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(10).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				// if (re > 6500) {

				// 	$('#floor_nav a').find('.word').hide().siblings('.iconlogo').show();
				// }

			})
			//	鼠标移入移除事件
			/*$('#floor_nav a').hover(function  () {
				$('this .word').css({'background':'#c40000','display':'block','color':'#fff'})
			},function  () {
				$('this .word').css({'background':'none','display':'none','color':'#c40000'})
			})*/
			//左侧楼层导航结束
			//左侧轮播开始

		//循环所有的div，给每个div都绑定一个定时器，并且定时器相关的函数、变量等都私有化
		$('.side_pannel').each(function() {
				//jquery形式对象转成原生形式对象
				var jqthis = $(this);
				var jsthis = $(this)[0];
				jsthis.c = 0;
				//控制自动轮播函数
				jsthis.run = function() {
						//		alert();
						jsthis.c++;
						if (jsthis.c == 4) {
							//将ul拉回来
							jqthis.find('.side').css('left', '0');
							jsthis.c = 1;
						}
						//计算left值
						var left = jsthis.c * -100;
						//让ul滑动到left
						jqthis.find('.side').stop().animate({
							'left': left + 'px'
						}, 500);
					}
					//控制自动轮播函数  左侧按钮
				jsthis.run1 = function() {
					//		alert();
					jsthis.c--;
					if (jsthis.c == -1) {
						//将ul拉回来
						jqthis.find('.side').css('left', '-300px');
						jsthis.c = 2;
					}
					//计算left值
					var left = jsthis.c * -100;
					//让ul滑动到left
					jqthis.find('.side').stop().animate({
						'left': left + 'px'
					}, 500);
				}

				//设置定时器
				jsthis.timer = setInterval(jsthis.run, 4000);

			})
			//给div加鼠标移入移出事件
		$('.side_pannel').hover(function() {
				//获得原生形式
				var jsthis = $(this)[0];
				clearInterval(jsthis.timer);
			}, function() {
				var jsthis = $(this)[0];
				//恢复定时器
				jsthis.timer = setInterval(jsthis.run, 4000);
			})
			//鼠标移入移出事件结束

		//左键点击效果
		$('.side_pannel .shang').click(function() {


				//				alert('11')

				//获得原生
				var jsthis = $(this).parent()[0];
				//点击清除定时器
				clearInterval(jsthis.timer);
				//				console.log(jsthis.className);
				jsthis.run1();
			})
			//左侧点击效果结束
			//右键点击效果
		$('.side_pannel .xia').click(function() {


				//				alert('11')

				//获得原生
				var jsthis = $(this).parent()[0];
				//点击清除定时器
				clearInterval(jsthis.timer);
				//				console.log(jsthis.className);
				jsthis.run();
			})
			//右侧点击效果结束

		//左侧轮播结束
		//顶部广告隐藏出现
		$('#top_ad').animate({
			'height': '80px'
		}, 2000, function() {
			$('#top_ad').delay(4000).animate({
				'height': '0px'
			}, 3000)
		})


		//右侧侧边导航开始
		$('#right_bar_nav li').hover(function() {
				$(this).find('.left_tab').css('display', 'block').stop().animate({
					'right': '35px',
					'opacity': '1'
				}, 500);
			}, function() {
				$(this).find('.left_tab').stop().animate({
					'right': '70px',
					'opacity': '0'
				}, 300);
			})
			//右侧侧边导航结束
//热门品牌tab切换
   $('#pinpai .middle li').click(function(){
   	var q=$(this).index();
   	$(this).addClass('one').siblings('li').removeClass('one');
   	$('#pinpai .middle .wall').eq(q).show().siblings('.wall').hide();
   })
//热门品牌tab切换

	}) //结尾括号
	


















