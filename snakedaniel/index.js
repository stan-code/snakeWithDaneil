const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

class SnakePart{
  constructor(x, y){
    this.x = x
    this.y = y
  }
}


let speed = 7

let tileCount = 20
let tileSize = canvas.width / tileCount -2
let headX = 10
let headY = 10
let appleX = 3
let appleY = 3
let score = 0

const snakeParts = []

let snakeTail = 0

let xVel = 0
let yVel = 0

let isGameOver = false




function drawGame(){
  changeSnakePosition()
  
  let result = gameOver()
  if(result){
    return
  }

  clearScreen()
  
  
  appleCrash()
  drawApple()
  drawSnake()
  snakeScore()
  setTimeout(drawGame, 1000 / speed)
}

function clearScreen() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake(){
  ctx.fillStyle = 'green'
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)

  ctx.fillStyle = 'red'
  for (let i = 0; i < snakeParts.length; i++){
    let part = snakeParts[i]
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
  }

  snakeParts.push(new SnakePart(headX, headY))
  if (snakeParts.length > snakeTail)
  snakeParts.shift()
}

function snakeScore(){
  ctx.fillStyle = 'white'
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, canvas.width-150, 30);
}

function drawApple(){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
  }

function changeSnakePosition(){
  headX = headX + xVel
  headY = headY + yVel
}

function appleCrash(){
  if(headX == appleX && headY == appleY){
  appleX = Math.floor(Math.random() * tileCount );
  appleY = Math.floor(Math.random() * tileCount );
  score++
  snakeTail++
  }
}
  

function gameOver(event){
    let gameisOver = false

    if(headX < 0){
        gameisOver = true
        }
    
    if(headX > 19){
        gameisOver = true
        }
    
    if(headY < 0){
        gameisOver = true
        }

    if(headY > 19){
        gameisOver = true 
        }

    for(let i = 0; snakeParts.length > i; i++){
      let part = snakeParts[i]
      if(part.x == headX && part.y == headY){
        gameisOver = true
      }
    
    }


  if (gameisOver == true) {
    ctx.fillStyle = 'blue'
    ctx.font = "30px Comic Sans MS";
    ctx.fillText('Game Over Man!', canvas.width / 6.5, canvas.height / 2.5);
    ctx.fillText('Game Over!', canvas.width / 6.5, canvas.height / 2);
  }

      return gameisOver


}



document.body.addEventListener('keydown', keyDown)

function keyDown(event){

  //left arrow
    if(event.keyCode == 37){
        yVel = 0;
        xVel = -1

    }

  //right arrow
    if(event.keyCode == 39){
        yVel = 0;
        xVel = 1
    }

  //up arrow
   if(event.keyCode == 38){
            yVel = -1;
            xVel = 0
    }

  //down arrow
  if (event.keyCode == 40) {
    yVel = 1;
    xVel = 0
  }
  
}

drawGame()

//