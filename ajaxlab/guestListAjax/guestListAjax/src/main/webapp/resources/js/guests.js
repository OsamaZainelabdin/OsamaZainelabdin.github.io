$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    let html ="";
    $.each(data, function (index, item) {
        html += "<div><span>"+data.first+" "+data.last+"</span></div>";});
    $("#container").append(html);
}