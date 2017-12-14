
$(document).ready(function () {
    $("#submit").on("click", function(event){
        event.preventDefault();
        var _data = $("#form").serialize();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: {
                post_data: _data
             }
        }).done(function(){
            $("#form").trigger("reset");
            alert("Спасибо за заявку!");
        });
        return false;
    });
});