$(function(){
    const slides = $('.slides');
    let i = 0;
   
    $('.left').click(function(){
        
        slides.eq(i).animate({'left':'-100%'}, 1000);
        i++;
        if(i == 3) {
            i=0;
        }
        slides.eq(i).css('left', '100%').animate({'left':'0'}, 1000);
        
    });
    
    $('.right').click(function(){
        
        slides.eq(i).animate({'left':'100%'}, 1000);
        i++;
        if(i == 3) {
            i=0;
        }
        slides.eq(i).css('left', '-100%').animate({'left':'0'}, 1000);
        
    });
    $('.right').click(function(){});

});

window.onload = function(){

    const tabBtn = document.querySelectorAll('#tabMenu > label');
    const tabContent = document.querySelectorAll('#tabMenu > section > article');

    tabBtn[0].onclick = function(){
        tabBtn[1].classList.remove('on');
        this.classList.add('on');
        tabContent[0].classList.add('on');
        tabContent[1].classList.remove('on');
    };
    
    tabBtn[1].onclick = function(){
        tabBtn[0].classList.remove('on');
        this.classList.add('on');
        tabContent[1].classList.add('on');
        tabContent[0].classList.remove('on');

    };
};

