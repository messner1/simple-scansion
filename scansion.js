function getText(){
	if (window.getSelection) {
		meterElement = $('input[name=scansion]:checked').val();
		text = window.getSelection();
		range = text.getRangeAt(0)
		if (text && range){
			switch (meterElement){
				case "line":
		        	var lineSpan = document.createElement("span");
		        	lineSpan.className = "overline";
		        	range.surroundContents(lineSpan);
		     		$(".overline").click(function(){
						text = $(this).text();
						$(this).replaceWith(text);
					});
		        break;

		        case "foot":
		        	var footSpan = document.createElement("span");
		        	footSpan.className = "footclass"
		        	footSpan.appendChild(document.createTextNode("|"));
		        	range.collapse();
		        	range.insertNode(footSpan);
		        	$(".footclass").click(function(){
     					$(this).replaceWith("");
     				});
		        break;

		       case "breve":
		       		var breveSpan = document.createElement("span");
		       		breveSpan.className = "metricalbreve";
		       		range.surroundContents(breveSpan)
		       		$(".metricalbreve").click(function(){
						text = $(this).text();
						$(this).replaceWith(text);
					});
		       	break;

	        	}
	   		}

     }

}