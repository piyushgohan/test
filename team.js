$(document).ready(function(){

    var data = JSON.parse(localStorage.getItem("team"));
    console.log(data);
    var card1 = $("<div>").attr({
        class : "team-logo-container"
    })
    var img1 = $("<img>").attr({
        src: data.teamIcon,
        class: "team-logo"
    })
    var name1 = $("<p>").html(`<b>Team Name :</b> <span>${data.fullName}</span>`).attr({
        class: "team-name"
    })
    var key1 = $("<p>").html(`<b>key Name :</b> <span>${data.key}</span>`).attr({
        class: "team-name"
    })
    var cham1 =$("<p>").html(`<b>Championships Won : </b> <span>${data.championshipsWon}</span>`).attr({
        class: "team-name"
    })
    $(card1).append(img1,name1,key1,cham1);
    $("#team-main").append(card1);


    //player
    function createPlayer(data,i){
        var cardAbs = $("<div>").attr({
            class:"card-absolute"
        })
        var card2 = $("<div>").attr({
            class : "player-container"
        })
        var img2 =$("<img>").attr({
            class : "player-img",
            src : data.photos
        })
        var name2 =$("<p>").html(`${data.name}`).attr({
            class :"player-name"
        })
        $(card2).append(img2,name2);
        card2.click(function(){
            localStorage.setItem("player",JSON.stringify(data));
            window.location="./player.html";
        })
        if(i==0){
            let best = $("<p>").html("Best Batsman").attr({
                class: "best"
            })
            $(card2).append(best);
        }
        if(i==9){
            let best = $("<p>").html("Best Bowler").attr({
                class: "best"
            })
            $(card2).append(best);
        }
        $(cardAbs).append(card2);
        $("#team-players").append(cardAbs);
    }



    for( var i=0;i<data.players.length;i++){
        createPlayer(data.players[i],i);
    }

})