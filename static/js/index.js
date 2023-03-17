$( document ).ready(function() {
    console.log( "Peter Woon-Fat (1048220)" );
    
    
    $("#getCNN").click(function(){
  		$.ajax({url: "/getCNN",
			success: function(result){
				//parse all list item elements
				var el = $("<div></div>");
				el.html(result);
				var parsedResult = $("li", el)
				$("#content").html(parsedResult);
				//edit the href attributes for article links to properly link to original source
				$("a").each(function(){
					this.href = "https://lite.cnn.com/" + this.href.slice(22);
				});
  			}
		});
  		console.log("The getCNN button was clicked.");
	});


    $("#getCyberReport").click(function(){
		$.ajax({
			url: "/getCyberReport",
			success: function(result){
				//parse all list item elements
				var el = $("<div></div>");
				el.html(result);
				var parsedResult = $("dl", el)
				$("#content").html(parsedResult);
				$(".submission__vote").remove()
				//edit the href attributes for article links to properly link to original source
				$("dd a").each(function(){
					if (this.href.includes("https://cyber.report/") == false) {
						this.href = "https://cyber.report/" + this.href.slice(22);
					}
				});
			}
		});
		console.log("The getCyberReport button was clicked.");
	});


	$("#getKIDLAT").click(function(){
		$.ajax({
			url: "/getKIDLAT",
			success: function(result){
				//parse all list item elements
				var el = $("<div></div>");
				el.html(result);
				var parsedResult = $("li", el)
				$("#content").html(parsedResult);
				//edit the href attributes for article links to properly link to original source
				$("a").each(function(){
					this.href = "https://kidl.at/" + this.href.slice(22);
				});
			}
		});
		console.log("The getKIDLAT button was clicked.");
	});


	$("#getCBSNews").click(function(){
		$.ajax({
			url: "/getCBSNews",
			success: function(result){
				//parse all list item elements
				var el = $("<div></div>");
				el.html(result);
				var parsedResult = $(".item--type-article", el)
				$("#content").html(parsedResult);
				$(".item__info").remove()
				//edit the href attributes for article links to properly link to original source
				$("a").each(function(){
					if (this.href.includes("https://www.cbsnews.com/") == false) {
						this.href = "https://www.cbsnews.com/" + this.href.slice(22);
					}
				});
			}
		});
		console.log("The getKIDLAT button was clicked.");
	});
	
});
