<html>
<head>
    <link rel="stylesheet" href="css/navigation_bar.css">
    <link rel="stylesheet" href="css/global/text_styles.css">
    <link rel="stylesheet" href="css/global/style.css">
    <link rel="stylesheet" href="css/global/button_styles.css">

    <link rel="stylesheet" href="css/game.css">
</head>
<body>
    <?php include 'navigation_bar.php'; ?>
    
    <div class="dashboard">

        <!--Balance & Scoreboard-->
        <div class="game-stats">
            <div class="balance-container">
                <p class="TNR-large__white" id="balance-label">$</p>
                <p class="TNR-large__white" id="user-balance-text"></p>
            </div>
            <div class="scoreboard-container">
                <div class="player-score">
                    <label class="TNR-large__white" id="dealer-label">Dealer</label>
                    <label class="TNR-large__white" id="dealer-score-text"></label>
                </div>
                <div class="seperator"></div>
                <div class="player-score">
                    <label class="TNR-large__white" id="player-label">Player</label>
                    <label class="TNR-large__white" id="player-score-text"></label>
                </div>
            </div>
            <div class="true-count-container">
                <p class="TNR-medium__white true-count-text"></p>
            </div>
        </div>

        <!--Game Results-->
        <div class="off game-results">
            <div class="results-container">
                <p class="TNR-xxlarge__white results-text"></p>
            </div>

            <div class="game-results-menu">
                <div class="small-wood-button new-game-button">
                    <div class="small-wood-button__color1"></div>
                    <div class="small-wood-button__color2">
                        <p class="TNR-small__white" id="new-game-text">New Shoe</p>
                    </div>
                </div>      
                
                <div class="small-wood-button next-hand-button">
                    <div class="small-wood-button__color1"></div>
                    <div class="small-wood-button__color2">
                        <p class="TNR-small__white" id="next-hand-text">Next Hand</p>
                    </div>
                </div> 
            </div>
        </div>

        <!--Gameboard: player-dealer cards, card stack-->
        <div class="show-game-board game-board"> 
            <div class="player-deck dealer">
            </div>

            <div class="shoe-deck">
                <img id="shoe-deck-image">
            </div>

            <div class="player-deck player">
            </div>

            <div class="interaction-menu">
                <div class="off clear-stay-button">
                    <div class="small-wood-button__color1"></div>
                    <div class="small-wood-button__color2">
                        <p class="TNR-small__white" id="clear-stay-button__text"></p>
                    </div>
                </div>

                <div class="off betSpot-container">
                    <div class="betSpot-image-container">
                        <img class="betSpot-image">
                    </div>
                    <div class="betSpot-text-container">
                        <p class="TNR-small__white betSpot-text"></p>
                    </div>
                </div>

                <div class="off deal-hit-button">
                    <div class="small-wood-button__color1"></div>
                    <div class="small-wood-button__color2">
                        <p class="TNR-small__white" id="deal-hit-button__text"></p>
                    </div>
                </div>
            </div>

            <div class="off double-down-button">
                <div class="small-wood-button__color1"></div>
                <div class="small-wood-button__color2">
                    <p class="TNR-small__white">DOUBLE</p>
                </div>
            </div>
        </div>
        

        <!--Chips deck-->
        <div class="betting-chips off">
            <div class="active-chip chip" id="1">
                <img>
            </div>
            <div class="active-chip chip" id="5">
                <img>
            </div>
            <div class="active-chip chip" id="25">
                <img>
            </div>
            <div class="active-chip chip" id="100">
                <img>
            </div>
            <div class="active-chip chip" id="500"> 
                <img>
            </div>
            <div class="unactive-chip chip" id="1000">
                <img>
            </div>
        </div>
    </div>


    <script type="module" src="js/main.js"></script>
    <script src="js/navigation_bar.js"></script>
</body>
</html>