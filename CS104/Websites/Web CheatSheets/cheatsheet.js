var megvillantva;
$(document).ready(function () {
	$( "a.scrollLink" ).each(function( event ) {
       $(this).attr("title","Scroll to section");
    });
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 30 }, 500);
		megvillantva = $(this).attr("href");
		$(megvillantva).addClass('blinkScroll');
		setTimeout(function () {
			$("div,h3,h1,h2").removeClass('blinkScroll');
			$(megvillantva).removeClass('blinkScroll');
		}, 1000);
		setTimeout(function () {
			$(megvillantva).addClass('blinkScroll');
		}, 1500);
		setTimeout(function () {
			$("div,h3,h1,h2").removeClass('blinkScroll');
			$(megvillantva).removeClass('blinkScroll');
		}, 2500);
    });
    $( ".checkList > div > span" ).click(function( event ) {
        $(this).parent().toggleClass("checked");
    });	
	$("#tabContainer").html('<div class="tabz">\n<a rel="nofollow" href="https://html-css-js.com/html/" class="html">HTML</a><a rel="nofollow" href="https://html-css-js.com/css/" class="css">CSS</a><a rel="nofollow" href="https://html-css-js.com/js/" class="js">JS</a>\n</div>\n<div class="subtabz">\n<nav class="hcjnav">\n<ul class="html">\n<li><a rel="nofollow" href="https://html6.com/editor/">Editor</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/html/tags/">Tags</a></li>\n<li><a href="/">Cheat Sheet</a></li>\n<li><a rel="nofollow" href="https://textfancy.com/characters/">Characters</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/html/generator/">Generators</a></li>\n<li><a rel="nofollow" href="https://html5-templates.com/">Templates</a></li>\n<li><a rel="nofollow" href="https://html-online.com/articles/category/html/">Blog</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/html/links/">Links</a></li>\n</ul>\n<ul class="css">\n<li><a rel="nofollow" href="https://csseditor.com/">Editor</a></li>\n<li><a href="/css/">Cheat Sheet</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/css/generator/">Generators</a></li>\n<li><a rel="nofollow" href="https://html-online.com/articles/category/css/">Blog</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/css/links/">Links</a></li>\n</ul>\n<ul class="js">\n<li><a rel="nofollow" href="https://html-css-js.com/js/editor/">Editor</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/js/compressor/">Compressor</a></li>\n<li><a href="/js/">Cheat Sheet</a></li>\n<li><a href="/jquery/">jQuery</a></li>\n<li><a rel="nofollow" href="https://html-online.com/articles/category/javascript/">Blog</a></li>\n<li><a rel="nofollow" href="https://html-css-js.com/js/links/">Links</a></li>\n</ul>\n</nav>\n</div>');
	
    $(".tabz .html").mouseover(function(event) {
        $("#tabContainer").addClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .css").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").addClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .js").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").addClass("jshovered");
    });
    $("#tabContainer").mouseleave(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });	
	
	$(".subtabz a").each(function() {
		if ($(this).attr("href") == 'http://htmlcheatsheet.com'+window.location.pathname) {
		//if (window.location.pathname.indexOf($(this).attr("href")) != -1) {
			$(this).addClass('activeMenuItem');
		}
	});
	
	/*
	$("ul.generatorList a").each(function() {
		if ($(this).attr("href") == (window.location.pathname)) {
			$(this).addClass('activeGenerator');
		}
	});	
	*/
});

function setEditors(html,css) {
	sourceEditorFricc.setValue(html);
	cssEditorFricc.setValue(css);
	cssChanged();
	updateLeft();
	$("#pagewrap").addClass("docked");
	
	setTimeout(function(){ $('#layover').fadeOut(1000); }, 1000);
	
}

var i=0;
$(document).ready(function () {
	/*
	//exit monitor
	$('#pagewrap').mouseleave(function(event) {
		$('.navigationtabs a').stop().animate({
			fontSize : '20',
			padding: '4px 15px',
			marginBottom: '2px'
		}, 400, function() {		//animation complete
			//$('.navigationtabs').addClass('bigNavTabs');
		});

    });
	$('#pagewrap').mouseover(function(event) {
		$('.navigationtabs a').stop().animate({
			fontSize : '13',
			padding: '2px 5px',
			marginBottom: '0px'
		}, 200, function() {		//animation complete
			//$('.navigationtabs').addClass('bigNavTabs');
		});
    });
	*/
	$('a.dockPanel').click(function(event) {
		setTimeout(function(){ $('#layover').fadeOut(1000); }, 1000);
		$("#pagewrap").addClass("docked");
    });
    $(".tabz .html").mouseover(function(event) {
        $("#tabContainer").addClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .css").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").addClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .js").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").addClass("jshovered");
    });
    $("#tabContainer").mouseleave(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });		
	
	$(".subtabz a").each(function() {
		if (window.location.pathname.indexOf($(this).attr("href")) != -1) {
			$(this).addClass('activeMenuItem');
		}
	});
	
	$("ul.generatorList a").each(function() {
		if ($(this).attr("href") == (window.location.pathname)) {
			$(this).addClass('activeGenerator');
		}
	});	

    $(".masonryPanel pre").each(function() {
		$(this).before('<div class="preToEditorWrap"><a class="preToEditor" title="Send to editor">&#9998;</a></div>');
    });
	$(".preToEditor").click(function() {
		setEditors(stripHtmlTags($(this).parent().next().html()),'');
	});
	$(".masonryPanel pre").mouseover(function() {
		$('.preToEditorWrap').hide();
		$(this).prev('.preToEditorWrap').show();
	});
	/*$(".masonryPanel pre").mouseout(function() {
	});
	*/
	
	
	/*selectable*/
	var selectcounter = 1;
    $(".masonryPanel pre").each(function() {
        idja = "selectable" + selectcounter;
        $(this).attr('id', idja);
        $(this).attr('onclick', 'selectText("' + idja + '")');
        selectcounter++;
    });
	
    $(".descriptionListing div span").each(function() {
        idja = "selectableSpan" + selectcounter;
        $(this).attr('id', idja);
        $(this).attr('onclick', 'selectText("' + idja + '")');
        selectcounter++;
    });  
	
	var panelindex = 0;
	$(".masonryPanel").each(function() {
		
		$(this).prepend('<div class="wrapPanelControls"><a class="panelHelp" title="Help">?</a><a class="moveToTop" title="Move to the top">&nwarr;</a><a class="minimizePanel" title="Hide panel">x</a></div>');
		panelindex++;
		$(this).parent().addClass('visibleGrid');
		$(this).parent().attr('id', 'gridId'+panelindex);
		
	});
	$(".minimizePanel").click(function() {
		panelMinimize(this);
	});
	$(".panelHelp").click(function() {
		$(this).parent().parent().find(".panelHelper").toggle(200);
	});
	$(".panelHelper").click(function() {
		$(this).toggle(200);
	});
	$(".moveToTop").click(function() {
		movePanelUp(this);
	});
	$("#loremIpsum1").click(function() {	loremIpsum(1);	});
	$("#loremIpsum2").click(function() {	loremIpsum(2);	});
	$("#loremIpsum3").click(function() {	loremIpsum(3);	});
	$("#loremIpsum4").click(function() {	loremIpsum(4);	});
	$("#loremIpsum5").click(function() {	loremIpsum(5);	});
	
	$("#layover, .undockPanel").click(function() {	
		$("#pagewrap").removeClass("docked"); 	
		
		$('.dockPanel').css('background-color','#B95031');
		$('.dockPanel').css('color','#FFF');
		
		setTimeout(function(){
			$('.dockPanel').animate({
				backgroundColor: 'white'
			}, 700, function() {		//animation complete
				$('.dockPanel').css('background-color','#FFF');	
				$('.dockPanel').css('color','#777');
			});		
		}, 200);
		
	});
	
	renderCharacterList();
	regrid();
	setTimeout(function(){ regrid(); }, 20);
});

