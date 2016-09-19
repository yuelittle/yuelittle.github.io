window.onload = function (){
	var searlis = document.getElementById('search-tab').getElementsByTagName('li');
	var seardivs = document.getElementById('search-con').getElementsByTagName('div');
	if(searlis.length!=seardivs.length) return;

	for (var i=0;i<searlis.length;i++) {
		searlis[i].id=i;
		searlis[i].onclick=function () {
			var that=this;
			for (var j=0;j<searlis.length;j++) {
					searlis[j].className='';
          			seardivs[j].style.display='none';
				}
				 searlis[that.id].className='select';
       			 seardivs[that.id].style.display='block';
		}
	}
	
		var _content = document.getElementById('b-middle-top');
		var _lists = document.getElementById('lists');
		var _buttons = document.getElementById('buttons').getElementsByTagName('span');
		var _prev = document.getElementById('prev');
		var _next = document.getElementById('next');
		var _index = 1;
		var _result = false;
		var _timer;
		function _showButton () {
			for (var i=0;i<_buttons.length;i++) {
				_buttons[i].className = '';
			}
			_buttons[_index-1].className= 'on';
		}

		function _animate (_offset) {
			_result = true;
			var _newLeft = parseInt(_lists.style.left) +_offset;
			var _time = 300; //位移时间
			var _interval = 10; //位移间隔时间
			var _speed = _offset /(_time/_interval); //每次移动的距离

			function _go () {
				if((_speed <0 && parseInt(_lists.style.left) > _newLeft) ||      (_speed > 0 && parseInt(_lists.style.left) < _newLeft)) {
					_lists.style.left = parseInt(_lists.style.left)+_speed+'px';
					setTimeout(_go,_interval);
				}else {
				_result = false;
				_lists.style.left = _newLeft + 'px';
				if(_newLeft > -520) {
					_lists.style.left = -2600 + 'px';
				}
				if(_newLeft < -2600){
					_lists.style.left = -520 + 'px';
				}
					}
				}
				_go();
		}
		function _play () {
			_timer = setInterval(function () {
				next.onclick();
			},3000);
		}
		function _stop() {
			clearInterval(_timer);
		}
	
		_next.onclick = function () {
			if(_index == 5) {
				_index = 1;
			}else {
				_index +=1;
			}
			_showButton();
			if(!_result){
			_animate(-520)
		}
		}
		_prev.onclick = function () {
			if(_index ==1) {
				_index = 5;
			}else {
				_index -=1;
			}
			_showButton();
			if(!_result) {
			_animate(520);
		 }
		}

		for (var c =0;c<_buttons.length;c++) {
			_buttons[c].onclick = function () {
				var _myIndex = parseInt(this.getAttribute('indexbu'));
				var off = -520*(_myIndex-_index);
				_showButton();
				_index = _myIndex;
				_animate(off);
			}
		}
		_content.onmouseover = function (){
			_stop();
		}
		_content.onmouseout= function () {
			_play();
		}
		_play();

		var bottomimg = document.getElementById('bottom-img');
		var bbutton = document.getElementById('b-button').getElementsByTagName('span');
		var bprev = document.getElementById('b-prev');
		var bnext = document.getElementById('b-next');
		var middlebottom = document.getElementById('middle-bottom');
		var indexs = 1;
		var anis = false;
		var settime;
		
		function showButtons () {
			for(var n=0;n<bbutton.length;n++) {				
				bbutton[n].className = '';		
			}
			bbutton[indexs-1].className = 'online';
		}
		function change () {
			settime = setInterval(function () {
				bnext.onclick();
			},2000);
		}

		function stops () {
			clearInterval(settime);
		}
		function animates (ofset) {
			anis = true;
			var newLefts = parseInt(bottomimg.style.left) +ofset;
			var times = 300;//位移总时间
			var intervals = 10;//位移间隔时间
			var speeds = ofset/(times/intervals);
			function run () {
				if((speeds < 0 && parseInt(bottomimg.style.left) > newLefts) || (speeds >0 && parseInt(bottomimg.style.left) < newLefts)){
					bottomimg.style.left = parseInt(bottomimg.style.left)+speeds+'px';
					setTimeout(run,intervals);
				}else {
					anis = false;
					bottomimg.style.left = newLefts + 'px';
					if(newLefts  > -520){
					bottomimg.style.left = -1560 + 'px';
					}
					if(newLefts < -1560) {
					bottomimg.style.left = -520 + 'px';
					}
				}
			}
			run();
		}
		bprev.onclick = function () {
			if(indexs ==1) {
				indexs = 3;
			}else {
				indexs -=1;
			}
			showButtons();
			if(!anis){
			animates(520);
			}
		}
		bnext.onclick = function () {
			if(indexs == 3) {
				indexs = 1;
			}else {
				indexs +=1;
			}
			showButtons();
			if(!anis){
			animates(-520);
			}
		}

		for (var x = 0;x<bbutton.length;x++) {
			bbutton[x].onclick = function () {
				var myIndexs = parseInt(this.getAttribute('indexs'));
				var ofset = -520*(myIndexs-indexs);
				animates(ofset);
				indexs = myIndexs;
				showButtons();
				if(!anis) {
					animates(ofset);
				}
			}
		}
		middlebottom.onmouseover = stops;
		middlebottom.onmouseout = change;
		change();

		var tab_ul = document.getElementById('tab-ul').getElementsByTagName('li');
		var left_tab_bottom = document.getElementById('left-tab-bottom').getElementsByTagName('div');

		for(var i=0;i<tab_ul.length;i++) {
			tab_ul[i].id = i;
			tab_ul[i].onmouseover = function () {
				var that=this;
				for (var j=0;j<tab_ul.length;j++) {
					tab_ul[j].className='';
					left_tab_bottom[j].style.display = 'none';
				}
					tab_ul[that.id].className = 'select';
					left_tab_bottom[that.id].style.display = 'block';
			}
		}
				//获取绿色div
				var ad_content = document.getElementById('ad-content');
				//计时器
				var timer;

				

				//绿色div的位移
				
				timer = setInterval(function () {
					var old_top = ad_content.style.top;
					var new_top = parseInt(old_top) - 15;
					ad_content.style.top = new_top + 'px';
					if(new_top == -45) {
						ad_content.style.top =0;
					}
				},1000);
				//设置计时器
				var top = document.getElementById('top');
				var bottom = document.getElementById('bottom');
				var hot_2 = document.getElementById('hot_2');
				top.onclick = function () {
					top.style.backgroundColor = '#fe4600';
					top.style.color = '#fff';
					var old_t = parseInt(hot_2.style.top);
					if(old_t == 0){
					hot_2.style.top = '-68px';
					hot_2.style.transition = 'all 0.5s ease-in-out';
					}else if(parseInt(hot_2.style.top) <=-68){
					hot_2.style.top = '0px';
					hot_2.style.transition = 'all 0.5s ease-in-out';
					re = 0;	
					}
				}
				bottom.onclick = function () {
					bottom.style.backgroundColor = '#fe4600';
					bottom.style.color = '#fff';
					var bottom_t = parseInt(hot_2.style.top);
					if(bottom_t == 0){
					hot_2.style.top = '-68px' ;
					hot_2.style.transition = 'all 0.5s ease-in-out';
					}else if(parseInt(hot_2.style.top) <= -68) {
					hot_2.style.top = '0px';
					hot_2.style.transition = 'all 0.5s ease-in-out';
					re = 1;
					}
				}
				var life_lis = document.getElementById('life_ul').getElementsByTagName('li');
				var life_divs = document.getElementsByClassName('life_mod');
				for (var i=0;i<life_lis.length;i++) {
					life_lis[i].id=i;
					life_lis[i].onclick = function () {
						life(this.id);
					}
				}
				function life (index) {
					for (var j=0;j<life_lis.length;j++) {
							life_lis[j].className='';
							life_divs[j].style.display='none';
						}
							life_lis[index].className='on';
							life_divs[index].style.display='block';
				}
				

				var guang_roll = document.getElementById('guang-roll');
				var roll_imgs = document.getElementById('roll-images').getElementsByTagName('a');
				var roll_prev = document.getElementById('roll_prev');
				var roll_next = document.getElementById('roll_next');
				var roll_index =0;
				var roll_timer;
				roll_prev.onclick = function () {
					rollprevcli();
				}
				function rollprevcli () {
					roll_index--;
					if(roll_index < 0){
						roll_index=2;
					}
					rolltimer(roll_index);
				}
				function rollnextcli () {
					roll_index++;
					if(roll_index >=roll_imgs.length){
						roll_index=0;
					}
					rolltimer(roll_index);
				}
				roll_next.onclick = function () {
					rollnextcli();
				}
				roll_timer=setInterval(function () {
					rollnextcli();
				},1000)
				function rolltimer(index) {
					for(var roll=0;roll<roll_imgs.length;roll++){
						roll_imgs[roll].style.display='none';
					}
						roll_imgs[index].style.display='block';
				}
				guang_roll.onmouseover = function () {
					clearInterval(roll_timer);
				}
				guang_roll.onmouseout = function () {
					roll_timer=setInterval(function () {
					rollnextcli();
				},1000)
				}

				var s_content_ul=document.getElementById('s-content-ul').getElementsByTagName('li');
				var s_div = document.getElementsByClassName('s-div');
				function s_content() {
					for(var i=0;i<s_content_ul.length-1;i++){
						s_content_ul[i].id = i;
						s_content_ul[i].onmouseover=function () {
							for(var j=0;j<s_content_ul.length-1;j++) {
								s_div[j].style.display='none';
							}
								s_div[this.id].style.display='block';
						}
					}
				}
				s_content();

				// 左侧显示效果
				var b_left_ul = document.getElementById('b-left-ul').getElementsByTagName('li');

				// var b_left_div = document.getElementsByClassName('b-left-div');
				// function left_div () {
				// 	for (var i=0;i<b_left_ul.length;i++){
				// 		b_left_ul[i].id=i;
				// 		b_left_ul[i].onmouseover = function () {
				// 			for(var j=0;j<b_left_ul.length;j++){
				// 				b_left_ul[j].className='';
				// 				b_left_div[j].style.display='none';
				// 			}
				// 				b_left_ul[this.id].className='women';
				// 				b_left_div[this.id].style.display='block';
				// 		}
				// 		b_left_ul[i].onmouseout = function () {
				// 	   		for(var q=0;q<b_left_ul.length;q++){
				// 				b_left_ul[q].className='';
				// 				b_left_div[q].style.display='none';
				// 			}
				// 	   }
				// 	}
				// }
				// left_div();
				var lis = document.getElementById('topbar').getElementsByTagName('li');
				var map = document.getElementById('map');
				var map_first = document.getElementById('map-first');
				var mytaobao = document.getElementById('mytaobao');
				var shoucang = document.getElementById('shoucang');
				var maijia = document.getElementById('maijia');
				var kefu = document.getElementById('kefu');
				lis[20].onmouseover = function () {
					map.style.display='block';
					lis[20].className='top-li';
				}
				map.onmouseout = function () {
					map.style.display='none';
					lis[20].className='';
				}
				lis[0].onmouseover = function () {
					mytaobao.style.display='block';
					lis[0].className='top-li';
				}				
				lis[0].onmouseout = function () {
					mytaobao.style.display='none';
					lis[0].className='';
				}
				lis[7].onmouseover = function () {
					shoucang.style.display='block';
					lis[7].className='top-li';
				}				
				lis[7].onmouseout = function () {
					shoucang.style.display='none';
					lis[7].className='';
				}
				lis[11].onmouseover = function () {
					maijia.style.display='block';
					lis[11].className='top-li';
				}				
				lis[11].onmouseout = function () {
					maijia.style.display='none';
					lis[11].className='';
				}
				lis[17].onmouseover = function () {
					kefu.style.display='block';
					lis[17].className='top-li';
				}				
				lis[17].onmouseout = function () {
					kefu.style.display='none';
					lis[17].className='';
				}
						

}
