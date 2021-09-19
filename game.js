class Game
{
    constructor()
    {
      

  }

  getState()
  {
     var gameStateRef = database.ref('gameState');
     gameStateRef.on('value' , function(data){
       gameState = data.val();
     })
  }

 update(state)
 {
   database.ref('/').update({
         gameState : state
   });
 }

  start()
  {

    player = new Player();
    playerCount = player.getCount();
    form= new Form();
      form.display();

      zemo = createSprite(width/2 - 50 , height - 100);
      zemo.addImage(zemoImg);
      zemo.scale = 0.5 ; 

      zemino = createSprite(width/2 + 100 , height - 100 );
      zemino.addImage(zeminoImg);
      zemino.scale = 0.5;

      characters = [zemo , zemino];


      heart = new Group();
      coin = new Group();
      obstacle = new Group();
      var obstaclesPositions = [ { x: width / 2 + 250, y: height - 800, image: obstacle2Image }, 
        { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
         { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
          { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
           { x: width / 2, y: height - 2800, image: obstacle2Image },
            { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
             { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
              { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
               { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
                { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
                 { x: width / 2, y: height - 5300, image: obstacle1Image },
                  { x: width / 2 - 180, y: height - 5500, image: obstacle2Image } 
                ];
      

      this.addSprites(heart , 4 , heartImg , 0.5);
      this.addSprites(coin , 5 , coinImg , 0.5);
      this.addSprites(obstacle , obstaclesPositions.length , obstacle1Image  , obstaclesPositions);




  }

  addSprites(spriteGroup , numberOfSprites  , spriteImage , scale , positions = [])
  {
    for(var i =0 ; i < numberOfSprites ;  i++ )
    {

      var x, y;
      if(positions.lenght >0 )
      {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;
      }
      else{

      
     x = random(width/2 + 150 , width/2 - 150);
     y = random(-height * 4.5 , height - 100);

      var sprite  = createSprite(x,y);
      sprite.addImage("sprite", spriteImage );
      sprite.scale = scale;

      spriteGroup.add(sprite);
    }
  }




  }


  handleElements()
  {
    form.hide();
  }

  play()
  {
    this.handleElements();
    Player.getPlayersInfo();

    if(allPlayers !== undefined)
    {
      image(track , 0 , -height * 5, width , height * 6  );

      var index = 0;
      for(var plr in allPlayers)
      {
        index =  index+1;
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        


        characters[index - 1].position.x = x;
        characters[index - 1].position.y = y;

        if(index === player.index)
        {
           fill("Black");
           ellipse(x, y, 10, 10);

           camera.position.x = characters[index - 1].position.x;
           camera.position.y = characters[index - 1].position.y;

           this.handleHeart(index);
           this.handleCoins(index);
           
        }

      }
    

      this.handlePlayerControls();



      

      drawSprites();
    }
  }


  handlePlayerControls()
  {
    if(keyIsDown(UP_ARROW)) // UP_ARROW should not be in quotation
    {
      player.positionY += 10;
      player.update();
      //console.log("UpArrow");
    }

    if(keyIsDown(LEFT_ARROW) && player.positionX > width/3 - 50)
    {
      player.positionX -= 5;
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.positionX< width/2 +300)
    {
      player.positionX += 5;
      player.update();
    }
  }


  handleHeart(index)
  {
    characters[index-1].overlap(heart , function(collector , collected)
    {
      
      player.update();
      collected.remove();
    })
  }

  handleCoins(index)
  {
    characters[index-1].overlap(coin , function(collector , collected)
    {
      player.score += 1;
      player.update();
      collected.remove();
    })
  }
  

  }


