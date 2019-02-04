<?php

if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "rosalie@megankraft.com, benji686@gmail.com";

    $headers = "From: " .$emailFrom;

    $txt = "Rosalie,\n\nYou have recieved an email from your website. ".$name." would like to connect with you.\n\nMessage:\n".$message;

    mail($mailTo, $headers, $txt);

    header("Location: ../../index.html$mailsent");
    
}

