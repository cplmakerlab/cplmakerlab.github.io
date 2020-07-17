jQuery(function() {
  // Code goes here

    enquire.register("screen and (max-width:45em)", {
    
        // OPTIONAL
        // If supplied, triggered when a media query matches.
        match : function() {
          $('nav').show().addClass('in');
          
        },
    
        // OPTIONAL
        // If supplied, triggered when the media query transitions
        // *from a matched state to an unmatched state*.
        unmatch : function() {
          $('nav').addClass('out').hide();
        },
    
        // OPTIONAL
        // If supplied, triggered once, when the handler is registered.
        setup : function() {
          $('nav').hide();        
        },
    
        // OPTIONAL, defaults to false
        // If set to true, defers execution of the setup function
        // until the first time the media query is matched
        deferSetup : true,
    
        // OPTIONAL
        // If supplied, triggered when handler is unregistered.
        // Place cleanup code here
        destroy : function() {}
    
    });    
    
});

