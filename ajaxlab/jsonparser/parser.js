$(function() {
    $("#send").click(function(){
        let id = $("#user_id").val();
        $.ajax("https://jsonplaceholder.typicode.com/users/"+id,{"type":"get"})
        .done(function (data){        
           $("#userId").text(data.id);
           $("#name").text(data.name);
           $("#username").text(data.username);
           $("#email").text(data.email);
           $("#phone").text(data.phone);
           $("#website").text(data.website);
        });
    });

});
