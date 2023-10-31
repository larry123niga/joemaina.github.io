jQuery(document).ready(function() {
	var gutter = jQuery("#portfolio_filter_wrapper").attr('data-gutter');
	var columns = jQuery("#portfolio_filter_wrapper").attr('data-columns');
	var filter = jQuery("#portfolio_filter_wrapper").attr('data-filter');
	var nextAction = jQuery("#portfolio_filter_wrapper").attr('data-next-action');
	var type = jQuery("#portfolio_filter_wrapper").attr('data-type');
	var layout = jQuery("#portfolio_filter_wrapper").attr('data-layout');
	var pageID = jQuery("#portfolio_filter_wrapper").attr('data-page-id');
	
	jQuery("#portfolio_filter_wrapper").imagesLoaded().done( function( instance ) {
		setTimeout(function(){
			jQuery("#portfolio_filter_wrapper.masonry").masonry({
			  itemSelector: '.element',
			  columnWidth: '.element',
			  gutter: parseInt(gutter),
			  percentPosition: true,
			  transitionDuration: 0,
			});
	
		    jQuery("#portfolio_filter_wrapper").children(".element").children(".gallery_type").each(function(){
		        jQuery(this).addClass("fade-in");
		    });
		    
		    jQuery(window).trigger('hwparallax.reconfigure');
		}, 500);
	});
	
	if(jQuery('#tg_portfolio_filterable_link').val()!=1)
	{
		jQuery('#portfolio_wall_filters_portfolio_filter_wrapper li a, #portfolio_wall_filters li a').click(function(){
			jQuery(document.body).css({'cursor' : 'wait'});
		  	var selector = jQuery(this).attr('data-filter');
		  	
		  	jQuery('#portfolio_wall_filters_portfolio_filter_wrapper li a, #portfolio_wall_filters li a').removeClass('active');
		  	jQuery(this).addClass('active');

		  	jQuery('#portfolio_filter_wrapper').addClass('loading');
		  	
		  	jQuery.ajax({
		        url: tgPortfolioParams.ajaxurl,
		        type:'POST',
		        data: 'action='+nextAction+'&cat='+selector+'&items=-1&columns='+columns+'&type='+type+'&layout='+layout+'&current_page_id='+pageID+'&tg_security='+tgPortfolioParams.ajax_nonce, 
		        success: function(html)
		        {
			        jQuery('#portfolio_filter_wrapper').masonry('destroy');
		        	jQuery('#portfolio_filter_wrapper').html(html);
		        	
		        	jQuery("#portfolio_filter_wrapper").imagesLoaded().done( function( instance ) {
			        	setTimeout(function(){
				        	jQuery('#portfolio_filter_wrapper').masonry({
							  itemSelector: '.element',
							  columnWidth: '.element',
							  gutter: parseInt(gutter),
							  percentPosition: true,
							  transitionDuration: 0,
							});
							
							jQuery("#portfolio_filter_wrapper").children(".element").children(".gallery_type").each(function(){
						        jQuery(this).addClass("fade-in");
						    });
						    
						    jQuery('#portfolio_filter_wrapper').removeClass('loading');
						    jQuery(document.body).css({'cursor' : 'default'});
						    
						    jQuery(window).trigger('hwparallax.reconfigure');
					    }, 500);
					});
					
					if(jQuery('#tg_lightbox_enable').val() != '')
					{
						if(jQuery('#tg_lightbox_plugin').val() == 'modulobox')
						{
							mobx.destroy();
							mobx.init();
						}
						else
						{
							jQuery(document).setLightbox();
						}
					}
		        }
		    });
		  	
		  	return false;
		});
	}
	
	jQuery('.portfolio_filter_wrapper.masonry').each(function(){
		var gridWrapper = jQuery(this);
		var gridWrapperID = jQuery(this).attr('id');
		
		var gutter = gridWrapper.attr('data-gutter');
		var columns = gridWrapper.attr('data-columns');
		var filter = gridWrapper.attr('data-filter');
		var nextAction = gridWrapper.attr('data-next-action');
		var type = gridWrapper.attr('data-type');
		var layout = gridWrapper.attr('data-layout');
		var pageID = gridWrapper.attr('data-page-id');

		gridWrapper.imagesLoaded().done( function( instance ) {
			setTimeout(function(){
				gridWrapper.masonry({
				  itemSelector: '.element',
				  columnWidth: '.element',
				  gutter: parseInt(gutter),
				  percentPosition: true,
				  transitionDuration: 0,
				});
		
			    gridWrapper.children(".element").children(".gallery_type").each(function(){
			        jQuery(this).addClass("fade-in");
			    });
			    
			    jQuery(window).trigger('hwparallax.reconfigure');
			}, 500);
		});
		
		if(filter==1)
		{
			jQuery('#portfolio_wall_filters_'+gridWrapperID+' li a').click(function(){
				jQuery(document.body).css({'cursor' : 'wait'});
			  	var selector = jQuery(this).attr('data-filter');
			  	
			  	jQuery('#portfolio_wall_filters_'+gridWrapperID+' li a').removeClass('active');
			  	jQuery(this).addClass('active');
	
			  	gridWrapper.addClass('loading');
			  	
			  	jQuery.ajax({
			        url: tgPortfolioParams.ajaxurl,
			        type:'POST',
			        data: 'action='+nextAction+'&cat='+selector+'&items=-1&columns='+columns+'&type='+type+'&layout='+layout+'&current_page_id='+pageID+'&tg_security='+tgPortfolioParams.ajax_nonce, 
			        success: function(html)
			        {
				        gridWrapper.masonry('destroy');
			        	gridWrapper.html(html);
			        	
			        	gridWrapper.imagesLoaded().done( function( instance ) {
				        	setTimeout(function(){
					        	gridWrapper.masonry({
								  itemSelector: '.element',
								  columnWidth: '.element',
								  gutter: parseInt(gutter),
								  percentPosition: true,
								  transitionDuration: 0,
								});
								
								gridWrapper.children(".element").children(".gallery_type").each(function(){
							        jQuery(this).addClass("fade-in");
							    });
							    
							    jQuery(window).trigger('hwparallax.reconfigure');
							    gridWrapper.removeClass('loading');
							    jQuery(document.body).css({'cursor' : 'default'});
							    
							    jQuery(window).trigger('hwparallax.reconfigure');
						    }, 500);
						});
						
						if(jQuery('#tg_lightbox_enable').val() != '')
						{
							if(jQuery('#tg_lightbox_plugin').val() == 'modulobox')
							{
								mobx.destroy();
								mobx.init();
							}
							else
							{
								jQuery(document).setLightbox();
							}
						}
			        }
			    });
			  	
			  	return false;
			});
		}
	});
});