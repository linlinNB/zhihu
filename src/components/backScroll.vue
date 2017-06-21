<template>
<div class="glyphicon glyphicon-triangle-top" href="javascript:;" id="btn"></div>
</template>
<script>
export default {
	watch:{

	},
	mounted(){
		this.backScrollTop()
	},
	methods: {
		backScrollTop(){
	// var head = document.getElementById('head');		
	var obtn = document.getElementById('btn');
	var height = document.documentElement.clientHeight;//获取可视区域高度
	var timer = null;
	window.onscroll = function(){ 
		// console.log(head)
		var a = true;
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的位置，返回数值,,谷歌支持后面的
		if (osTop>=height){ 
			obtn.style.display="block";
		}else{ 
			obtn.style.display="none";
		}
		if (!a){ 
			clearInterval(timer);
		}
		// if(head){
		// 	head.style.background = '#0588e9';
		// }else{
		// 	head.style.background = 'none';
		// }
	}
	obtn.onclick = function(){ 
		//设置定时器
		timer = setInterval(function(){ 
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的位置，返回数值,,谷歌支持后面的
		var speed = Math.floor(-osTop /6);

		document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
		
			if(osTop ==0){ 
				clearInterval(timer);
			}
		},30)//动画，定时器	
	}
		}
	}
}
</script>
<style>
	
	#btn{width: 50px;height: 50px;position: fixed;bottom: 30px; display: none;color: red;right: 15px;z-index: 1;background: #000;background: url(../assets/img/scrollTop.png) center no-repeat;background-size: 100%;}

</style>
