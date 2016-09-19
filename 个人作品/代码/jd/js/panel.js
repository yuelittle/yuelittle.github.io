;$(function(){
	$.fn.extend({
		'tsp_panel':function(opts){
			opts=$.extend({
				'wrapper':''
			},opts);

			var groupPanel=$('#'+opts.wrapper);
			// 初始化面板组隐藏
			groupPanel.css('margin-right','-270px');
			var groupShow=false;
			// 当前面板id
			var curPanelId='';
			var curPanel=null;
			var curBtn=null;

			//面板失去焦点
			$(document).bind('click',function(e){
			
				var target=$(e.target);
				if(target.closest('#'+opts.wrapper).length!=0){
					return;
				}
				if(curBtn!=null){
					curBtn.removeClass('cur');
					curBtn=null;
				}
				if(curPanel!=null){
					groupShow=false;
					groupPanel.animate({'margin-right':'-270px'},'fast','linear',function(){	
						curPanel.css('transisiton','none');
						curPanel.css('right',-270);
						curPanel.css('opacity',0);
						curPanel.css('transform','none');
						curPanel=null;
					});
				}
			});

			$(this).each(function(){
				// 获得面板id
				var panelId=$(this).attr('id')+'_panel';
				// 获得面板对象
				var panel=$('#'+panelId);
				// 初始化面板组隐藏
				panel.css('right',-270);
				//面板关闭按钮事件
				var closeBtn=panel.find('.close');
				closeBtn.click(function(){
					groupPanel.animate({'margin-right':'-270px'},'fast','linear',function(){
						if(curPanel){
							curPanel.css('transisiton','none');
							curPanel.css('right',-270);
							curPanel.css('opacity',0);
							curPanel.css('transform','none')
							curPanel.css('display','block');
							curPanel=null;
							curBtn.removeClass('cur');
							curBtn=null;
						}
					});
					groupShow=false;
				});

				$(this).click(function(){

					if(!groupShow && curPanel==null){
						panel.css('right',0);
						panel.css('opacity',1);
						panel.css('transform','scale(1,1)');
						panel.css('transition','none');
						curPanel=panel;
						groupPanel.animate({'margin-right':'0'},'fast','linear');
						groupShow=true;
						$(this).addClass('cur');
						curBtn=$(this);
						return;
					}
					if(groupShow && curPanel==panel){
						console.log('in')
						groupShow=false;
						groupPanel.animate({'margin-right':'-270px'},'fast','linear');
						panel.css('transisiton','none');
						panel.css('right',-270);
						panel.css('opacity',0);
						panel.css('transform','none');
						curPanel=null;

						curBtn.removeClass('cur');
						curBtn=null;
						
					}else if(groupShow && curPanel!=null && curPanel!=panel){
						panel.css('transform','scale(1,1)');
						curPanel.css('transition','all 0.5s ease-in-out 0s');
						panel.css('transition','all 0.3s ease-in-out 0s');

						curPanel.css({'opacity':'0','right':'-270px','transform':'scale(0.6,0.6)'});
						panel.css({'opacity':'1','right':'0','transform':'scale(1,1)'});
						
						$(this).removeClass('cur');

						setTimeout(function(){
						curPanel.css('transform','scale(1,1)');
						curPanel=panel;
						},700);

						$(this).addClass('cur');
						curBtn.removeClass('cur');
						curBtn=$(this);

					}


				});
			});
		}
	});
});