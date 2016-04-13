$(function(){
	
	var initYaMaps = function() {
		
		var contactMap = new ymaps.Map('contact-map-cont', {
			center: [52.979427, 36.062993],
			zoom: 17
		});
		
		var contactMark = new ymaps.Placemark([52.979427, 36.062993], {
				hintContent: 'Москва!',
				balloonContent: 'Столица России',
			}, {
				preset: 'islands#dotIcon',
				iconColor: '#c30',
		});
		
		contactMap.geoObjects.add(contactMark);
		
	}
	
	var block = $('#contact-map-cont');
	
	if(block.size()) {
		
		ymaps.ready(initYaMaps);
		
	}
	
});