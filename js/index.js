$(function(){
    // 스킵메뉴
    $('.skip_menu>p>a').focus(function(){
        $('.skip_menu').addClass('active');
    });
    $('.skip_menu>p>a').blur(function(){
        $('.skip_menu').removeClass('active');
    });
    
    //헤더 네비
    $('.nav_btn').click(function(){
        if($(this).parent().hasClass('active')){
          $('.nav_btn').parent().removeClass('active');
        }else{
          $('.nav_btn').parent().removeClass('active');
          $(this).parent().addClass('active');
          $('.nav_btn').next().removeClass('active');
        }   
        $(this).next().toggleClass('active');
    })

    //네비 자동차 종류 선택
    $('.car_list>li:first-child>p').click(function(){
        $('.car_list>li:first-child>p').removeClass('active');
        $(this).addClass('active');
    });

    //네비 자동차 회전
    var rotateItem=$('.car_list>li:last-child>p');
    for(var cnt=0;cnt<rotateItem.length;cnt++){
        rotateItem.eq(cnt).css('animation-delay',(cnt+1)*100+'ms');
    }

    //모바일 햄버거 토글버튼
    $('#tgl_nav_btn').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });



});