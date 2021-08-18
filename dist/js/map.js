$(window).load(function(){
	var officeActive = $('.office').find('.active'),
		officeLat = officeActive.children().data('lat'),
		officeLng = officeActive.children().data('lng'),
		officeGoogleHref = officeActive.children().attr('href'),
		officeAddress = officeActive.children().data('address'),
		officePhone = officeActive.children().data('phone'),
		officeFax = officeActive.children().data('fax'),
		officePhoneTwo = officeActive.children().data('phone-two'),
		officeEmail = officeActive.children().data('email'),
		officeTitleText = officeActive.children().text(),
		officeTitle = officeTitleText.slice(0, officeTitleText.indexOf(' ')),
		officeContent = '<div class="popup-edmonton">' +
			'<h3>'+ officeTitle +'</h3>' +
			'<ul>' +
				'<li>' + '<a target="_blank" href="'+officeGoogleHref+'" class="icon-marker">'+ officeAddress + '</a>' + '</li>' +
				'<li>' + '<a href="tel:'+officePhone+'" class="icon-phone">'+ officePhone + '</a>' + '</li>' +
				'<li>' + '<a href="fax:'+officeFax+'" class="icon-fax">'+ officeFax + '</a>' + '</li>' +
				'<li>' + '<a href="tel:'+officePhoneTwo+'" class="icon-phone">'+ 'Toll Free ' + officePhoneTwo + '</a>' + '</li>' +
				'<li>' + '<a href="mailto:'+officeEmail+'" class="icon-mail">'+ officeEmail + '</a>' + '</li>' +
			'</ul>' + '</div>';
	$('footer form').after(officeContent)
	var mapElement = document.getElementById('map');
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(+officeLat, +officeLng),
		styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
	};
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(+officeLat, +officeLng),
		map: map,
		icon:'/wp-content/themes/Canglow/assets/img/marker.png'
	});
	$('.office a').click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass('active') == 0){
			$('.office li').removeClass('active')
			$(this).parent().addClass('active');

		}
		var officeActive = $(this),
			officeLat = officeActive.data('lat'),
			officeLng = officeActive.data('lng'),
			officeGoogleHref = officeActive.attr('href'),
			officeAddress = officeActive.data('address'),
			officePhone = officeActive.data('phone'),
			officeFax = officeActive.data('fax'),
			officePhoneTwo = officeActive.data('phone-two'),
			officeEmail = officeActive.data('email'),
			officeTitleText = officeActive.text(),
			officeTitle = officeTitleText.slice(0, officeTitleText.indexOf(' ')),
			officeContent =
			'<h3>'+ officeTitle +'</h3>' +
				'<ul>' +
					'<li>' + '<a target="_blank" href="'+officeGoogleHref+'" class="icon-marker">'+ officeAddress + '</a>' + '</li>' +
					'<li>' + '<a href="tel:'+officePhone+'" class="icon-phone">'+ officePhone + '</a>' + '</li>' +
					'<li>' + '<a href="fax:'+officeFax+'" class="icon-fax">'+ officeFax + '</a>' + '</li>' +
					'<li>' + '<a href="tel:'+officePhoneTwo+'" class="icon-phone">'+ 'Toll Free ' + officePhoneTwo + '</a>' + '</li>' +
					'<li>' + '<a href="mailto:'+officeEmail+'" class="icon-mail">'+ officeEmail + '</a>' + '</li>' +
				'</ul>';
		$('.popup-edmonton').html(officeContent);
		map.setCenter({lat:+officeLat,lng:+officeLng});
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(+officeLat, +officeLng),
			map: map,
			icon:'/wp-content/themes/Canglow/assets/img/marker.png'
		});
		var newContent = $('.popup-edmonton').html();
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="map-popup">' + newContent + '</div>',
			maxWidth: 350
		});
		infowindow.open(map,marker,newContent);
	})
	 google.maps.event.addListener(marker, 'click', function() {
		 infowindow.open(map,marker);
	});
	var content = $('.popup-edmonton').html();
	var infowindow = new google.maps.InfoWindow({
		content: '<div class="map-popup">' + content + '</div>',
		maxWidth: 350
	});
	infowindow.open(map,marker);
	if($(window).width() < 768){
		$('.office').after('<div class="popup-edmonton mobile">'+content+'</div>')
	}
	if($('#map-service').length){
		var mapElementTwo = document.getElementById('map-service');
		var mapOptionsTwo = {
			zoom: 17,
			center: new google.maps.LatLng(53.560861, -113.606880),
			styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
		};
		var mapService = new google.maps.Map(mapElementTwo, mapOptionsTwo);
		var markerTwo = new google.maps.Marker({
			position: new google.maps.LatLng(53.560861, -113.606880),
			map: mapService,
			icon:'/wp-content/themes/Canglow/assets/img/marker.png'
		});
	}
})
