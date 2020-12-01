function showTab(n) {
    var cont = document.getElementById('desc').getElementsByTagName('dd');
    for(var i = 0; i < cont.length; i++) {
        cont[i].style.display = 'none';
    }
    cont[n].style.display = 'block';
};

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
