/*!
 * jQuery centerFloatedList Plugin v1.0.2 
 * Centers a list with floated list items.
 * Copyright (c) 2012-2013, Thorsten Schüller 
 * http://schueller.me/projects/
 * Licensed under the MIT license.
 */

(function( $ ) 
{
    $.fn.centerFloatedList = function() 
    {
        return this.each(function() 
        {
			var $this = $(this),
			
			centerTheList = function()
			{
				var items, itemsCount, itemWidth, containerWidth,
					itemsInRowCount, emptySpace;
					
				items = $this.find("li");
				itemsCount = items.size(); 
				if (itemsCount) 
				{
					itemWidth = items.first().outerWidth(true);
					containerWidth = $this.innerWidth();
					itemsInRowCount = Math.min(itemsCount, 
							Math.floor(containerWidth / itemWidth));
					emptySpace = containerWidth - itemsInRowCount * itemWidth;
					
					$this.css("paddingLeft", Math.floor(emptySpace / 2) + "px");			
				}
			}
			
			centerTheList();
			$(window).bind('resize', centerTheList);
        });        
    };
})( jQuery );