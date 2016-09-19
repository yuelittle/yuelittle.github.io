;$(function(){
	function w990(){
		if ($(window).width() < 1210) {
			$('body').attr('id', 'w990');
			var size=$('head link[href="css/w990.css"]').size();
			console.log(size);
			if(!size){
				$('head link').last().after($('<link href="css/w990.css" rel="stylesheet" >'));
			}
			// if($('head link').size()){
			// 	$('head link').last().after($('<link href="css/w990.css">'));
			// }

			// 隐藏楼层两个品牌
			$('.floor .brands').each(function(){
				$(this).find('li').first().addClass('h');
				$(this).find('li').last().addClass('h');
			});
		}else{
			$('body').attr('id', '');
		}

	}
	$(window).resize(function() {
		w990();
	});	
	w990();

});