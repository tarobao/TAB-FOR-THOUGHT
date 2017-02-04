$(document).ready(function() {
	$.ajax({
		url : 'https://www.reddit.com/r/showerthoughts.json',
		type : 'GET',
		success : function(res) {		
			  	var titles = res.data.children.map(element => {
					
					if (element.data.over_18 == false){
						var textNode = document.createTextNode(element.data.title);

					}

			  		return textNode
			  	});

			  	var authors = res.data.children.map(element => {
					
					if (element.data.over_18 == false){
						var textNode = document.createTextNode("—" + element.data.author);

					}

			  		return textNode
			  	});

  				var number = Math.floor((Math.random() * 24) + 1);
  				if (titles[number].length > 120){
  					var l = document.getElementsByClassName("long_quote")[0].appendChild(titles[number]);
  				}

  				else {
  					var g = document.getElementsByClassName("quote")[0].appendChild(titles[number]);

  				}

  				var a = document.getElementsByClassName("author")[0].appendChild(authors[number]);
		}
	});
});
