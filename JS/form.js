class Form {
    constructor () {
        this.input = createInput("NAME");
        this.input.position(130, 160);
        this.button = createButton("Play");
        this.button.position(250, 200);        
        this.greeting = createElement("h3");
        this.greeting.position(130, 160);
    }
    display() {
        var title = createElement("h2");   
        title.html("Car Racing Game");
        title.position(130, 10);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
        })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}