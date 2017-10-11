$(() => {
    // Strike through particular todos on click
    $("ul").on("click", ".todo", function() {        
        $(this).toggleClass("completed");
    });

    // Click on X to delete todo
    $("ul").on("click", ".delete", function(e) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        e.stopPropagation();
    });

    $("#newItem").keypress(function(e) {
        if(e.which === 13) {
            const todoText = $(this).val();
            $(this).val("");
            $("ul").append('<li class="todo"><span class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + todoText + '</li>');
        }
    });

    $(".fa-plus-square-o").click(function() {
        $("#newItem").fadeToggle();
    });
    
});