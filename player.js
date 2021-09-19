class Player
{
    constructor()
    {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
    }

    getCount()
    {
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on('value' , function(data)
      {
          playerCount = data.val();
      });
      
    }

    updateCount(count)
    {
       database.ref('/').update({
           playerCount : count 
       });

    }

    

    addPlayer()
    {
        var playerIndex = "players/player" + this.index;   // there should not be space,

        if(this.index === 1)
        {
            this.positionX = width/2 - 100;
        }
        else
        {
          this.positionX = width/2 + 100;
        }

        database.ref(playerIndex).set({

           name : this.name,
           positionX : this.positionX,
           positionY : this.positionY

        });

    }

    update()
    {
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).update({

         positionX : this.positionX ,
         positionY : this.positionY

            
        })
    }


    static getPlayersInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on('value' , function(data)
        {
            allPlayers  = data.val();
        });
    }

    
}