class Game {
    constructor () {


    }
    getState() {
        var stateRef = database.ref("gameState");
        stateRef.on("value", function (Data) {
            gameState = Data.val();
            

        });

    }


    update(state) {
        database.ref("/").update({
            gameState: state,
        })

    }

    Start() {
        if(gameState == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }

    play() {
        form.hide();
        Player.getPlayerinfo();
        console.log("game started");
        if(allPlayers != undefined) {
            var displayposition  = 130;

            for (var plr in allPlayers) {
            if(plr == "player" + player.index) {
                fill("RED")

            } else {
                fill("BLUE")

            }

            displayposition = displayposition + 20;
            textSize(16);
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayposition);    
            }

            if(keyDown(UP_ARROW ) && player.index != null) {
                player.distance = player.distance + 50;
                player.update();

            }
        
        }
    }

}