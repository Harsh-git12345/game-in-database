class Player {
    constructor () {
        this.index = null;
        this.name = null;
        this.distance = 0;

    }

    getCount() {
        var countRef = database.ref("playerCount");
        countRef.on("value", function (Data) {
            playerCount = Data.val();
            

        });

    }

    updateCount(count) {
        database.ref("/").update({
            playerCount:count,

        })

    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,

        });
        
    }

    static getPlayerinfo() {
        var playerinfo = database.ref("players");
        playerinfo.on("value", (data)=> {
            allPlayers = data.val();
        });

    }
}