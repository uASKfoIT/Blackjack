<html>
<head>
    <link rel="stylesheet" href="css/navigation_bar.css">
    <link rel="stylesheet" href="css/global/text_styles.css">
    <link rel="stylesheet" href="css/global/button_styles.css">
    <link rel="stylesheet" href="css/global/style.css">

    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <?php include 'navigation_bar.php'; ?>
    

    <div class="dashboard">
        <div class="title">
            <p class="TNR-xxlarge__white" id="title-text"></p>
        </div>

        <div class="game-sprite">
            <img id="sprite-image">
        </div>

        <div class="dropdown-container">
            <p class="TNR-small__white dropdown-selection-text">deck size</p>
            <div class="off dropdown-list"></div>
        </div>

        <div class="small-wood-button start-button">
            <div class="small-wood-button__color1"></div>
            <div class="small-wood-button__color2">
                <span class="TNR-medium__white start-button__text"></span>
            </div>
        </div>

    </div>


    <script type="module" src="js/index.js"></script>
    <script src="js/navigation_bar.js"></script>
</body>
</html>