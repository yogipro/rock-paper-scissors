function Game(playerName,endGame){

    const COMPONENTS = {
        "RoundOverModal": new RoundOverSceen(goToNextRound)
    }

    const [playerChoice,setPlayerChoice] = useState("");
    const [computerChoice,setComputerChoice] = useState("");
    const [computerScore,setComputerScore] = useState(0);
    const [playerScore,setPlayerScore] = useState(0);
    const [isRoundOver,setIsRoundOver] = useState(false);
    const [currentRoundWinner,setCurrentRoundWinner] = useState("");
    const [roundNumber,setRoundNumber] = useState(1);

    useEffect(()=>{
        if (playerChoice.get()){
            const winner = determineWinner(
                {name:playerName.get(),type:"human",choice:playerChoice.get()}
                ,{name:"robot-boy",type:"computer",choice:computerChoice.get()}
            )
            endCurrentRound(winner);
        }
    },[playerChoice]);

    Game.reset = function(){
        setRoundNumber(1);
        setIsRoundOver(false);
        setPlayerScore(0);
        setComputerScore(0);
        setCurrentRoundWinner("");
        setPlayerChoice("");
        setComputerChoice("");
    }
    function handleChoiceClick(e){
        setComputerChoice(getComputerChoice())
        setPlayerChoice(e.target.getAttribute("id"));   
    }


    function endCurrentRound(winner){
        setCurrentRoundWinner(winner);
        setIsRoundOver(true);
      }

    function setUpEventListeners(){
        setTimeout(()=>{
            try{
                document.getElementById("rock").onclick = handleChoiceClick.bind(Game);
                document.getElementById("paper").onclick = handleChoiceClick;
                document.getElementById("scissors").onclick = handleChoiceClick;
            }catch(e){
                console.warn("faild to setup event listners",e)
            }
        },0);
    }

    function getWinnerMessage (){
        if(isRoundOver.get()){
            if(currentRoundWinner.get().name == "draw"){
                return "<div>It\'s a draw!</div>"
            }else{
                return `<div>Winner is : ${currentRoundWinner.get().name}</div>`
            }
        }
        return "";

    }

    function goToNextRound(){
        if (roundNumber.get() < 5){
            if (currentRoundWinner.get().type == "human"){
                setRoundNumber(roundNumber.get() + 1)
                setPlayerScore(playerScore.get() + 1);
            }else if (currentRoundWinner.get().type == "computer"){
                setRoundNumber(roundNumber.get() + 1)
                setComputerScore(computerScore.get() + 1)
            }
            setIsRoundOver(false);
            setCurrentRoundWinner("");
            setPlayerChoice("");
            setComputerChoice("");
        }else {
            endGame(playerScore.get() > computerScore.get() ? playerName.get() 
            : playerScore.get() == computerScore.get() 
            ?"NOBOYD ITS DRAW SUCKER!"
            :"Robot Boy"
        )
        }
    }
    
    this.render = function (){
        setUpEventListeners();
        
        return `
            <div id="game-console">
                <div class="row" >
                        <div>Playing as: ${playerName.get()}</div>
                        <div>Your Score:  ${playerScore.get()}</div>
                        <div>computer score: ${computerScore.get()}</div>
                </div>
                <div class="row">
                    <div class="left">
                    ${playerChoice.get() == ""? `
                        <div  id="player-choices">
                            <div class = "choice btn" id="rock">rock</div>
                            <div class = "choice btn" id="paper">paper</div>
                            <div class = "choice btn" id ="scissors">scissors</div>
                        </div>
                        ` : ``}
                    </div>
                    <div class="middle">VS</div>
                    <div class="right">
                        <img src="resources/robot.jpg" />
                    </div>
                </div>
            <div>
            ${isRoundOver.get() 
                ? COMPONENTS.RoundOverModal.render(getWinnerMessage(),playerChoice,computerChoice) 
                : ""}
            
        `;
    }

    // this.render = this.render.bind(Game);
    
}