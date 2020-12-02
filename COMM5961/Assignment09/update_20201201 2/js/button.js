function showTab(n) {
    var cont = document.getElementById('desc').getElementsByTagName('dd');
    for(var i = 0; i < cont.length; i++) {
        cont[i].style.display = 'none';
    }
    cont[n].style.display = 'block';
};

$(function() {
				$('a').click(function() {
					//根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
					$('html,body').animate({
						scrollTop: ($($(this).attr('href')).offset().top - 50)
					}, 2000);
				});
			});

$(document).ready(function(){
	$("#btn").click(function(){
		$(".table1").show();
	})
})

$(document).ready(function(){
	$("#btn").dblclick(function(){
		$(".table1").hide();
	})
})
