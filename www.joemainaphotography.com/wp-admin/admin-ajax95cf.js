jQuery(document).ready(function(){ jQuery("#map16815698072124776083").simplegmaps({ MapOptions: { zoom: 17,scrollwheel: false, } }); });
jQuery(document).ready(function(){ 
	var mapHeight = jQuery("#map16815698072124776083").parent().parent().height();
	if(mapHeight>0)
	{
		jQuery("#map16815698072124776083").css('height', mapHeight+'px');
	}
});
