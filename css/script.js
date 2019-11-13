$(function(){
	$(".addClass").click(function (e) {
		e.preventDefault();
		$('#qnimate').addClass('popup-box-on');
	});          
	$("#removeClass").click(function () {
		$('#qnimate').removeClass('popup-box-on');
	});
});

$(document).ready(function(){
	$(".buySchampo").click(function(){
	  $("#showMe").toggle();
	});
  });
