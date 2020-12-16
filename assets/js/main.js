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
    
    // Helper function to close mobile menu if menu is open and user clicks elsewhere
    function closeMenu(e){
      if(e.target.id != 'nav'){
         document.body.removeEventListener('click', closeMenu, false);
        $('nav').removeClass('in').addClass('hide');
      }
    }
    
    // Mobile Search Box Toggle
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
    
    // ListJS search
    // https://listjs.com/
    var options = {
      valueNames: [ 'topic', 'title' ]
    };
    var guideList = new List('guide-list', options); 
    
    // Fancybox Image Modal 
    // http://fancyapps.com 
    $('#content img.fancybox, #content p img').each(function(){
      var image = $(this);
      image.wrap('<a href="'+ image[0].src +'" class="fancybox"></a>');
    });
    $("a.fancybox").fancybox();
    
    // Generate PDF using print styles for better formatting
    function generatePDF(opt) {
      $('body').addClass('media-print'); 
      html2pdf().set(opt).from(document.body).save().then(function(){
        $('body').removeClass('media-print');  
      });
    }    
    // When an element with this class is clicked, setup and then generate PDF
    $('.js-generate-pdf').click(function(){
      event.stopPropagation();    
      var title = $(this).attr('title');
      var opt = {
        margin:       .25,
        filename:     title,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };       
      generatePDF(opt);
    });
});

