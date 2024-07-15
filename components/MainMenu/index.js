function MainMenu(){
    this.render = function (playerName){
        return  `<div id="menu-container">
            <div class="row">
                <h1>TIK TAK TOE</h1>
            </div>
            <div class="row">
                <label for="player-name-input">NAME:<label>
                <input type="text" value = "${playerName}" id="player-name-input" oninput="app.handleMenuInputChange()"/>
            </div>
            <div class="row">
                <button onclick= "app.handlePlay()" ${playerName.length == 0? "disabled" : ""}>Play</button>
            </div>
    </div>`
    }
    
}