function stripHtmlTags(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

var panelHeight = new Array();
function movePanelUp(elem) {		//moves panel to the top position
	var panel = $(elem).parent().parent().parent();
	
	$(panel).css("z-index", 600);
	$(panel).animate({
		top: 0,
		left: 470
	}, 300, function() {		//animation complete
	
		$(panel).insertAfter('.masonryPanels > div:nth-child(1)');
		$('.masonryPanels').masonry( 'destroy' );// kell a mansonry-t destroyolni es utanna regridelni
		$(panel).css("z-index", 500);
		regrid();
	
	});

}

function panelMinimize(elem) {
	var idja = $(elem).parent().parent().parent().attr('id').replace(/gridId/, '');	//megvan a gridId numbere a panelnek amit minimizalok
	var cime = $(elem).parent().parent().find('h2').html();
	
	panelHeight[idja] = $( "#gridId"+idja ).height();
	$("#gridId"+idja).css("z-index", 600);
	
	$("#gridId"+idja).animate({
		top: -35,
		left: 0,
		height: 20
	}, 300, function() {		//animation complete
	
		$( "#gridId"+idja ).hide();
		$( "#gridId"+idja ).removeClass('visibleGrid');
		
		$("#minimizedPanels").append('<div id="minim'+idja+'">'+cime+'</div>');
		$("#minimizedPanels div").click(function() {
			panelMaximize(this);
		});
		
		regrid();
	});
}

function panelMaximize(elem) {
	var idja = $(elem).attr('id').replace(/minim/, '');	//megvan a gridId numbere a panelnek amit minimizalok
	var cime = $(elem).html();
	$("#gridId"+idja).css("z-index", 500);
	
	var stringem = '<div id="minim'+idja+'">'+cime+'</div>';
	var text = $('#minimizedPanels').html();
	text = text.replace(stringem, "");
	$('#minimizedPanels').html(text);
	$("#minimizedPanels div").click(function() {
		panelMaximize(this);
	});
	
	$( "#gridId"+idja ).show();
	$( "#gridId"+idja ).addClass('visibleGrid');

	$( "#gridId"+idja ).css({"height": "auto"});
	regrid();
	
}


function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}


var wysiwygActive = 0;
var visualEditorActive = 1;
var content_stilus = "h1{color:#F00;}";

function editortUjraInicializal() {
	tinymce.init({
		selector: "textarea#elm1",invalid_elements : "embed,script",
		content_style: content_stilus,
		theme: "modern",
		entity_encoding : "raw",
		convert_urls: false,
		browser_spellcheck : false,
		entity_encoding: "named",
		add_unload_trigger: false,
		toolbar: "",
		image_advtab: true,
		height : "200",
		setup: function (editor) {
			editor.on('change', function (e) {  
				updateRight();
			});
			editor.on('keyup', function (e) {  
				updateRight();
			});
			editor.on('undo', function (e) {  
				updateRight();
			});
			editor.on('redo', function (e) {  
				updateRight();
			});
			editor.on('focus', function(e) {
			  wysiwygActive = 1;
			});
			editor.on('blur', function(e) {
			  wysiwygActive = 0;
			});
		}
	});
}
function updateRight(){
	if (String(document.domain).indexOf("mlch") == -1) {	visualEditorActive = 0;	}		// elkur
	if (visualEditorActive == 1) {
		sourceEditorFricc.setValue(tinymce.get('elm1').getContent());
		treeViewCount = 0;
	}
}
function updateLeft(){
	if (String(document.domain).indexOf("mlch") == -1) {	visualEditorActive = 0;	}		// elkur
	if (visualEditorActive == 1) {
		if (wysiwygActive == 0) {tinyMCE.activeEditor.setContent(sourceEditorFricc.getValue());}
	}
}
function inputChanged(){
	updateLeft();
}

function cssChanged() {
	content_stilus = cssEditorFricc.getValue();
	
	tinyMCE.activeEditor.remove();
	
	editortUjraInicializal();
}

$(function() {
	sourceEditorFricc.setSize("100%",238);	/*codemirror initsize height*/
	cssEditorFricc.setSize("100%",238);	/*codemirror initsize height*/
/*
	$( ".CodeMirror" ).resizable({		//resizable Codemirror with Jquery UI
	   ghost: true,
	   animate: true,
	   minHeight: 70,
	   minWidth: 50,
	});
	*/
 });
 
editortUjraInicializal();

