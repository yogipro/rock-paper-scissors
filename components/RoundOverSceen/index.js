function RoundOverSceen(goToNextRound){

    function setUpEventListeners(){
        try{
            setTimeout(()=>{
                document.querySelector('.modal-container > button').onclick = goToNextRound;
            },0)
        }catch(e){
            console.warn(e)
        }
        
    }

    this.render = function (winnerMessag,playerChoice,computerChoice){
        setUpEventListeners()
        return  `
            <div class= "modal-container">
                <h1>${winnerMessag}</h1>
                <h2>You Chose <span>${playerChoice.get()}</span></h2>
                <h2>Robot-boy Chose <span>${computerChoice.get()}</span></h2>
                <button id="ok-button">OK</button>
            </div>

        `
    }
    
}