$(document).ready(function(){
	var ans1='选项1',ans2='选项2';
	$('#que button').click(function(){
		$('#test button').text($('#que input').val());
	});
	$('#ans button').click(function(){
		ans1=$('#ans .ans1').val();
		ans2=$('#ans .ans2').val();
	});
	$('#test button').click(function(){
		var x=[];
		for(var i=1;i<10;i++){
			x[i]=Math.random();
			x[i]<=0.5 ? console.log('观众'+i+'表示 '+x[i]+' '+ans1) 
						: console.log('观众'+i+'表示 '+x[i]+' '+ans2);
		}
		$(this).siblings().css({'height':'160px','width':'200px',
			'text-align':'center','line-height':'160px','font-weight':'bold'});
		if (x.sort()[4]<=0.5){
			//选项1次数比较多
			$(this).siblings().text(ans1);
		}else{
			$(this).siblings().text(ans2);
		}
	});
});