class Form
{
    constructor()
    {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton= createButton("Play");
        //this.titleImg= createImage("Images/logo.png", "gameTitle");
        this.greeting= createElement("h2");
        this.reset = createButton('Reset');
    }

    setElementsPosition()
    {
        this.input.position(width/2 - 110, height/2- 80);
        this.playButton.position(width/2 -50 , height/2 -20);
        //this.titleImg.position(120, 100);
        this.greeting.position(width/2 -300, height/2 - 100);
        this.reset.position(width/2 +450, height/2 - 300);
    }

    setElementsStyle()
    {
        //this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
    }

    display()
    {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();

    }

    hide()
    {
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();

    }

    handleMousePressed()
    {
        this.playButton.mousePressed(()=>
        {
           this.input.hide();
           this.playButton.hide();


           var message = ` Hello ${this.input.value()} </br>wait for another player to join...`;
           

           this.greeting.html(message);

           playerCount = playerCount + 1;
           player.name = this.input.value();
           player.index = playerCount;

           player.addPlayer();
           player.updateCount(playerCount);


           
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);

           

        });
    }

   

    
        
    
}