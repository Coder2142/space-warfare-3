class Game{
    constructor(){    
    }

    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        });
    }
    
    updateGameState(state){
        var gameStateRef = database.ref("/");
        gameStateRef.update({
            gameState:state
        });
    }


    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            
            form = new Form();
            form.display();
        }
       spaceship = createSprite(300,600);
       spaceship.addImage("spaceship", shipImage);
       spaceship.scale=0.5;
       //spaceship.velocityY = -7;

       spaceship2 = createSprite(800,600);
       spaceship2.addImage("spaceship2", ship2Image);
       spaceship2.scale=0.7;
       //spaceship2.velocityY = -7;

       ships = [spaceship, spaceship2];

       laser = createSprite(spaceship.x, spaceship.y );
       laser.addImage("laser", laserImage);
       laser.scale=0.3;
       laser.velocityY = spaceship.velocityY;
       
 
 
       laser2 = createSprite(spaceship2.x, spaceship2.y );
       laser2.addImage("laser", laserImage);
       laser2.scale=0.3;
       laser2.velocityY = spaceship2.velocityY;
       

       spaceship.depth = laser.depth + 1;
       spaceship2.depth = laser2.depth + 1;

       
    }

    play(){
        form.hide();
        image(background, 0, -displayHeight*4, displayWidth, displayHeight*5);
           textSize(30);
           fill("red");
           text("Game Starts", 120, 100)
           textSize(20);
           fill("red");
            text("Score: " + distance,500, 100)
            
        

        var y;
        var x = 175;

        var index = 0;

        for(var plr in allPlayers){

          index = index + 1;

          x = x + 200;
            
          y = displayHeight - allPlayers[plr].distance;  
          ships.x = x;
          ships.y = y;
    

            if(index === player.index){
                stroke(10);
                fill("red");
                ellipse(ships.x,ships.y,60,60);
                camera.position.x = displayWidth/2;
                camera.position.y = ships.y;
            }
        
                
              
        }
        if(keyDown(RIGHT_ARROW)){
            player.velocityX = 5;
            player.updateData();
          }

          if(keyDown(LEFT_ARROW)){
            player.velocityX = -5;
            player.updateData();
          }
          //&& player.index !== null           
          }
    }
    
