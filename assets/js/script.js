$(() => {
    // Strike through particular todos on check
    $("ul").on("click", ".checkbox", function(e) {        
        let $this = $(this);
        $this.parent().toggleClass("completed");
        $this.toggleClass("fa-square-o fa-check-square-o");
        e.stopPropagation();
    });

    // Click on trashcan to delete an item
    $("ul").on("click", ".delete", function(e) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        e.stopPropagation();
    });

    // Click on eraser to delete all completed items
    $("i.fa-eraser").click(function() {
        $(".completed").fadeOut(500, function() {
            $(this).remove();
        });
    });

    // Add new items
    $("#newItem").keypress(function(e) {
        if(e.which === 13) {
            const todoText = $(this).val();
            $(this).val("");
            $("ul").append(
                '<li class="todo"><span class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + todoText + '<i class="checkbox fa fa-square-o" aria-hidden="true"></li>');
        }
    });

    // Show/hide adding new item field
    $(".show-field").click(function() {
        let $this = $(this);
        $("#newItem").fadeToggle(500, function() {
            $this.toggleClass("fa-minus-square-o fa-plus-square-o");
        });        
    });
    
});