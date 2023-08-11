// 슬라이드 배너
    let slideSection = $('#slideShow > section');
    let slides = $('.slides');
    slideCount = slides.length;
    currentIdx = 0;
    makeClone(); // 처음 이미지와 마지막 이미지 복사 함수
    initfunction(); // 슬라이드 넓이와 위치값 초기화 함수

$(function(){
       
    $('.left').click(function(){
        slideWidth = 1200; // 슬라이드 이미지 넓이
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


});
function makeClone(){
    let cloneSlide_firtst = slides[0].clonNode(true);
    let cloneSlide_last = slidesSection.lastElementChild.cloneNode(true);
    slidesSection.append(cloneSlide_firtst);
    slideSection.insertBefore(cloneSlide_last, slideSection.firstElementChild);
}
function initfunction(){
    slideSection.style.width = slideWidth * (slideCount + 2) + 'px';
    slideSection.style.left = -slideWidth + 'px';
}

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

