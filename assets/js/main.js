jQuery(function() {
  // Code goes here
    
    // Mobile Menu Toggle
    $('body').on('click', '.mobile-menu-toggle', function(){
      $('nav').toggleClass('hide');
    });
    
    // https://github.com/WickyNilliams/enquire.js
    // Media Query plugin for JS
    enquire.register("screen and (max-width:768px)", {
    
        // OPTIONAL
        // If supplied, triggered when a media query matches.
        match : function() {
          $('nav').addClass('hide');    
        },
    
        // OPTIONAL
        // If supplied, triggered when the media query transitions
        // *from a matched state to an unmatched state*.
        unmatch : function() {
          $('nav').removeClass('hide').show();
        },
    
        // OPTIONAL
        // If supplied, triggered once, when the handler is registered.
        setup : function() {
          // $('nav').hide();        
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

