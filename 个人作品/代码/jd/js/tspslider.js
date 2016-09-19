/*
Name:TSP slider *^o^*
Intro: My first web slider component,it's based on jQuery.I finished it in 1 hour. Thanks jQuery.
Author: tianshupei
mail: tianshupei88@gmail.com
date: 2015 09/22/02:26
*/
;
(function($) {
	$.fn.extend({
		'TSPslider': function(opts) {
			opts = $.extend({
				width: '100px',
				height: '100px',
				period: 2000
			}, opts);

			var width = opts.width,
				height = opts.height;
			$(this).width(width);
			$(this).height(height);
			$(this).css('position', 'relative');
			var links = $(this).find('a');
			var ul = $('<ul></ul>').css({
				'width': opts.width,
				'height': opts.height,
				'position': 'relative'
			});
			var dul = $('<ul></ul>').css({
				'position': 'absolute',
				'bottom': '10px',
				'width': '100%',
				'text-align': 'center',
				'z-index': '10'
			});
			$(this).append(ul);
			$(this).append(dul);

			links.each(function(i) {
				var li = $('<li></li>').css({
					'z-index': '0',
					'opacity': '0',
					'position': 'absolute',
					'left': '0',
					'top': '0',
					'height': opts.height,
					'width': opts.width
				});
				$(this).appendTo(li);
				li.appendTo(ul);

				var dot = $('<li></li>');
				dot.css({
					'width': '18px',
					'height': '18px',
					'border-radius': '50%',
					'display': 'inline-block',
					'cursor': 'pointer'
				});
				dot.css({
					'background-color': '#3E3E3E',
					'margin-right': '5px',
					'color': '#fff',
					'text-align': 'center'
				});
				dot.data('n', i);
				dot.text(i + 1);
				dot.appendTo(dul);
			});

			var btnl = $('<span><</span>');
			btnl.attr('style', 'font-family:simsun;height:62px;line-height:62px;width:28px;display:block;font-size:22px;font-weight:400;color:#fff;background-color:#000;opacity:0;position:absolute;top:50%;margin-top:-31px;z-index:20;text-align:center;cursor:pointer;');
			var btnr = btnl.clone();
			btnr.html('>').css('right', '0');
			btnl.css('left', '0');
			$(this).append(btnl);
			$(this).append(btnr);


			var lis = ul.find('li');
			var dots = dul.find('li');
			lis.eq(0).css({
				'z-index': '1',
				'opacity': '1'
			});
			dots.eq(0).css('background-color', '#AC2531');

			var n = 0,
				auto = true,
				rolling = true;

			dots.mouseenter(function() {
				console.log(rolling);
				if (!rolling) {
					rolling = true;
					n = $(this).data('n');
					play();
				}
			});

			function play() {
				rolling = true;
				if (n > lis.size() - 1)
					n = 0;
				else if (n < 0) {
					n = lis.size() - 1;
				}
				lis.eq(n).animate({
					'opacity': '1',
					'z-index': '1'
				}, 500, function() {
					rolling = false;
				}).siblings().animate({
					'opacity': '0',
					'z-index': '1'
				}, 500);
				dots.eq(n).css('background-color', '#AC2531').siblings().css('background-color', '#3E3E3E');
				if (auto)
					n++;

			}
			var timer = setInterval(play, opts.period);
			$(this).mouseenter(function() {
				clearInterval(timer);
				auto = false;
				rolling = false;
				btnl.css('opacity', '0.8');
				btnr.css('opacity', '0.8');
			});
			$(this).mouseleave(function() {
				timer = setInterval(play, opts.period);
				auto = true;
				btnl.css('opacity', '0');
				btnr.css('opacity', '0');
			});
			btnr.click(function() {
				if (rolling) return;
				n++;
				play();
			});
			btnl.click(function() {
				if (rolling) return;
				n--;
				play();
			})

			return $(this);
		},
		'reload':function(opts){
			$(this).width(opts.width);
			$(this).height(opts.height);
			var ul=$(this).find('>ul').first();
			var dots=$(this).find('>ul').last();
			ul.height(opts.height);
			ul.width(opts.width);
			ul.find('li').each(function(){
				$(this).css('height',opts.height);
				$(this).css('width',opts.width);
			});

			ul.find('img').each(function(){
				var spic=$(this).attr('s');
				$(this).attr('src',spic);
			});
		}
	});
})(jQuery);