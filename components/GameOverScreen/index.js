function GameOverScreen(restartGame){

    function setUpEventListeners(){
        try{
            setTimeout(()=>{
                document.querySelector('.game-over-container button').onclick = restartGame
            },0)
        }catch(e){
            console.warn(e)
        }
        
    }

    this.render = function (winner){
        setUpEventListeners()
        return  `
            <div class= "game-over-container">
                <h1>GAME OVER</h1>
                <h2>WINNER IS:${winner}</h2>
                <button>Restart</button>
            </div>

        `
    }
    
}