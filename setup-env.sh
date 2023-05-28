#!/bin/bash

create_files (){
    echo "Enter Folder Name"
    read FOLDER_NAME
    mkdir $FOLDER_NAME
    cd $FOLDER_NAME

    touch index.html
    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Document</title>
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="css/master.css">
    </head>
    <body>
        
        <script src="js/main.js"></script>
    </body>
    </html>' > index.html

    mkdir css
    cd css
    touch master.css
    echo '* {
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
}' > master.css
    
    cd ../
    mkdir js
    cd js
    touch main.js
}

create_files

