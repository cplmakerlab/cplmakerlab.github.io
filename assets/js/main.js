jQuery(function() {
  // Code goes here
    
    // Mobile Menu Toggle
    $('body').on('click', '.mobile-menu-toggle', function(){
      var nav = $('nav');
      if($(nav[0]).hasClass('hide')) {
        $(nav[0]).removeClass('out').addClass('in').removeClass('hide');
        document.body.addEventListener('click', closeMenu, false);
      }
      else {
        $(nav[0]).removeClass('in').addClass('hide');
      }
    });
    
    // Close menu if menu is open and user clicks elsewhere
    function closeMenu(e){
      if(e.target.id != 'nav'){
         document.body.removeEventListener('click', closeMenu, false);
        $('nav').removeClass('in').addClass('hide');
      }
    }
    
    // Mobile Search Toggle
    $('body').on('click', '.mobile-search-toggle', function(){
      var search = $('.search-form');
      if($(search[0]).hasClass('hide')) {
        $(search[0]).removeClass('hide');
        $('.search-form input').focus();
      }
      else {
        $(search[0]).addClass('hide');
      }
    });
    
    /* ListJS search*/
    var options = {
      valueNames: [ 'title', 'topic' ]
    };
    var guideList = new List('guide-list', options); 
    
    /* html2pdf */
    function generatePDF() = {
      $('body').addClass('media-print'); 
      html2pdf(document.body);
      $('body').removeClass('media-print');
    }
    
    
});

