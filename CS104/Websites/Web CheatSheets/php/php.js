$(document).ready(function(){
	$("#copyButton").click(function() {
		$("#copyTextArea").val(phpFieldecske.getValue());
		
		$("#copyTextArea").focus();
		$("#copyTextArea").select();
		  try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			$("#copyButton").text("Copied");
		  } catch (err) {
			$("#copyButton").text("Error");
		  }
		setTimeout(function(){ 
			$("#copyButton").text("Copy");
		}, 2000);
	});
	$(".preWrap pre").click(function() {
		var seg = $(this).text();
		if (seg.includes("<?php")) {
			phpFieldecske.setValue(seg);
		} else {
			phpFieldecske.setValue("<php\n" + seg + "?>");
		}
		//$("#copyButton").trigger("click");
	});	
	$("span").each(function() {
		//console.log($(this).css('color'));
		if ($(this).css('color') == "rgb(0, 180, 24)") {
			$(this).addClass('jsComment');
		}
	});
});





























