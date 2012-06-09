$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '80207912@N03'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	$('.flickr-list').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '80207912@N03'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('.flickr-list').colorbox();
	});
	
	$('#cycle').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '80207912@N03'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /><div>{{title}}</div></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
			timeout: 5000
		});
		$('#cycle li').hover(function(){
			$(this).children('div').show();
		},function(){
			$(this).children('div').hide();
		});
	});
	
	$('.flickr-li').jflickrfeed({
		limit: 4,
		qstrings: {
			id: '80207912@N03'
		},
		useTemplate: false,
		itemCallback: function(item){
			$(this).append("<li><img src='" + item.image_m + "' alt=''/></li>");
		}
	});

});