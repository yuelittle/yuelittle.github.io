$(function() {

		//大轮播开始
		c = 0; //大总管
		//定义函数切换图片
		function run() {
				c++; //变量自增
				if (c == 6) {
					c = 0;
				}
				//图片轮动
				$('#big .banner img').eq(c).fadeIn(300).siblings('img').stop().fadeOut(300);
				$('#big .banner .circle li').eq(c).css('background', 'red').siblings().css('background', '#000');

			}
			//定义函数切换图片

		function run1() {
				c--; //变量自增
				if (c == -1) {
					c = 5;
				}
				//图片轮动
				$('#big .banner img').eq(c).fadeIn(300).siblings('img').stop().fadeOut(300);
				$('#big .banner .circle li').eq(c).css('background', 'red').siblings().css('background', '#000');

			}
			//设置定时器
		timer = setInterval(run, 4000);
		//鼠标移入移除事件
		$('#big .banner img').mouseenter(function() {
				clearInterval(timer); //清理定时器
			})
			//鼠标移出事件
		$('#big .banner img').mouseleave(function() {
				timer = setInterval(run, 4000);
			})
			//鼠标放上数字对应改变
		$('#big .banner .circle li').hover(function() {
				clearInterval(timer);
				var _thiss=$(this);
				t=setTimeout(function(){
					c = _thiss.index();
					$('#big .banner .circle li').eq(c).css('background', 'red').siblings('li').css('background', '#000000');
					$('#big .banner img').eq(c).fadeIn(300).siblings('img').stop().fadeOut(300);
				},200)
				
			},function(){
				clearTimeout(t);
			timer=setInterval(run,4000);
			})
		//鼠标放上数字对应改变离开事件
		
			//鼠标右键效果
		$('#big .banner .btn_r').mouseenter(function() {
			clearInterval(timer);
		})
		$('#big .banner .btn_r').click(function() {
				run();
			})
			//鼠标左键效果
		$('#big .banner .btn_l').mouseenter(function() {
			clearInterval(timer);
		})
		$('#big .banner .btn_l').click(function() {
			run1();
		})

		//大轮播结束

		//轮播广告开始
		//定义全局变量
		var cc = 1;
		//给右侧按钮加点击事件
		$(' #banner_ad .ad_wf .btn_r').click(function() {
				//变量自增
				cc++;
				//判断
				if (cc > 4) {
					$('#banner_ad .ad_wf ul').css({
						left: '-1000px'
					});
					//					document.title=new_left;
					cc = 2;

				}
				//每次移动的值
				var k = cc * -1000;
				//让图片移动
				$('#banner_ad .ad_wf ul').stop().animate({
					'left': k + 'px'
				}, 1000);
			})
			//给左侧按钮加点击事件
		$('#banner_ad .ad_wf .btn_l').click(function() {
				//变量自增
				cc--;
				//判断
				if (cc < 0) {
					$('#banner_ad .ad_wf ul').css({
						left: '-3000px'
					});
					//					document.title=new_left;
					cc = 2;

				}
				//每次移动的值
				var k = cc * -1000;
				//				var new_left=$('ul').position().left-1000;
				//				document.title=k;
				//让图片移动
				$('#banner_ad .ad_wf ul').stop().animate({
					'left': k + 'px'
				}, 1000);
			})
			//轮播广告结束

		//楼层tab切换开始
		$('.mtit ul li').mouseenter(function() {
			var m = $(this).index();
			$(this).parents('.floor').find('.r_box').eq(m).show().siblings('.r_box').hide();
			$(this).addClass('cur').siblings().removeClass('cur');
			$(this).parents('.floor').find('.z_box').eq(m).show().siblings('.z_box').hide();
			//	$(this).find('a').css('border-left','#c81623').parents('li').find('a').siblings('a').css('border-left','#ccc');
		})


		//楼层tab切换结束


		//楼层宽图轮播开始
		$('.box_ban').each(function() {
			//转化原生形式
			var _this = $(this)[0];
			var jqthis = $(this);
			_this.mm = 0;
			//_this.timer2 = null;
			//自动轮播的函数
			_this.run11 = function() {
					_this.mm++;
					if (_this.mm == 5) {
						jqthis.find('.slider').css('left', '0');

						_this.mm = 1;

					}
					//		计算left值
					var left = _this.mm * -440;
					//		让slider滑动到left
					jqthis.find('.slider').stop().animate({
						'left': left + 'px'
					}, 400);
					//		让对应的小原点变色
					jqthis.find('.cir .cir_item').eq(_this.mm).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					//		alert($('.cir .cir_item').size());


					if (_this.mm == 4) {
						jqthis.find('.cir .cir_item').eq(0).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					}
					//console.log(_this.id);
					//alert($(this).attr('tagName'));
				}
				//自动轮播的函数倒过来
			_this.run111 = function() {
				_this.mm--;
				if (_this.mm == -1) {
					jqthis.find('.slider').css('left', '-1760px');

					_this.mm = 3;

				}
				//		计算left值
				var left = _this.mm * -440;
				//		让slider滑动到left
				jqthis.find('.slider').stop().animate({
					'left': left + 'px'
				}, 400);
				//		让对应的小原点变色
				jqthis.find('.cir .cir_item').eq(_this.mm).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
				if (_this.mm == -1) {
					jqthis.find('.cir .cir_item').eq(3).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
				}
			}

			//添加定时器
			_this.timer2 = setInterval(_this.run11, 4000);

			// 鼠标移入圆圈效果开始
				jqthis.find('.cir .cir_item').mouseenter(function(){
					clearInterval(_this.timer2);
					_this.mm=$(this).index();
					jqthis.find('.cir .cir_item').eq(_this.mm).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					//		计算left值
					var left = _this.mm * -440;
					//		让slider滑动到left
					jqthis.find('.slider').stop().animate({
						'left': left + 'px'
					}, 400);
				})

			// 鼠标移入圆圈效果结束
		})


		//添加移入移出事件
		$('.box_ban').hover(function() {
				//	获得原生
				var _this = $(this)[0];
				clearInterval(_this.timer2);
			}, function() {
				var _this = $(this)[0];
				_this.timer2 = setInterval(_this.run11, 4000);
			})
			//右键点击效果
		$('.box_ban .btn_r').click(function() {
				var _this = $(this).parent('.box_ban')[0];
				//点击清除定时器
				clearInterval(_this.timer2);
				//		console.log(jsthis.className);
				_this.run11();
			})
			//左键点击效果
		$('.box_ban .btn_l').click(function() {
				var _this = $(this).parent('.box_ban')[0];
				//点击清除定时器
				clearInterval(_this.timer2);
				_this.run111();
			})
			//楼层宽图轮播结束

		//楼层db轮播开始

		$('.box_lb').each(function() {
			//转化原生形式
			var _this = $(this)[0];
			var jqthis = $(this);
			_this.nn = 0;
			//_this.timer1 = null;
			//自动轮播的函数
			_this.run22 = function() {
					_this.nn++;
					if (_this.nn == 5) {
						jqthis.find('.slider_db').css('left', '0');

						_this.nn = 1;

					}
					//		计算left值
					var left = _this.nn * -340;
					//		让slider滑动到left
					jqthis.find('.slider_db').stop().animate({
						'left': left + 'px'
					}, 400);
					//		让对应的小原点变色
					jqthis.find('.cir .cir_item').eq(_this.nn).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					//		alert($('.cir .cir_item').size());


					if (_this.nn == 4) {
						jqthis.find('.cir .cir_item').eq(0).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					}
					//console.log(_this.id);
					//alert($(this).attr('tagName'));
				}
				//自动轮播的函数倒过来
			_this.run222 = function() {
				_this.nn--;
				if (_this.nn == -1) {
					jqthis.find('.slider_db').css('left', '-1360px');

					_this.nn = 3;

				}
				//		计算left值
				var left = _this.nn * -340;
				//		让slider滑动到left
				jqthis.find('.slider_db').stop().animate({
					'left': left + 'px'
				}, 400);
				//		让对应的小原点变色
				jqthis.find('.cir .cir_item').eq(_this.nn).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
				if (_this.nn == -1) {
					jqthis.find('.cir .cir_item').eq(3).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
				}
			}

			//添加定时器
			_this.timer1 = setInterval(_this.run22, 4000);
			// 鼠标移入圆圈效果开始
				jqthis.find('.cir .cir_item').mouseenter(function(){
					clearInterval(_this.timer1);
					_this.nn=$(this).index();
					jqthis.find('.cir .cir_item').eq(_this.nn).css('background', '#b61b1f').siblings().css('background', '#3e3e3e');
					//		计算left值
				var left = _this.nn * -340;
				//		让slider滑动到left
				jqthis.find('.slider_db').stop().animate({
					'left': left + 'px'
				}, 400);
				})

			// 鼠标移入圆圈效果结束
		})




		//添加移入移出事件
		$('.box_lb').hover(function() {
				//	获得原生
				var _this = $(this)[0];
				clearInterval(_this.timer1);
			}, function() {
				var _this = $(this)[0];
				_this.timer1 = setInterval(_this.run22, 4000);
			})
			//右键点击效果
		$('.box_lb .btn_r').click(function() {
				var _this = $(this).parent('.box_lb')[0];
				//点击清除定时器
				clearInterval(_this.timer1);
				//		console.log(jsthis.className);
				_this.run22();
			})
			//左键点击效果
		$('.box_lb .btn_l').click(function() {
				var _this = $(this).parent('.box_lb')[0];
				//点击清除定时器
				clearInterval(_this.timer1);
				_this.run222();
			})
			//楼层db轮播结束
			//左侧楼层导航开始
			//	获取当前位置距离顶部的距离
		var re = $(window).scroll(function() {
				var re = $(document).scrollTop();
					// document.title = re;

				//判断位置显示隐藏
				if (re > 1200) {
					$('#floor_nav').fadeIn(500);
				} else {
					$('#floor_nav').fadeOut(500);
				}
				// if (re > 1130 && re < 1884) {
				// 	$('#floor_nav a').eq(0).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(0).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 1884 && re < 2631) {
				// 	$('#floor_nav a').eq(1).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(1).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 2631 && re < 3239) {
				// 	$('#floor_nav a').eq(2).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(2).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 3239 && re < 3847) {
				// 	$('#floor_nav a').eq(3).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(3).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 3847 && re < 4595) {
				// 	$('#floor_nav a').eq(4).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(4).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 4595 && re < 5202) {
				// 	$('#floor_nav a').eq(5).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(5).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 5202 && re < 5809) {
				// 	$('#floor_nav a').eq(6).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(6).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 5809 && re < 6417) {
				// 	$('#floor_nav a').eq(7).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(7).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 6417 && re < 7166) {
				// 	$('#floor_nav a').eq(8).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(8).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 7166 && re < 7772) {
				// 	$('#floor_nav a').eq(9).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(9).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 7772 && re < 8383) {
				// 	$('#floor_nav a').eq(10).find('.word').show().siblings('.iconlogo').hide()
				// 		//						让其他li里面的文字隐藏，图标显示
				// 	$('#floor_nav a').eq(10).siblings('a').find('.word').hide().siblings('.iconlogo').show();
				// }
				// if (re > 8400) {

				// 	$('#floor_nav a').find('.word').hide().siblings('.iconlogo').show();
				// }

				if (re > 1130 && re < 1884) {
					$('#floor_nav a').eq(0).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(0).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 1884 && re < 2631) {
					$('#floor_nav a').eq(1).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(1).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 2631 && re < 3239) {
					$('#floor_nav a').eq(2).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(2).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 3239 && re < 3847) {
					$('#floor_nav a').eq(3).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(3).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 3847 && re < 4595) {
					$('#floor_nav a').eq(4).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(4).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 4595 && re < 5202) {
					$('#floor_nav a').eq(5).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(5).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 5202 && re < 5809) {
					$('#floor_nav a').eq(6).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(6).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 5809 && re < 6417) {
					$('#floor_nav a').eq(7).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(7).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 6417 && re < 7166) {
					$('#floor_nav a').eq(8).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(8).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 7166 && re < 7772) {
					$('#floor_nav a').eq(9).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(9).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				if (re > 7772 && re < 8383) {
					$('#floor_nav a').eq(10).find('.word').addClass('h').siblings('.iconlogo').hide()
						//						让其他li里面的文字隐藏，图标显示
					$('#floor_nav a').eq(10).siblings('a').find('.word').removeClass('h').siblings('.iconlogo').show();
				}
				// if (re > 8400) {

				// 	$('#floor_nav a').find('.word').hide().siblings('.iconlogo').show();
				// }

			})
			//	鼠标移入移除事件
			// $('#floor_nav a').hover(function  () {
			// 	$(this).find('.word').css({'background':'#c40000','display':'block','color':'#fff'})
			// },function  () {
			// 	$(this).find('.word').css({'background':'none','display':'none','color':'#c40000'})
			// })
			// $('#floor_nav a').mouseenter(function  () {
			// 	$(this).find('span.word').addClass('h');
			// 	console.log($(this).find('.word'));
			// })
			// $('#floor_nav a').mouseleave(function  () {
			// 	$(this).find('.word').removeClass('h');
			// })



			// $('#floor_nav a').mouseover(function  () {
			// 	$(this).find('.word').css({'background':'#c40000','display':'block','color':'#fff'});
			// })
			// $('#floor_nav a').mouseleave(function  () {
			// 	$(this).find('span.word').not('.abcd').hide();
			// 	$('.abcd').css('background','none');
			// 	$('.abcd').css('color','red');
			// 	console.log($('#floor_nav ul li').find('span[display="inline"]'));
			// })


			//左侧楼层导航结束

		//右侧导航开始
		$('#right_bar_nav .top li').hover(function() {
			$(this).find('.left_tab').stop().animate({
				'left': '-62px'
			}, 300);
		}, function() {
			$(this).find('.left_tab').stop().animate({
				'left': '0'
			}, 200);
		})
		$('#right_bar_nav .down li').hover(function() {
				$(this).find('.left_tab').stop().animate({
					'left': '-35px'
				}, 300);
			}, function() {
				$(this).find('.left_tab').stop().animate({
					'left': '0'
				}, 200);
			})
			//右侧导航结束
	}) //载入结束