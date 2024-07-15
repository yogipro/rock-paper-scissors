const MAX_ROUND_NUMBER = 5;


function App(){
    
    const [playerName,setPlayerName] = useState("");
    const [gameOver,setGameOver] = useState(false);
    const [inMainMenu,setInMainMenu] = useState(true);
    const [winner,setWinner] = useState(null);

    const COMPONENTS = {
      "Menu": new MainMenu(),
      "Game": new Game(playerName,endGame),
      "GameOver":new GameOverScreen(restartGame)
    }     

    function refocusInput(){
      setTimeout(()=>{
        const input = document.getElementById("player-name-input")
        input.focus();
        input.setSelectionRange(input.value.length,input.value.length);
      });
    }

    function endGame(_winner){
      setGameOver(true)
      setWinner(_winner)
    }

    function restartGame(){
      setWinner("");
      setGameOver(false);
      Game.reset();
    }
 
  this.handleMenuInputChange = function(e){
    const input = document.getElementById("player-name-input");
    setPlayerName(input.value);
  }
  this.handlePlay = function(e){
    setInMainMenu(false);
  }


   this.render = function(){
        
        if(inMainMenu.get()){
           refocusInput();
           return  COMPONENTS.Menu.render(playerName.get())
        }else if (gameOver.get()){
          return COMPONENTS.GameOver.render(winner.get())
        }else {
          return COMPONENTS.Game.render(
            playerName.get()) 
        }
    }
}









