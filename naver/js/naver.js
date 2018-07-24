$(document).ready(function(){
    $('#juniorNaver').hover(function(){
        $('#blue').toggleClass('blue');
        $('#orange').toggleClass('orange');
        $('#red').toggleClass('red');
        $('#green').toggleClass('green');
    });
    $('#happyBean').hover(function(){
        $('#green1').toggleClass('green1');
        $('#green2').toggleClass('green2');
    });
    $('#more').click(function(){
        $('.menu-contents').toggleClass('display-none');
        $('.container').toggleClass('dark');
        $('.more1').toggleClass('display-none');
        $('.more2').toggleClass('display-none');
        $('#btns').toggleClass('display-none');
        $('.realtime-search').toggleClass('display-none');
    });
    var index=0;

    $('#next').click(function(){
        index=(index+1)%6;

        $('#etcContents div').eq(index).removeClass('display-none');
        $('#etcContents div').eq(index).addClass('display-block');

        $('#etcContents div').not($('#etcContents div').eq(index)).removeClass('display-block');
        $('#etcContents div').not($('#etcContents div').eq(index)).addClass('display-none');
    });
    $('#prev').click(function(){
        index=(index-1)%6;
        if(index==-1)
            index=5;

        $('#etcContents div').eq(index).removeClass('display-none');
        $('#etcContents div').eq(index).addClass('display-block');

        $('#etcContents div').not($('#etcContents div').eq(index)).removeClass('display-block');
        $('#etcContents div').not($('#etcContents div').eq(index)).addClass('display-none');
    });
});