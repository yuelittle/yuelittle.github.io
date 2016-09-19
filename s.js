function getStyle(obj,name){
	return obj.currentStyle||getComputedStyle(obj,false)[name];
}
function move(obj,json,options){
	clearInterval(obj.timer);
	//var start=parseFloat(getStyle(obj,name))
	options=options||{};
	options.time=options.time||800;
	options.type=options.type||'ease-in';
	var cont=parseInt(options.time/30);
			//var dis=tag-start;
			
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a=n/cont;
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/cont;
					var cur=start[name]+dis[name]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/cont;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break;
			}
				

					
			if(name=='opacity'){
				//var cur=start[name]+dis[name]/cont*n
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')'
			}else{
				obj.style[name]=cur+'px';
			}
		}	
		if(n==cont){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
}