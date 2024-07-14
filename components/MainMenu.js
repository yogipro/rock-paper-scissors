function MainMenu(playerName,test){
    this.render = function (){
        return  `<div>
            <h1>TIK TAK TOE</h1>
            <label for="player-name-input">Your name:<label>
            <input type="text" value = "${playerName}" id="player-name-input" oninput="app.handleMenuInputChange()"/>
            <button ${playerName.length == 0? "disabled" : ""}>Play</button>
            <h2>Playing as: ${playerName}</h2>
            <input oninput="${test}"/>
    
    </div>`
    }
    
}