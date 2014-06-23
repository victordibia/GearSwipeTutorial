(function($) {
     $.fn.doubleTap = function(doubleTapCallback) {
         return this.each(function(){
			var elm = this;
			var lastTap = 0;
			$(elm).bind('vmousedown', function (e) {
                                var now = (new Date()).valueOf();
				var diff = (now - lastTap);
                                lastTap = now ;
                                if (diff < 350) {
		                    if($.isFunction( doubleTapCallback ))
		                    {
		                       doubleTapCallback.call(elm);
		                    }
                                }      
			});
         });
    }
})(jQuery);
