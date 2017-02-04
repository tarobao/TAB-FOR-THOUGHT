$(document).ready(function() {

	function randomHero() {
	    var heroPics = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/musician-background-1680.jpg','https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/pink-floyd-division-bell-228953.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/northstar.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/womensrights.jpg'];

	    $('body').css({
	        'background' : 'url('+ heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
	        'background-attachment' : 'scroll',
	        'background-position' : '50% 50%',
	        'background-size' : 'cover'
	    });
	}

	// Show Random Image on Page Load
	randomHero();

	// Simulate a page refresh
	$(window).on('open', randomHero);

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
