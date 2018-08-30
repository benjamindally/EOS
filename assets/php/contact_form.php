<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "benjamin.dally@icloud.com";

    $headers = "From: " .$emailFrom;

    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);

    header("Location: index.html?mailsent");
    
}

