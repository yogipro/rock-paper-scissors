function getComputerChoice(){
    const CHOICES = {
        0:"rock",
        1:"paper",
        2:"scissors",
    }
    let randomNumber = Math.floor(Math.random()*3)
    return CHOICES [randomNumber];
}

function determineWinner(playerOne,playerTwo){
    
    if (playerOne.choice == playerTwo.choice){
        return {
            name:"draw",
            type:"draw"
        }
    }else {
        switch(playerOne.choice){
            case "rock":
                return playerTwo.choice == "scissors" 
                ? playerOne 
                : playerTwo 
            case "paper":
                return playerTwo.choice == "rock"
                ?
                playerOne
                :
                playerTwo
            case "scissors":
                return playerTwo.choice == "paper"
                ?
                playerOne
                :
                playerTwo
            default:
                throw new Error("unsupported Enum",playerOne.choice)
        }
    }
}