jQuery(function() {
  // Code goes here
    
    // Mobile Menu Toggle
    $('body').on('click', '.mobile-menu-toggle', function(){
      var nav = $('nav');
      if(nav[0].hasClass('hide')) {
        nav[0].removeClass('out').addClass('in').removeClass('hide');
      }
      else {
        nav[0].removeClass('in').addClass('out').addClass('hide');
      }
    });
    
});

