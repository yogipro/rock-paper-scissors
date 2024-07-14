const MAX_ROUND_NUMBER = 5;


function App(){
    
    const [playerName,setPlayerName] = useState("");
    const [computerScore,setComputerScore] = useState(0);
    const [gameOver,setGameOver] = useState(false);
    const [roundNumber,setRoundNumber] = useState(1);
    const [errorMessage,setErrorMessage] = useState("");
    const [inMainMenu,setInMainMenu] = useState(true);

    

  // Move all game functions here (showMenuScreen, startGame, etc.)
    useEffect(()=>{
        
    },[]);
    
    useEffect(()=>{
        refocusInput();
    },[playerName,computerScore,gameOver,roundNumber,errorMessage,inMainMenu]);

    function refocusInput(){
        setTimeout(()=>{
            const input = document.getElementById("player-name-input")
            input.focus();
            input.setSelectionRange(input.value.length,input.value.length);
        },1);
    }
 
  this.handleMenuInputChange = function(e){
    const input = document.getElementById("player-name-input");
    setPlayerName(input.value);
  }
  function test(){
    console.log('!!!!!!');
  }

   this.render = function(){
        if(inMainMenu){
           return  new MainMenu(playerName.get(),test).render()
        }
    }
}









