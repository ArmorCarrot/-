$(document).ready(function(){
	//获取问题
	$('#que button').click(function(){
		$('#test button').text($('#que input').val());
	});
	//获取选项数量
	var num=0;
	$('#num button').click(function(){
		if(isNaN($('#num input').val())){
			alert('请输入阿拉伯数字');
		}else{
			num=$('#num input').val();
			setAns(num);
		}
	});
	//设置选项
	function setAns(num){
		for(var i=0;i<num;i++){
			var innerString="选项"+(i+1)+":<input class='ans"+(i+1)+" type='text' placeholder='请输入选项'><br>";
			$('#ans').append(innerString);
		}
		$('#ansBtn').css({'display':'inline'});
	}
	//设置选项内容
	var ans=[];
	$('#ansBtn').click(function(){
		for(var i=0;i<num;i++){
			ans[i]=$('#ans .ans'+(i+1)).val();
		}
	});
	//随机函数
	function randomX(){
		n=parseInt(num);
		var flag=new Array(n).fill(0);
		var x=[];
		var avg=1/num;
		var sn=num*3+1;
		for(var i=0;i<sn;i++){
			x[i]=Math.random();
			console.log(x[i]);
			var index=parseInt(x[i]/avg);
			flag[index]+=1;
		};
		console.log(flag);
		//取出数组中计数最多的数并寻找其下标
		var maxNum=Math.max.apply(null,flag);
		for(e in flag){
			if(flag[e]==maxNum){
				return e;
			}
		}
	}
	$('#test button').click(function(){
		var result=randomX();
		$(this).siblings().css({'height':'160px','width':'200px',
			'text-align':'center','line-height':'160px','font-weight':'bold'});
		$(this).siblings().text(ans[result]);
	});
});