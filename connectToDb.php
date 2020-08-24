<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php 
         //========================== START connecting with the DB server ============================
    $server = 'localhost';
    $username = 'root';
    $password = '';
    $projectdb = 'project1_userdata';    
    //making connection with the project DB and storing the object in variable $con
    $con = new mysqli($server, $username, $password, $projectdb);
    //check connection
    if($con->connect_error){
        die( "Error: " . $con->connect_error );
    }
    else{
        echo "Connected successfully";
    }
    // --------------------------connection ENDS(but not closed yet!) here -------------------------
    echo "<br>";
?>

</body>
</html>