$(function(){
    // tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    // user comment
    $('button').click(function() {
        var commentName = $('#userName').val();
        $('#name').html(commentName);
              
        var commentText = $('#userComment').val();
        $('#comment').html('"'+commentText+'"');
        
        var showImg = ('block');
        $('#avatar').css('display', showImg);
    });
});