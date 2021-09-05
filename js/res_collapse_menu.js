    
	
	$(function() {  
        var pull        = $('#pull');  
            menu        = $('.main_nav ul');  
            menuHeight  = menu.height();  
      
        $(pull).on('click', function(e) {  
            e.preventDefault();  
            menu.slideToggle();  
        });  
    });  

