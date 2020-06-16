 $(document).ready(function(){
     let container = $("#slider");

     container.on('initialized.owl.carousel', hideShowPrevButton);
 

     container.owlCarousel({
       center: true,
       nav:true,
       navText:['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
       rewindNav:true,
       items: 4.2,
       loop: false,
       animateIn:'fadeIn',
       dots:true,
       lazyLoad:false,
      rewind: true,
       video:true,
     
       
     });

     container.on('changed.owl.carousel', function(event) {
      hideShowPrevButton(event);

     

       let currentActiveIndex = event.item.index;
       $(event.currentTarget).find('.owl-dot').each(function (index, dot) {
         if (currentActiveIndex > index) {
           $(dot).addClass('visited');
        } else {
          $(dot).removeClass('visited');
        }
       });
     });

     $("#pause_button").on("click", function() {
       let videoArray = $(document).find('video');
       const playBtn = this;

       videoArray.each(function (e) {

        if ($(this).get(0).paused) {
            $(this).get(0).play();
            $(playBtn).addClass('#play_button')
        } else {
             $(this).get(0).pause();
            $(playBtn).removeClass('#play_button') 
       }
     });
    });
    


     $("#unmute_button").on("click", function() {
         const playBtn = this;
         let videoArray = $(document).find('video');

       videoArray.each(function (e) {
           $(this).get(0).muted = !$(this).get(0).muted;
           if($(this).get(0).muted) {
               $(playBtn).addClass('#mute_button');
           } else {
               $(playBtn).removeClass('#mute_button');
           }
       });
     });


    

     function hideShowPrevButton(event) {
       setTimeout(() => {
         if (event.item.index === 0) {
           $(event.currentTarget).find('.owl-prev').hide();
         } 
         else {
           $(event.currentTarget).find('.owl-prev').show();
         }
       });

       if (event.item.index === event.item.count - 1) {
        $(event.currentTarget).find('.owl-next').addClass('owl-last');
       } else {
        $(event.currentTarget).find('.owl-next').removeClass('owl-last');
       }

       if (event.item.index === event.item.count - 1) {
        $(event.currentTarget).find('.fa-angle-right').addClass('last');
       } else {
        $(event.currentTarget).find('.fa-angle-right').removeClass('last');
       };


     };


     // container.on('translate.owl.carousel', function(e) {
      
     //  $('.owl-item').removeClass('.cta-link');
     //  $('.owl-item.active.center').addClass('.cta-link');
     // });
     


   });


 // copyToClipboard
 

  function copyToClipboard() {
    var copytext = document.createElement('input')
    copytext.value = window.location.href
    document.body.appendChild(copytext)
    copytext.select()
    document.execCommand('copy')
    document.body.removeChild(copytext)
    alert('Link copied')
  };
  


