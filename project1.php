<?php

    include_once('connectToDb.php');

    // ============================== INSERTing the user details STARTS here========================
    //storing Table column values in variables
    echo "<pre>"; 
    print_r($_POST); 

    $company_name = $_POST['company_name'];   //only name is valid inside post[]
    $contact_name = $_POST['contact_name'];
    $email        = $_POST['email'];
    $phone        = $_POST['phone'];
    $reference_name = $_POST['reference_name'];
    $reference_number = $_POST['reference_number'];
    $company_logo = $_POST['company_logo'];   
    $company_desc = $_POST['companyinfo'];
    $company_addr = $_POST['companyaddress'];
    $country      = $_POST['country_id'];
    $sector_type  = $_POST['sectortype'];
    $subsector_type = $_POST['subsectortype'];
    $product_image = $_POST['product_image']; 
    $product_name = $_POST['product_name'];
    $product_desc = $_POST['product_description'];

    //store insert entries into variable $sql
    $sql = "INSERT INTO `user_details` 
                        (`user_type`, 
                        `company_name`,
                        `contact_name`, 
                        `email`, 
                        `phone`, 
                        `reference_name`, 
                        `reference_number`, 
                        `company_logo`, 
                        `company_desc`, 
                        `company_addr`, 
                        `country`, 
                        `sector_type`, 
                        `subsector_type`, 
                        `product_image`, 
                        `product_name`, 
                        `product_desc`) 
                        VALUES ('hard value for user type', 
                                '$company_name', 
                                '$contact_name',
                                '$email', 
                                '$phone', 
                                '$reference_name', 
                                '$reference_number', 
                                '$company_logo', 
                                '$company_desc', 
                                '$company_addr', 
                                '$country', 
                                '$sector_type', 
                                '$subsector_type', 
                                '$product_image', 
                                '$product_name', 
                                '$product_desc');";
    //insert and echo the error if any
    if($con->query($sql) == TRUE){
        $last_id = $con->insert_id;
        echo "INSERTED successfully with last inserted id: " . $last_id . "<br>";
    }
    else{
        echo "ERROR insterting the last record: " . $con->error . "<br>";
    }
    $con->close(); 
?>