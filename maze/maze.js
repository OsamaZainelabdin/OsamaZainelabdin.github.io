$(document).ready(function () {    
    let start = false;
    let movedInWalls = false;
    // set event handler for click on S
    $("#start").on('click', function () {
        $(".boundary").removeClass("youlose");
        start = true;
        movedInWalls = true;
        $("#status").text("Game Started! Don't touch borders of the maze or move out it :)");
    });

    // Set event handelr on reaching the E without touching the borders or move outside the maze.
    $("#end").on('mouseover', function () {
        if ($(".boundary:hover").length === 0 && movedInWalls ) {
            if (start) {
                $("#status").text("You Won! click on S to start game again.");
                start = false;
                movedInWalls = false;
            }
        }
    });    

    // set event handler for losing the game
    $(document).on('mousemove', function () {
        if ((!$("#maze:hover").length != 0 && start) ||
            ($(".boundary:hover").length != 0 && start)) {

            $(".boundary").addClass("youlose");
            movedInWalls = false;
            start = false;
            $("#status").text("You Lose! click on S to start game again.");
        }
    });

    
    
});
