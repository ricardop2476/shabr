$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    
    $('button').click(function() {
        var commentName = $('#userName').val();
        $('#name').html(commentName);
              
        var commentText = $('#userComment').val();
        $('#comment').html('"'+commentText+'"');
    });
});