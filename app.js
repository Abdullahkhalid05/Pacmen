document.addEventListener("DOMContentLoaded", () =>{
    let score= 0
    const displayScore = document.getElementById("score") 
    const width = 28
    const grid = document.querySelector(".grid")
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    // 0 is for pac-dots
    // 1 is for wall 
    // 2 is for spaner where ghost can spawn
    // 3 is power boost
    // 4 is empty

    const squares = []
    function creatBoard(){
        for(let i = 0 ; i < layout.length ; i++){
           const square = document.createElement("div")
           square.id = i 
           grid.appendChild(square)
           squares.push(square)

           if(layout[i] === 0){
             squares[i].classList.add("pac-dot")
           }
           if(layout[i] === 1){
             squares[i].classList.add("wall")
           }
           if(layout[i] === 2){
             squares[i].classList.add("ghost-lair")
           }
           if(layout[i] === 3){
             squares[i].classList.add("power-pellet")
           }
        }
    }
   creatBoard()
    // let us create packman 
    let pacmanCurrentIndex = 490 
    squares[pacmanCurrentIndex].classList.add("pac-man")

    //move pacman
    function movePacman(e){
      squares[pacmanCurrentIndex].classList.remove("pac-man")
      //switch case for the moving buttons
      switch (e.key){
        case "ArrowLeft":
              if(
                pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex -1].classList.contains("wall") &&
                !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")
              ){
                  pacmanCurrentIndex -= 1
              }
              if(
                (pacmanCurrentIndex - 1) === 363)
                {
                pacmanCurrentIndex = 391
              }
              break
        case "ArrowRight":
             if(
              pacmanCurrentIndex % width < width -1 &&
              !squares[pacmanCurrentIndex + 1].classList.contains("wall")&&
              !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
             ) {
              pacmanCurrentIndex += 1
             }     
             if(
              (pacmanCurrentIndex + 1) === 392
             ){
             pacmanCurrentIndex =364
             }
             break
        case "ArrowUp":
          if(
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex - width].classList.contains("wall")&&
            !squares[pacmanCurrentIndex -width].classList.contains("ghost-lair")
          )    {
            pacmanCurrentIndex -= width
          }
          break
        case "ArrowDown":
          if(
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex + width].classList.contains("wall")&&
            !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
          )    {
            pacmanCurrentIndex += width
          }
          break
      }
      squares[pacmanCurrentIndex].classList.add("pac-man")
      pacDotEaten()
      powerPelletEaten()
      checkForWin()
      checkForGameOver()
    }
    document.addEventListener("keydown", movePacman)

    function pacDotEaten(){
      if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
        score++
        displayScore.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
      }
    }
    function powerPelletEaten(){
      if(squares[pacmanCurrentIndex].classList.contains("power-pellet")){
        score += 10
        displayScore.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove("power-pellet")
        ghost.forEach(ghost => ghost.isScared = true)
        setTimeout(unScaredGhosts ,10000)
      }
    }
   
   function unScaredGhosts(){
        ghost.forEach(ghost => ghost.isScared = false)
   }

   class Ghost{
       constructor(className , startIndex , speed){
       this.className= className
       this.startIndex = startIndex
       this.speed = speed
       this.currentIndex = startIndex
       this.isScared = false
       this.timerId =NaN
   }
  }
  const ghosts =  [
      new Ghost("blinky",  348 , 260),
      new Ghost("pinky", 378, 400),
      new Ghost("inky", 351 , 350),
      new Ghost("clyde",405 ,500)
  ]

  ghosts.forEach(ghost => 
    squares[ghost.currentIndex].classList.add(ghost.className ,"ghost")
  )

  ghosts.forEach(ghost => moveGhost(ghost))
  
  
  function moveGhost(ghost) {
    const directions = [-1, 1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function () {
        //if next square your ghost is going to go to does not have a ghost and does not have a wall
        if (
            !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
            !squares[ghost.currentIndex + direction].classList.contains("wall")
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            // else find a new random direction to go in
        } else direction = directions[Math.floor(Math.random() * directions.length)]
        // if the ghost is currently scared
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }

        //if the ghost is currently scared and pacman is on it
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")) {
            ghost.isScared = false
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            ghost.currentIndex = ghost.startIndex
            score += 100
            scoreDisplay.innerHTML = score
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
        }
        checkForGameOver()
    }, ghost.speed)
}

function checkForGameOver() {
  if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener("keyup", movePacman)
      setTimeout(function () {
          alert("Game Over")
      }, 500)
  }
}


})

