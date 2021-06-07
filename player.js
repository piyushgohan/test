$(document).ready(function(){
    var data = JSON.parse(localStorage.getItem("player"));
    console.log(data);
    var card = $("<div>").attr({
        class : "img-container"
    })
    var img1 = $("<div>").attr({
        class : "players-img",
        src: data.photos,
        alt: "player image"
    })
    console.log(img1);
    var card1 = $("<div>").attr({
        class : "player-infocard"
    })
    var n1 = $("<p>").html(`player name: <span>${data.name}</span>`).attr({
        class : "player-info"
    })
    var n2 = $("<p>").html(`description: <span>${data.description}</span>`).attr({
        class : "player-info"
    })
    var n3 = $("<p>").html(`team: <span>${data.team}</span>`).attr({
        class : "player-info"
    })
    var n4 = $("<p>").html(`role: <span>${data.role}</span>`).attr({
        class : "player-info"
    })
    var n5 = $("<p>").html(`playing status: <span>${data.playingStaus}</span>`).attr({
        class : "player-info"
    })
    var n6 = $("<p>").html(`price: <span>${data.price}</span>`).attr({
        class : "player-info"
    })
    $(card).append(img1);
    $("#player-main-two").append(card);
    $(card1).append(n1,n2,n3,n4,n5,n6);
    $("#player-details-two").append(card1);
    
})