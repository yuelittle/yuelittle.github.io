/*
功能：滑动轮播组件
作者：田书培
时间：2015/09/23
用法:
$('id').TSPrainbow();

*/

;
$(function() {
	$.fn.extend({
		'TSPrainbow': function(opts) {
			opts = $.extend({
				period: 2000,
				speed: 400,
				showDot: true
			}, opts);

			$(this).css('position', 'relative').css('overflow', 'hidden');
			var first = $(this).children().first().clone(),
				last = $(this).children().last().clone();
			first.addClass('clone');
			last.addClass('clone');
			$(this).append(first).prepend(last);
			$(this).children().wrap($('<li></li>'));
			$(this).wrapInner('<ul></ul>');
			$(this).find('ul').css('position', 'absolute').find('li').css('float', 'left');
			var width = $(this).parent().width(),
				//var width=$(this).find('>ul > li').eq(0).width(),
				//height=$(this).find('>ul > li').eq(0).height(),
				height = $(this).parent().height(),
				ul = $(this).find('ul'),
				lis = ul.find('> li'),
				count = lis.size();
			ul.height(height - 1).width(width * count).css('left', -width);
			ul.addClass('lis')
			$(this).height(height).width(width);
			var n = 1,
				direction = -1,
				auto = true;

			var btnl = $('<span class="btn"></span>');
			var btnr = btnl.clone();
			btnl.addClass('btn-l').html('<');
			btnr.addClass('btn-r').html('>');
			$(this).append(btnl).append(btnr);
			btnl.click(function() {
				if (playing) return;
				n--;
				play();
			});
			btnr.click(function() {
				if (playing) return;
				n++;
				play();
			})

			var playing = true;
			var dots = $('<ul class="dots"></ul>');
			for (var i = 0; i < count - 2; i++) {
				var li = $('<li></li>');
				li.attr('n', i + 1);
				if (i == 0) {
					li.addClass('cur');
				}
				li.mouseover(function() {
					var n_temp = $(this).attr('n')
					dots.children(n_temp - 1).addClass('cur').siblings().removeClass('cur');
					n = n_temp;
					play();
				});
				li.mouseout(function() {
					over_start = new Date();
				});
				dots.append(li);
			}
			$(this).append(dots);
			if (!opts.showDot)
				dots.css('visibility', 'hidden');


			function play() {

				playing = true;
				if (n == count - 1) {
					dots.children().first().addClass('cur').siblings().removeClass('cur');
				} else if (n == 0) {
					dots.children().last().addClass('cur').siblings().removeClass('cur');
				} else {
					var n_index = n - 1;
					dots.children().eq(n_index).addClass('cur').siblings().removeClass('cur');
				}
				ul.stop().animate({
						'left': n * direction * width
					}, opts.speed,
					function() {
						playing = false;
						if (n == count - 1) {
							ul.css('left', -width);
							n = 1;
						} else if (n == 0) {
							ul.css('left', -width * (count - 2));
							n = count - 2;
						}

						if (auto)
							n++;
					}
				);
			}
			$(this).mouseover(function() {
				auto = false;
				btnl.show();
				btnr.show();

				clearInterval(timer);
				playing = false;
			});
			$(this).mouseout(function() {
				auto = true;
				btnl.hide();
				btnr.hide();
				timer = setInterval(play, opts.period);
			})

			var timer;

			setTimeout(function() {
				timer = setInterval(play, opts.period)
			}, Math.floor(Math.random() * 4) * 1000);
		}
	});
});