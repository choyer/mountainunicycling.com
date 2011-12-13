// The Quotator
// http://thejavascriptblog.com/the-quotator-the-json-driven-html-rotator/
// Slightly modified by CRH 12-2011
(function($){
  $.fn.quotator = function(options){
    var container = this;
    var defaults = 
    {
      speed : 5000,
      json : "quotes.json"
    }
    
    var options = $.extend(defaults, options);
    
    var quotes_json = options.json;
    var quotes;
    
    $.getJSON(quotes_json, function(data){
    var quotesobject = eval(data.quotes);
    var index = Math.floor(Math.random()*quotesobject.length);
    
    
    setInterval(changeQuote, options.speed);
    
    container.html('<div class="row"> \
									    <div class="ten columns offset-by-one"> \
												<h1> \
									      	<blockquote><span id="quote">' + quotesobject[index].quote + '</span></blockquote> \
												</h1> \
												<h4> \
													<cite>— ' + quotesobject[index].author + '</cite> \
												</h4> \
									    </div> \
									  </div>');
    
    
    function changeQuote(){
      container.fadeOut(function(){
        container.html('<div class="row"> \
											    <div class="ten columns offset-by-one"> \
														<h1> \
											      	<blockquote><span id="quote">' + quotesobject[index].quote + '</span></blockquote> \
														</h1> \
														<h4> \
															<cite>— ' + quotesobject[index].author + '</cite> \
														</h4> \
											    </div> \
											  </div>').fadeIn();
      });
      
      if(index == quotesobject.length - 1){
        index = Math.floor(Math.random()*quotesobject.length);
      } else{
        index++;
      }
    }
      
  });
  return container;
}
})(jQuery);