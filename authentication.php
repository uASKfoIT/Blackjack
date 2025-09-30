<?php include './db/connection.php'; ?>


<html>
<head>
    <link rel="stylesheet" href="css/navigation_bar.css">
    <link rel="stylesheet" href="css/global/text_styles.css">
    <link rel="stylesheet" href="css/global/button_styles.css">
    <link rel="stylesheet" href="css/global/style.css">
    <link rel="stylesheet" href="css/global/form_style.css">

    <link rel="stylesheet" href="css/authentication.css">
</head>
<body>
    <?php include 'navigation_bar.php'; ?>
    

    <div class="dashboard">
         <div class="title">
            <p class="TNR-xxlarge__white" id="title-text">BLACK JACK</p>
        </div>
     
        <!--Log In-->
        <div class="fields-container login-container">
            <form class="form" id="login-form">
                <label class="TNR-medium__white">user name</label>
                <input class="TNR-medium__black small-wide-input" type="text" id="login-user-name">

                <label class="TNR-medium__white">password</label>
                <input class="TNR-medium__black TNR-medium__black small-wide-input" type="text" id="login-password">

                <input type="submit" class="hidden-submit" style="display:none;">
                <div class="small-wide-wood-button" id="login-button">
                    <div class="small-wide-wood-button__color1"></div>
                    <div class="small-wide-wood-button__color2">
                        <span class="TNR-medium__white login-button-text">Log In</span>
                    </div>
                </div>
                <label class="link-label TNR-small__blue" id="register-link">REGISTER</label>
                <label class="status-message TNR-small__red" id="login-message"></label>
            </form>
        </div>

        <div class="off message">
            <h1 class="TNR-xxlarge__white">Registration Successfull</h1>
            <label class="link-label TNR-large__blue" id="login-link">LOG IN</label>
        </div>

        <!--Register-->
        <div class="off register-container">
            <form class="form" id="register-form">
                <label class="TNR-medium__white">user name</label>
                <input class="TNR-medium__black small-wide-input" type="text" id="register-user-name">

                <label class="TNR-medium__white">password</label>
                <input class="TNR-medium__black small-wide-input" type="text" id="register-password">

                <label class="TNR-medium__white">confirm password</label>
                <input class="TNR-medium__black small-wide-input" type="text" id="register-confirm-password">

                <input type="submit" class="hidden-submit" style="display:none;">
                <div class="small-wide-wood-button" id="register-button">
                    <div class="small-wide-wood-button__color1"></div>
                    <div class="small-wide-wood-button__color2">
                        <span class="TNR-medium__white login-button-text">Register</span>
                    </div>
                </div>
                <label class="link-label TNR-small__blue" id="login-link">LOG IN</label>
                <label class="status-message TNR-small__red" id="register-message"></label>
            </form>
        </div>
    </div>


    <script type="module" src="js/authentication.js"></script>
    <script src="js/navigation_bar.js"></script>
</body>
</html>