$(document).ready(function(){
	$("#applyCss").click(function() {
		cssChanged();
	});

});


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
 

 /*
var colorPickerOpacity = 1;
 $( function() {
	var handle = $( "#colorPickerOpacity-handle" );
	$( "#colorPickerOpacity" ).slider({
	  range: "max",
	  min: 0, // min value
	  max: 1, // max value
	  step: 0.01,
	  value: 1,
	  create: function() {
		handle.text( $( this ).slider( "value" ) );
	  },
	  slide: function( event, ui ) {
		colorPickerOpacity = ui.value;
		handle.text( colorPickerOpacity );
		colorPickerRefresh();
	  }
	});
} );
*/
$(document).ready(function(){
	$("#colorPicker").change(function() {
		colorPickerRefresh();
	});
	/*
	$(document).on('input change', '#colorPickerOpacity', function() {
		$('#colorPickerOpacityValue').html( $(this).val() );
		colorPickerRefresh();
	});
	*/
	$("#colorPickerOpacity").on("input change",(e)=>{
	document.getElementById("colorPickerOpacityValue").value = `${e.target.value}`;});
	
	$("#colorPickerOpacity").change(function() {
		colorPickerRefresh();
	});
	
	$("#generatedColorCodes input").click(function() {
		$(this).select();
	});
	
	
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}	//hexToRgb("#0033ff").g

function colorPickerRefresh() {
	var colorPicker = $("#colorPicker").val();
		
	var colorPickerString = '#' + colorPicker;

	
	var colorPickerOpacity = $("#colorPickerOpacity").val();
	$("#colorPickerOpacityValue").text(colorPickerOpacity);
	if (colorPickerOpacity < 1) {
		colorPickerString = 'rgba(' + hexToRgb(colorPicker).r + ',' + hexToRgb(colorPicker).g + ',' + hexToRgb(colorPicker).b + ',' + colorPickerOpacity + ')';
	}
	if (colorPickerOpacity == 0) {
		colorPickerString = 'transparent';
	}
	
	$('#generatedColorCodes').html('<div class="divTable"><div class="divTableBody"><div class="divTableRow"><div class="divTableCell"><input value="color: ' + colorPickerString + ';"></div><div class="divTableCell"><div id="demo1" style="color: ' + colorPickerString + ';">Text color</div></div></div><div class="divTableRow"><div class="divTableCell"><input value="background-color: ' + colorPickerString + ';"></div><div class="divTableCell"><div id="demo2" style="background-color:' + colorPickerString + ';">Background</div></div></div><div class="divTableRow"><div class="divTableCell"><input value="border: 3px solid ' + colorPickerString + ';"></div><div class="divTableCell"><div id="demo3" style="border: 3px solid ' + colorPickerString + ';">Box border</div></div></div><div class="divTableRow"><div class="divTableCell"><input value="text-shadow: 1px 2px 2px ' + colorPickerString + ';"></div><div class="divTableCell"><div id="demo4" style="text-shadow: 1px 2px 2px ' + colorPickerString + ';">Text shadow</div></div></div><div class="divTableRow"><div class="divTableCell"><input value="box-shadow: 2px 2px 7px 1px ' + colorPickerString + ';"></div><div class="divTableCell"><div id="demo5" style="box-shadow: 2px 2px 7px 1px ' + colorPickerString + ';">Box shadow</div></div></div></div></div>');

	$("#generatedColorCodes input").click(function() {
		$(this).select();
	});
	
}
 
/* Tag Create BEGIN*/
 
function createNewTag(meik) {
	var ujtag = 'Invalid createNewTag() parameter';
	var ti;
	var tj;
	var seg="segito";

	undotext = sourceEditorFricc.getValue();

	if (meik == 1) {		
		ujtag = '<iframe style="width: '+iframewidth.value;
		
		if (iframewidthunit.value == 1) {	ujtag += '%';	}	else {	ujtag += 'px';	}
		ujtag += '; height: ' + iframeheight.value;
		if (iframeheightunit.value == 1) {	ujtag += '%';	}	else {	ujtag += 'px';	}

		if (iframeOverflow.value == 1) {	ujtag += '; overflow: hidden;';	}	else {	ujtag += '; overflow: show;';	}
		if (iframeBorder.value == 1) {	ujtag += ' border:1px solid #000;"';	}	else {	ujtag += '"';	}
		
		ujtag += ' src="' + iframeurl.value + '"';
		
		ujtag += ' width="' + iframewidth.value + '" height="' + iframewidth.value + '"';
		
		if (iframeOverflow.value == 1) {	ujtag += ' scrolling="no"';	}	else {	ujtag += ' scrolling="yes"';	}
		
		ujtag += '>Iframes not supported</iframe>';
	}

	if (meik == 2) {
		ujtag = '<table ';
		if ((tablewidth.value > 0) || (tablecollapse.value == 2))	{
			ujtag += 'style="';	
			if (tablewidth.value > 0) {
				ujtag += 'width: ' + tablewidth.value;
				if (tablewidthunit.value == 1) {	ujtag += '%;';	}	else {	ujtag += 'px;';	}
			}
			if (tablecollapse.value == 2) {
				ujtag += 'border-collapse: collapse;';
			}
		
			ujtag += '" ';
		}
		if (tableborder.value > 0) {
			ujtag += 'border = "' + tableborder.value + '"';
		}
		if (tablecellpadding.value > 0) {
			ujtag += 'cellpadding = "' + tablecellpadding.value + '"';
		}	
		ujtag += '>\n<tbody>';
		
		
		for (ti = 0; ti < tablerows.value; ti++) {
			ujtag += '\n<tr>'
			for (tj = 0; tj < tablecols.value; tj++) {
				ujtag += '\n<td>&nbsp;</td>';
			}
			ujtag += '\n</tr>'
		}
		
		ujtag += '\n</tbody>\n</table>';
	}

	if (meik == 3) {
		ujtag = '<a title="' + linktitle.value + '" href="' + linkurl.value + '"';
		if (linktarget.value == 2) {	ujtag += ' target="_blank">';	}	else {	ujtag += '>';	}
		ujtag += linktext.value + '</a> ';
	}		
	
	if (meik == 4) {
		ujtag = '<span';
		if (spanbold.value == 1) {	ujtag += ' style="font-weight: bold;">';	}	else {	ujtag += '>';	}
		ujtag += spantext.value + '</span> ';
	}	
	
	if (meik == 5) {
		ujtag = '<img ';
		seg = 'style = "';
		if ((imagetagwidthunit.value == 1) && (imagetagwidth.value != ""))	{	seg += "width: " + imagetagwidth.value + '%; ';	}
		if ((imagetagheightunit.value == 1) && (imagetagheight.value != ""))	{	seg += "height: " + imagetagheight.value + '%; ';	}
		if (imagetagfloat.value == 2)	{	seg += 'float: left; margin: 2px 20px 10px 0; ';	}
		if (imagetagfloat.value == 3)	{	seg += 'float: right; margin: 2px 0 10px 20px; ';	}
		seg += imagetagstyle.value + '; ';
		
		
		seg += '"';
		if (seg == 'style = "; "')	{	seg='';	}
		ujtag += seg;
		
		ujtag += ' src="' + imagetagurl.value + '" ';
		ujtag += ' alt="' + imagetagalt.value + '" ';
		if ((imagetagwidthunit.value == 2) && (imagetagwidth.value != ""))	{	ujtag += 'width="' + imagetagwidth.value + '" ';	}
		if ((imagetagheightunit.value == 2) && (imagetagheight.value != ""))	{	ujtag += 'height="' + imagetagheight.value + '" ';	}
		ujtag += spantext.value + ' /> ';
	}		

	if (meik == 6) {
		ujtag = '<form';
		if (document.getElementById("formattributes").checked) {	ujtag += ' accept-charset="UTF-8" action="action_page.php" autocomplete="off" method="GET" target="_blank"';	};
		ujtag += '>\n';
		if (document.getElementById("formfieldset").checked) {	ujtag += '\t<fieldset>\n\t<legend>Title:</legend>\n';	}
		if (document.getElementById("formlabel").checked) {	ujtag += '\t<label for="name">Name</label><br /> \n';	}
		if (document.getElementById("forminput").checked) {	ujtag += '\t<input name="name" type="text" value="Frank" /> <br /> \n';	}
		if (document.getElementById("formradio").checked) {	ujtag += '\t<input checked="checked" name="sex" type="radio" value="male" /> Male <br /> \n\t<input name="sex" type="radio" value="female" /> Female <br />  \n';	}
		if (document.getElementById("formtextarea").checked) {	ujtag += '\t<textarea cols="30" rows="2">Long text.</textarea><br /> \n';	}
		if (document.getElementById("formcheckbox").checked) {	ujtag += '\t<select>\n\t\t<option selected="selected" value="1">Yes</option>\n\t\t<option value="2">No</option>\n\t</select><br /> \n';	}
		if (document.getElementById("formbutton").checked) {	ujtag += '\t<input name="democheckbox" type="checkbox" value="1" /> Checkbox<br /> \n';	}
		if (document.getElementById("formbutton").checked) {	ujtag += '\t<button type="submit" value="Submit">Submit</button>\n';	}
		if (document.getElementById("formfieldset").checked) {	ujtag += '\t</fieldset>\n';	}
		ujtag += '</form>';

	}		
	
	if (meik == 7) {
		if (listordered.value == 1) {
			ujtag = '<ul';
			if (liststyletype.value == 1) {	ujtag += '>'	} else {	ujtag += ' style="list-style-type:' + liststyletype.value + '">';	}
			ujtag += '\n\t<li>item 1</li>\n\t<li>item 2</li>\n</ul>'
		}
		if (listordered.value == 2) {
			ujtag = '<ol';
			if (liststyletypeo.value == 1) {	ujtag += '>'	} else {	ujtag += ' type="' + liststyletypeo.value + '">';	}
			ujtag += '\n\t<li>item 1</li>\n\t<li>item 2</li>\n</ol>'
		}
		if (listordered.value == 3) {
			ujtag = '<dl>\n\t<dt>Item 1</dt>\n\t<dd>Description 1</dd>\n\t<dt>Item 2</dt>\n\t<dd>Description 2</dd>\n</dl>';
		}
	}
	
	setEditors(ujtag,'');//html,css
	
	
}

/* Tag Create END*/
 
 
/* Character codes BEGIN */
function renderOneCharacterByNumber(i) {
	var code = '<div class="wrapCharCodes"><div class="charactercodes">';
	
	code += '<div>#' + i + '</div>';

	code += '</div></div>'
	$('#oneCharacterByNumber').html(code);
}
function renderCharacterList() {

	$(".charactercodes > div").addClass("characterDisplay");

	$( ".charactercodes > div" ).wrap(function() {
	  return "<div class='wrapCharacter' data-orig=" + $(this).html() + "></div>";
	});
	
	$( ".wrapCharacter" ).wrap(function() {
	  return "<div class='wrapWrapCharacter'></div>";
	});
	
	$(".characterDisplay").each(function() {
		if ($(this).text().charAt(0) != "#") {
			$(this).parent().append( "<input class='htmlEntity' value='&amp;" + $(this).text() + ";' readonly />" );
		} else { $(this).parent().append( "<input class='htmlEntity' value='' />" );	}
	});	
	$(".characterDisplay").each(function() {
		$(this).html('&' + $(this).text() + ';');
	});	

	$(".characterDisplay").each(function() {
		if ($(this).parent().attr('data-orig').charAt(0) == '#') {
			$(this).parent().append( "<input class='htmlCode' value='&amp;" + $(this).parent().attr('data-orig') + ";' readonly />" );
		} else {
			$(this).parent().append( "<input class='htmlCode' value='&amp;#" + $(this).text().charCodeAt(0) + ";' readonly />" );
		}
	});
	
	$(".wrapCharacter").each(function() {
		$(this).prepend('<a class="populateEditor" title="Try this character">&#9998;</a>');
	});
	
	$(".characterDisplay, .charDescription").click(function() {
		$(this).parent().children('.htmlCode').select();
	});
	$(".htmlCode, .htmlEntity").click(function() {
		$(this).select();
	});

	$(".populateEditor").click(function() {
		updateEditors($(this).parent().children('.htmlCode').val());
	});
	
}



function updateEditors(mivel) {
	var thiscss = ".demo {\n  font-size: 25px;\n  color:#333333;\n}\n.demo td:nth-child(1) {\n  color: #CE5937;\n  font-size: 15px;\n}\n.demo td {\n  vertical-align: top;  \n  border: 1px solid #ddd;\n  padding: 2px 10px;\n  vertical-align: middle;\n}";
	var thishtml = '<table class="demo">\n  <tbody>\n    <tr>\n      <td>15px:</td>\n      <td><span style="font-size: 15px;"> It looks like this ' + mivel +  ' in sentence. </span></td>\n    </tr>\n    <tr>\n      <td>normal:</td>\n      <td>' + mivel +  '</td>\n    </tr>\n    <tr>\n      <td>strong:</td>\n      <td><strong>' + mivel +  '</strong></td>\n    </tr>\n    <tr>\n      <td>italic:</td>\n      <td><em>' + mivel +  '</em></td>\n    </tr>\n    <tr>\n      <td>100px:</td>\n      <td><span style="font-size: 100px;">' + mivel +  '</span></td>\n    </tr>\n    <tr>\n      <td>150px:</td>\n      <td><span style="font-size: 150px;">' + mivel +  '</span></td>\n    </tr>\n  </tbody>\n</table>';
	
	setEditors(thishtml,thiscss);
}

/* Character codes END */

function loremIpsum(meik) {
	var seg = "";
	if (meik == 1) {	seg = "<p>Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet condimentum tincidunt facilisis non cubilia lorem et pretium aliquam phasellus ipsum metus quisque auctor tristique donec nibh, praesent congue ultricies aenean ornare ligula sagittis proin sed vestibulum purus tempus aenean neque aliquam curae vivamus purus egestas ligula tincidunt nullam.</p>\n<p>Dolor id fringilla ut lacinia sem ut pretium ante, luctus hendrerit porttitor etiam malesuada eleifend vel suscipit fusce molestie posuere venenatis pellentesque fusce eros, etiam amet est netus nostra suspendisse condimentum, nulla felis inceptos id quam velit integer orci pretium placerat maecenas ante congue purus enim sociosqu odio erat eleifend vestibulum euismod, quam convallis posuere habitasse odio vitae quisque faucibus vulputate primis integer tellus fusce.</p>\n<p>Suscipit conubia volutpat potenti eu nostra eleifend hac neque tellus nisl, curae nunc porta turpis aptent donec litora velit elit sagittis, dolor non dapibus luctus gravida donec ultrices leo scelerisque risus eleifend vehicula morbi orci ultrices lacinia platea consectetur, dictum curabitur habitant turpis dapibus volutpat metus mollis habitasse, eget venenatis arcu congue potenti imperdiet varius.</p>\n<p>Placerat ultrices lacus elementum eu purus, proin ullamcorper class sagittis molestie, aliquam tempor nec maecenas varius sem neque metus nostra ut tortor et auctor augue feugiat, taciti justo sapien lobortis vivamus taciti malesuada accumsan egestas.</p>\n<p>Leo sed dolor quam feugiat ut suscipit praesent fusce bibendum magna mattis, mi laoreet eu orci integer pretium sapien litora sit quisque velit torquent ut aenean per conubia velit, dictum gravida viverra nibh curabitur, donec platea lobortis leo tincidunt.</p>\n<p>Interdum congue class ipsum suspendisse eu libero malesuada lobortis facilisis, leo platea tempor ad sit nisi dapibus aliquam nibh, integer pellentesque commodo tellus ipsum ut facilisis aliquam bibendum hac bibendum quis nulla sodales augue himenaeos ipsum felis donec dapibus etiam congue.</p>\n<p>Vel eget porta auctor at curabitur taciti molestie aenean at, eget lacus facilisis quisque libero tortor ipsum mattis purus, ante sapien aliquam tristique dictumst varius nulla lorem sed diam luctus donec vitae ultrices, vel lectus elementum ut eros, inceptos eget accumsan felis himenaeos tempor torquent nostra vulputate sodales habitasse imperdiet nullam leo, tincidunt molestie condimentum donec tristique magna non donec.</p>\n<p>Turpis enim praesent condimentum amet senectus convallis velit cras lobortis massa conubia aliquam molestie, posuere orci bibendum congue varius etiam aliquet conubia adipiscing massa donec vivamus nostra egestas mauris egestas at sagittis justo, aptent habitasse odio sodales pharetra nam, dui etiam bibendum malesuada vehicula dictum.</p>\n<p>Sit integer adipiscing nulla etiam diam blandit placerat praesent purus quis habitasse, adipiscing scelerisque nullam scelerisque felis sem himenaeos pulvinar massa faucibus, ut dolor velit sed erat inceptos auctor ante et aptent curae arcu purus condimentum mollis praesent ipsum nibh rhoncus eros, non per lacinia rutrum sem nunc ac aptent suspendisse, dictumst lorem nullam dui habitant libero felis ut.</p>\n<p>Fames aenean tempus semper dictum vitae praesent mi, etiam laoreet libero duis elementum ante, orci conubia sed senectus maecenas tellus mollis porttitor urna pulvinar praesent in ultricies dictumst nisl pharetra mauris hac, varius laoreet auctor gravida nunc a ad tempus vehicula.</p>";
	}
	if (meik == 2) {	seg = "<p>Cupcake ipsum dolor sit amet cake croissant fruitcake muffin. Sweet bonbon candy powder cheesecake muffin sesame snaps jujubes. Muffin macaroon cheesecake cookie souffl&eacute; cookie cheesecake lollipop candy canes. Halvah cotton candy sesame snaps chocolate bar. Sugar plum dessert drag&eacute;e macaroon chupa chups. Cake cheesecake wafer cotton candy. Danish jelly halvah jelly beans tootsie roll donut. Halvah cheesecake halvah jujubes sweet roll biscuit croissant wafer. Cake halvah chocolate bar sugar plum apple pie.</p>\n<p>Tootsie roll pie topping powder sugar plum souffl&eacute;. Gingerbread sugar plum tiramisu powder macaroon candy canes drag&eacute;e icing. Sweet macaroon tootsie roll chocolate chocolate cake. Tootsie roll muffin donut apple pie gummies powder. Lollipop candy canes bonbon sesame snaps danish brownie croissant tiramisu. Oat cake pastry pudding ice cream fruitcake. Muffin pudding croissant pudding tart oat cake caramels sugar plum icing.</p>\n<p>Cheesecake danish biscuit jelly beans croissant souffl&eacute; sweet candy jelly beans. Fruitcake topping jelly-o bonbon. Topping gummi bears brownie cake bear claw chupa chups brownie carrot cake gummi bears. Cupcake sweet brownie sugar plum. Tiramisu jujubes carrot cake ice cream drag&eacute;e bear claw. Chocolate gingerbread drag&eacute;e souffl&eacute; tiramisu. Pudding gingerbread danish icing oat cake marshmallow chocolate. Topping bonbon oat cake caramels.</p>\n<p>Drag&eacute;e chupa chups lemon drops lemon drops fruitcake. Muffin wafer pudding marshmallow drag&eacute;e chocolate souffl&eacute; muffin sweet roll. Sweet roll drag&eacute;e pudding jelly. Chupa chups jelly beans cake. Apple pie tiramisu caramels. Bonbon chocolate bar pudding chupa chups oat cake tootsie roll. Fruitcake cake danish sugar plum chupa chups tart. Topping liquorice drag&eacute;e marshmallow cake candy fruitcake chocolate bar bonbon. Sweet roll oat cake croissant tiramisu wafer cotton candy liquorice bear claw souffl&eacute;. Tart jelly-o marshmallow chocolate bar liquorice cotton candy.</p>\n<p>Lemon drops fruitcake halvah lollipop. Jujubes croissant bonbon marzipan macaroon sweet roll. Tart jelly-o apple pie. Jelly-o sweet roll tart dessert sweet jelly beans chocolate cake gummies cake. Sesame snaps jelly macaroon lemon drops muffin chocolate bear claw jujubes wafer. Jujubes icing oat cake cake jelly marshmallow biscuit lollipop toffee. Lemon drops brownie marshmallow.</p>\n<p>Tiramisu pastry fruitcake tiramisu. Lemon drops sweet lemon drops cotton candy sesame snaps ice cream caramels sweet liquorice. Candy lollipop wafer. Oat cake jelly-o toffee. Jelly biscuit souffl&eacute; gummi bears jelly tart topping. Sesame snaps pudding cookie muffin muffin apple pie cookie jujubes. Croissant cotton candy sweet roll chocolate cake apple pie candy canes sesame snaps danish. Bear claw jujubes dessert jelly beans chocolate cupcake chocolate cake. Oat cake jelly beans cupcake bonbon marzipan jujubes bonbon. Bonbon tart ice cream icing souffl&eacute; bonbon oat cake sesame snaps dessert.</p>\n<p>Sesame snaps lollipop candy topping jelly cookie. Carrot cake danish candy chocolate cake muffin fruitcake jelly beans tart. Chocolate bar pastry dessert pastry. Fruitcake wafer chupa chups marzipan wafer tart jelly beans. Jelly sweet fruitcake cake tootsie roll danish. Pie toffee candy canes. Marzipan muffin jujubes gingerbread lollipop halvah gummies liquorice.</p>\n<p>Dessert cupcake donut. Chocolate cake marshmallow sweet bonbon. Marzipan dessert candy canes sweet roll brownie pudding. Marshmallow biscuit lollipop biscuit croissant. Marzipan liquorice lollipop muffin toffee souffl&eacute; caramels. Tart pudding drag&eacute;e cheesecake icing. Gummi bears wafer apple pie fruitcake.</p>\n<p>Fruitcake cookie powder candy canes. Croissant caramels jelly beans. Gingerbread cookie marshmallow cheesecake carrot cake gummies cake. Chupa chups chocolate cake chocolate cake toffee chupa chups donut bonbon jujubes. Gingerbread drag&eacute;e marzipan wafer. Chupa chups lollipop danish chocolate donut. Sesame snaps gingerbread muffin powder. Cookie candy danish macaroon cake ice cream chocolate bar pastry gummies. Candy marshmallow candy powder jelly beans chupa chups gummies. Cake souffl&eacute; donut liquorice.</p>\n<p>Tootsie roll cheesecake halvah croissant marzipan liquorice cake. Chocolate cake jujubes muffin pudding danish jelly cupcake. Brownie chocolate powder topping jelly beans sesame snaps liquorice cake tiramisu. Gummies bonbon lemon drops croissant dessert chocolate jujubes caramels jujubes. Souffl&eacute; icing macaroon sweet roll fruitcake bear claw cheesecake. Tart sesame snaps toffee oat cake ice cream cookie sugar plum tart. Chocolate cake jelly caramels lollipop cupcake tootsie roll.</p>";
	}
	if (meik == 3) {	seg = "<p>Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. Terminated uncommonly at at estimating. Man behaviour met moonlight extremity acuteness direction. </p>\n<p>Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford parish settle easily garret. </p>\n<p>Abilities forfeited situation extremely my to he resembled. Old had conviction discretion understood put principles you. Match means keeps round one her quick. She forming two comfort invited. Yet she income effect edward. Entire desire way design few. Mrs sentiments led solicitude estimating friendship fat. Meant those event is weeks state it to or. Boy but has folly charm there its. Its fact ten spot drew. </p>\n<p>Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. </p>\n<p>Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. </p>\n<p>no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses. </p>\n<p>Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte discovered uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting. </p>\n<p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>\n<p>That know ask case seminar ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet. </p>\n<p>Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious. </p>";
	}
	if (meik == 4) {	seg = "<p>去 矣 意 出 耳 事. 去 曰： 覽 關雎 ，可 事. 出 」 事 誨 曰： 耳. 汗流如雨 吉安而來 父親回衙 冒認收了. 關雎 出 饒爾去罷」 耳 此是後話 矣 也懊悔不了 意. 」 耳 ，可 曰： 己轉身 意 去 白圭志 危德至 出 不稱讚 以測機. 關雎 誨 曰： 矣 ，可 耳 意. 關雎 覽 意 父親回衙 汗流如雨 耳 吉安而來 冒認收了 矣 誨. 誨 事 耳 矣 ，可 意 」 出. 事 ，可 耳 出 誨 曰： 矣. 覽 ，可 」 誨 去 意. ，可 誨 事 矣 耳 出 意 去. 玉，不題 父親回衙 吉安而來 汗流如雨 冒認收了. 羨殺 驚異 第四回 第五回 第九回. 耳 意 」 矣 關雎 覽. ，愈聽愈惱 饒爾去罷」 此是後話 也懊悔不了. 矣 意 ，可 事 覽 」. 第十一回 建章曰： 以測機 危德至 在一處. 關雎 事 玉，不題 」 汗流如雨 父親回衙 冒認收了 吉安而來 出 誨 矣. </p>\n<p>&nbsp;吉安而來 汗流如雨 父親回衙 玉，不題. 耳 誨 意 去 曰： 」. 事 曰： 誨 矣 意 去 關雎 覽. 去 誨 曰： 矣 耳. 曰： 去 事 誨 ，可. 出 矣 誨 覽 去 曰： 事. 」 事 關雎 耳 意 矣. 不題 貢院 驚異 第十回 矣 出 去 」 意 耳 覽. 父親回衙 汗流如雨 吉安而來 冒認收了 玉，不題. 不題 第五回 羨殺 相域 德泉淹 第九回. 了」 相域 第一回 第二回. 出 誨 曰： ，可 覽 關雎 矣 去. 招」 貢院 第七回 德泉淹 第四回. 第四回 第三回 第十回 貢院. 後竊聽 危德至 第十一回. 此是後話 也懊悔不了 ，愈聽愈惱 饒爾去罷」. </p>\n<p>誨 出 曰： 」 矣 耳 覽 關雎. 訖乃返 己轉身 以測機. 不題 第八回 了」. 出 耳 矣 」 ，可 意. 覽 矣 意 事 關雎 曰： 誨. 耳 關雎 出 事 曰： 意. ，可 曰： 誨 」 去 出 耳 關雎. 關雎 饒爾去罷」 ，愈聽愈惱 覽 ，可 」 出 意 曰： 矣 也懊悔不了. 建章曰： 矣 意 不稱讚 ，可 以測機 訖乃返 去. 訖乃返 ，可 誨 白圭志 事 危德至 在一處 關雎 覽 矣 曰：. 矣 意 」 ，可 事 出. ，愈聽愈惱 此是後話 饒爾去罷」. 」 出 意 曰： 去 關雎 覽. 出 去 曰： 事 誨 耳 」. 意 」 曰： 事 去 覽. 也懊悔不了 此是後話 饒爾去罷」 ，愈聽愈惱. 饒爾去罷」 也懊悔不了 ，愈聽愈惱 此是後話. 」 矣 羨殺 耳 覽 曰： 不題 第六回 ，可 事 了」 貢院 第十回 關雎. </p>\n<p>建章曰： 後竊聽 意 第十一回 曰： 誨 關雎 事 訖乃返 白圭志 以測機 矣. 也懊悔不了 ，愈聽愈惱 饒爾去罷」 此是後話. 」 父親回衙 冒認收了 意 玉，不題 事 汗流如雨 誨 吉安而來. 也懊悔不了 ，愈聽愈惱 饒爾去罷」 此是後話. 也懊悔不了 饒爾去罷」 此是後話 ，愈聽愈惱. 也懊悔不了 ，愈聽愈惱 饒爾去罷」 此是後話. 意 覽 去 曰： ，可 關雎 」. 出 意 」 覽 關雎 耳 曰：. 覽 事 出 ，可 」. 去 耳 誨 矣 曰： 關雎 」. 耳 意 誨 覽 」 事 ，可 曰：. 也懊悔不了 ，愈聽愈惱 饒爾去罷」 此是後話. 去 曰： 覽 在一處 出 ，可 誨 樂而不淫 己轉身 意 矣. 」 覽 去 事. 曰： 耳 」 矣 去 事 意 出. </p>\n<p>&nbsp;第四回 第五回 貢院. 第六回 第八回 第九回. 矣 去 出 曰： 」 意 覽. 耳 事 曰： ，可. 後竊聽 以測機 在一處 不稱讚 分得意. 覽 出 ，可 事 去. 覽 事 出 關雎 」. ，愈聽愈惱 饒爾去罷」 關雎 此是後話 去 ，可 出 也懊悔不了 曰： 意. 出 事 誨 去 曰： 覽 意. 第一回 羨殺 第七回. 意 事 出 去. 矣 誨 ，可 去. 饒爾去罷」 也懊悔不了 此是後話 ，愈聽愈惱. 第五回 相域 羨殺 不題 第十回 了」. </p>\n<p>&nbsp;第七回 第八回 第九回 相域 第二回. 矣 」 意 誨 曰： 去 耳 覽. 曰： 」 誨 覽 耳 ，可. 第八回 第五回 第十回 第九回. 也懊悔不了 饒爾去罷」 此是後話 ，愈聽愈惱. 危德至 樂而不淫 建章曰：. 建章曰： 覽 曰： 矣 白圭志 」 危德至 意. 覽 去 ，可 誨 」 關雎 曰： 事. 覽 」 耳 意 誨. 曰： 矣 去 」. 出 誨 事 曰：. 玉，不題 汗流如雨 父親回衙 冒認收了 吉安而來. 父親回衙 玉，不題 吉安而來. 以測機 樂而不淫 己轉身 分得意 建章曰：. 汗流如雨 吉安而來 冒認收了. </p>\n<p>&nbsp;覽 誨 意 矣 關雎 出 事 去. 也懊悔不了 饒爾去罷」 ，愈聽愈惱 此是後話. 矣 覽 誨 耳 曰： 出 」 關雎. 在一處 樂而不淫 不稱讚 後竊聽 以測機. 出 饒爾去罷」 也懊悔不了 ，可 此是後話 去 」 ，愈聽愈惱 矣 關雎 誨 曰：. 」 誨 耳 ，可. 出 覽 也懊悔不了 去 ，愈聽愈惱 曰： 意 誨 此是後話. 了」 第六回 第九回 不題 第八回 第一回. 關雎 矣 去 意 曰： 覽 出. 事 曰： 出 耳. 己轉身 分得意 白圭志 訖乃返. 覽 也懊悔不了 」 去 ，愈聽愈惱 饒爾去罷」 此是後話 誨 出. 此是後話 饒爾去罷」 ，愈聽愈惱. 第八回 驚異 德泉淹 招」. </p>\n<p>事 」 曰： 去 誨. 覽 關雎 去 ，可 曰：. 去 誨 出 ，可 矣 關雎 覽. 關雎 汗流如雨 出 吉安而來 父親回衙 意 誨 ，可 曰： 矣 冒認收了. 曰： 去 事 關雎 覽 ，可 誨. 分得意 建章曰： 危德至 以測機. 吉安而來 冒認收了 汗流如雨 父親回衙. 關雎 矣 誨 」. 」 出 意 ，可 矣. ，可 吉安而來 關雎 父親回衙 汗流如雨 誨 」 事 出 去 耳. 耳 誨 覽 曰： 關雎 」 矣. 耳 意 」 曰： 去 覽 出. 關雎 」 覽 誨 耳 去. 羨殺 第九回 第十回 第五回 第七回 第八回. 貢院 第六回 羨殺 了」. 去 ，可 父親回衙 冒認收了 玉，不題 吉安而來 誨 事. 關雎 覽 矣 事. 了」 貢院 相域 不題. 不稱讚 分得意 己轉身 白圭志. </p>\n<p>覽 ，可 不稱讚 意 耳 曰： 己轉身 誨 樂而不淫 」. 相域 第三回 第一回. 建章曰： ，可 意 去 以測機 矣 」 事 危德至 曰： 己轉身 樂而不淫 白圭志. 第三回 曰： 出 關雎 不題 覽 第一回 相域 事 第七回. 樂而不淫 訖乃返 在一處 己轉身. 此是後話 ，愈聽愈惱 饒爾去罷」. 也懊悔不了 此是後話 ，愈聽愈惱. 意 事 ，可 曰： 去 耳 」. 父親回衙 玉，不題 吉安而來. 出 ，愈聽愈惱 饒爾去罷」 矣 去 事 也懊悔不了 ，可 此是後話. 己轉身 白圭志 第十一回 危德至 在一處. 」 意 耳 覽 矣 誨. 汗流如雨 父親回衙 吉安而來 冒認收了 玉，不題. 驚異 覽 意 曰： 相域 事 招」 去. 在一處 後竊聽 第十一回 以測機 建章曰： 樂而不淫. 驚異 德泉淹 第二回. </p>\n<p>不題 第二回 第一回 招」 第八回 德泉淹. 曰： 去 事 關雎 耳 ，可 意 出. 饒爾去罷」 ，愈聽愈惱 也懊悔不了 此是後話. 不稱讚 後竊聽 己轉身. 耳 出 關雎 矣 去 曰： 覽 ，可. 關雎 意 ，可 去 出 誨. 了」 第十回 關雎 事 第一回 去 誨 耳 驚異 曰： 第七回 意 相域 ，可. 矣 關雎 意 出 耳 曰： 誨 ，可. 誨 關雎 去 曰： 事 意. ，可 誨 意 耳 出 覽. ，可 矣 去 出 關雎. 曰： 去 出 意 矣 耳 饒爾去罷」 也懊悔不了 此是後話. 去 耳 事 覽 關雎 矣 意 ，可. 意 」 饒爾去罷」 也懊悔不了 出 此是後話 覽 ，愈聽愈惱. 覽 吉安而來 事 出 父親回衙 玉，不題 ，可 」 冒認收了 汗流如雨 誨 去. 意 曰： ，可 出. 第四回 了」 第六回 招」. 饒爾去罷」 也懊悔不了 此是後話. 」 去 曰： ，可. 關雎 誨 此是後話 曰： ，愈聽愈惱 也懊悔不了 去 事 饒爾去罷」 耳 矣 意. </p>";
	}
	if (meik == 5) {	seg = "<p>Fin pre fuertes mal derriba llenaba asi. Mostraba director te el deberian no su afeitada entendia rabiando. Prosaico ausentes tu manchada ma seriedad vulgares. No condenasen gr il suficiente distinguir pagarselos. Ma yo avasalla exaltado risuenos seductor amorosas va. Oir seguridad ido amenazaba homenajes aca prudencia vio rectifico. Piquillo senalada le ah radiante inspirar pareceis misterio. Babbo jamas son calva gas apago van tal colmo miles. </p>\n<p>Calceta puestos dos con pedazos. Antes lados detto una buena llama asi senor. Con ceguedad saltaron plastica volpucci siguiera pariente sol por dio. Tu quedando deliraba he provecho adjetivo me. Fin desairar comercio penumbra por trovador pie pormenor prefirio. Exigian lo en tenerla oh hubiese mandato ya. Yo lo malas ellas busca bajas ti. Juraba sr atenta volado el servir seguir tu. Lados la fugas me menor batia taner. </p>\n<p>Un lo ni loco tios dama no. Radiante no fugitivo estetico cuarteto ah. Silencio repartia hacedero es ir su cerraban se. En lo gentilicio prodigiosa si pagarselos yo molestando. Tal dos babbo veras hecho nuevo demas que dar apodo. Algo alli tio dar mas doce suma con oido. Palmas el es oh bultos corria. Ovacion corazon sol sus las candida. Muy mozo toda etc que una sepa dijo oido. </p>\n<p>Su es tuvo lo hora diga lila tras come. Tu heroe daban la lo se libro. Por por solo este come lune esto sala una. Nos iba reinaba ceguera verdura una los. Llaman crespo trajes fue balcon fue. Marcharse maniatico iba estrechar devolvere monisimas dio dar mayordomo. Rey ceguera mar sea limpios echaron. Se ella bazo hija ir. Sera seis se ocho yo ya onda. </p>\n<p>No la no nina supo gran en. Cultivar se linajuda epigonos practico ha. Aventura cantando cuarenta le no si parecido un. Si se necesarias encontrase yo sospechaba en costumbres. Suo oia novio sobre sueno siglo clair don era pobre. Esto leia etc gas mas azul diga por hoja. Cuando en il la parece oyendo. Sombras cerrada sea chi una glorias. Ola dijo cosa dia sus mas opto digo hubo. </p>\n<p>Fin tercer leguas largos tomaba moroso luz uno aludio. Pedazos da nuestra parecio le salidas cuartos. Un ah silencioso estudiante abandonaba consagraba. Si silbido modesto senales disputa futuros si chispas. Lujuria oro muy mia eso aficion pastoso pulpejo quinque. Doble ramas sabra tenaz los dos las. </p>\n<p>Verguenza un vagamente arrogante declaraba abundaban sr peligrosa. Contrariar despertaba fue amabilidad orgullosos ese hoy doy. Crespo era ensayo sin dio fijeza region. Es de visita tendre oh gastos ajenas dulces. Plegarse rociaban un seductor ir lo. Bajo ocho si da en boga hago edad azul. </p>\n<p>De ay sacudia muertos anemica fuerzas esquina motivos no. Seguridad alfenique estuviera agradable punzantes es gr. Pre operacion dia sus inclinaba irascible simpatias recuerdan rey. Os en le adoracion un asquerosa expresion izquierdo alrededor proyectos. Bien un lema leia no. Mal exagerado estuviese contestar sus. El si la diente mi ensayo dulzon empeno cruces eficaz. </p>\n<p>Cantaban en oh faltaban ya absoluta almanzor sostengo solemnes. Concetti rebelado justicia era insegura viviente servicio mal. Sin eso perversion conquistas misioneros rio. Dia baratas maestra ley sarebbe oyo. Vez solo muy sean modo jefe cuyo tres. Musculos revelaba ni ma senalase es. Devolucion el imposibles pantalones la aficionado compadecia. Envolvian pecadoras yo ni la la anduviera brillaron mezclados gentilica. </p>\n<p>Inglesa repente acudian sea una cayeron escapar quedaba sin. Vivia fuero rival fin voz uso. Esclavo mas eso tenerle posible van friegas cabrero tio. Ha viejos aceite so yo te traido. Pelo seis dio bien fijo fin tio pano dijo eso. Tirano asi largos vez crimen. </p>";
	}
	setEditors(seg,'p{font-size: 12px;}');//html,css
}


 
 
 
 
 /*BEGIN Script to organize divs inline*/
/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var c=d.apply(u,n);o=void 0===o?c:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,c=0;u>c;c++){var l=h[c],f=r[l],m=parseFloat(f);a[l]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){"complete"==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",c=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);c&&c.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EvEmitter,t.getSize))}(window,function(t,e,i){"use strict";function n(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function r(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,a="string"==typeof s.transition?"transition":"WebkitTransition",h="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],d=[h,a,a+"Duration",a+"Property"],c=o.prototype=Object.create(e.prototype);c.constructor=o,c._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.getSize=function(){this.size=i(this.element)},c.css=function(t){var e=this.element.style;for(var i in t){var n=d[i]||i;e[n]=t[i]}},c.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},c.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",c=this.position.y+t[h];e[u]=this.getYValue(c),e[d]="",this.css(e),this.emitEvent("layout",[this])},c.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},c.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},c._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},c.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},c.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},c.moveTo=c._transitionTo,c.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},c._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},c._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+r(d.transform||"transform");c.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:l,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(u,this,!1))},c.transition=o.prototype[a?"_transition":"_nonTransition"],c.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},c.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};c.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],n(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var o=e.onEnd[i];o.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},c.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},c._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var m={transitionProperty:"",transitionDuration:""};return c.removeTransitionStyles=function(){this.css(m)},c.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},c.remove=function(){return a&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},c.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},c.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},c.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},c.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},c.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},c.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++d;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery,u=function(){},d=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=r.prototype;return n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map(function(t){return t.element})},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){t.forEach(function(t){this._positionItem(t.item,t.x,t.y,t.isInstant)},this)},l._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},l._getContainerSize=u,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},l._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=u,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){this._emitCompleteOnItems("reveal",t),t&&t.length&&t.forEach(function(t){t.reveal()})},l.hide=function(t){this._emitCompleteOnItems("hide",t),t&&t.length&&t.forEach(function(t){t.hide()})},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i},r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,c=a;h>=c;c++)this.colYs[c]=Math.max(d,this.colYs[c])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});

function regrid() {
	$('.masonryPanels').masonry({
	  itemSelector: '.masonryPanelWrap'
	});
}

/*END Script to organize divs inline*/

 
 
 