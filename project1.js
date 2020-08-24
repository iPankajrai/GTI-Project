//--------------------------- validate function for tab1 ------------------------------------//
function customValidate() {
    // var personal_details = document.getElementsByClassName("contactId");
    // if(personal_details.value == ""){
    //     alert("please select your personal details item");
    //     return false ;
    // }
    var companyName = document.getElementById("company_name");
    var label = document.getElementById("comp_para_id");
    var contactName = document.getElementById("contact_name");
    var label2 = document.getElementById("cont_para_id");
    var emailName = document.getElementById("email");
    var label3 = document.getElementById("email_para_id");
    var phoneName = document.getElementById("phone");
    var label4 = document.getElementById("phone_para_id");
    var radioName = document.getElementById("a-option");
    var label5 = document.getElementById("radio_para_id");
    var radioName = document.getElementById("a-option");
    var label5 = document.getElementById("radio_para_id");

    if (companyName.value.trim() == "" && contactName.value.trim() == "" && emailName.value.trim() == "" && phoneName.value.trim() == "" && radioName.checked == false) {
        companyName.style.borderColor = "red";
        text = "Please enter company/organization name";
        label.innerHTML = text;
        contactName.style.borderColor = "red";
        text2 = "Please enter contact Name";
        label2.innerHTML = text2;
        emailName.style.borderColor = "red";
        text3 = "Please enter your email";
        label3.innerHTML = text3;
        phoneName.style.borderColor = "red";
        text4 = "Please enter your phone Number";
        label4.innerHTML = text4;
        radioName.style.borderColor = "red";
        text5 = "Please check this to proceed";
        label5.innerHTML = text5;
        return false;
    } else if (companyName.value.trim() == "") {
        companyName.style.borderColor = "red";
        text = "Please enter company/organization name";
        label.innerHTML = text;
        return false;
    } else if (contactName.value.trim() == "") {
        contactName.style.borderColor = "red";
        text2 = "Please enter contact Name";
        label2.innerHTML = text2;
        return false;
    } else if (emailName.value.trim() == "") {
        emailName.style.borderColor = "red";
        text3 = "Please enter your email";
        label3.innerHTML = text3;
        return false;
    } else if (phoneName.value.trim() == "") {
        phoneName.style.borderColor = "red";
        text4 = "Please enter your phone Number";
        label4.innerHTML = text4;
        return false;
    } else if (radioName.checked == false) {
        radioName.style.borderColor = "red";
        text5 = "Please check this to proceed";
        label5.innerHTML = text5;
        return false;
    } else {
        return true;
    }
}

//--------------------------- validate function for tab2 ------------------------------------//

function customValidate2() {
    var cinfoName = document.getElementById("companyinfo");
    var label6 = document.getElementById("cinfo_para_id");
    var caddrName = document.getElementById("companyaddress");
    var label7 = document.getElementById("caddr_para_id");
    var country_idName = document.getElementById("country_id");
    var label8 = document.getElementById("cselect_para_id");
    if (cinfoName.value.trim() == "") {
        cinfoName.style.borderColor = "red";
        text6 = "Please enter the company Information";
        label6.innerHTML = text6;
        return false;
    } else if (caddrName.value.trim() == "") {
        caddrName.style.borderColor = "red";
        text7 = "Please enter company Address";
        label7.innerHTML = text7;
        return false;
    } else if (country_idName.value.trim() == "") {
        country_idName.style.borderColor = "red";
        text8 = "Please select your country";
        label8.innerHTML = text8;
        return false;
    } else {
        return true;
    }
}

//--------------------------- validate function for tab3 ------------------------------------//

function customValidate3() {
    var pnameName = document.getElementById("product_name");
    var label9 = document.getElementById("pname_para_id");
    var pdescName = document.getElementById("product_description");
    var label10 = document.getElementById("pdesc_para_id");
    var fileName = document.getElementById("file");
    var label11 = document.getElementById("file_para_id");
    if (fileName.value.trim() == "") {
        fileName.style.borderColor = "red";
        text11 = "Please select a file";
        label11.innerHTML = text11;
        return false;
    } else if (pnameName.value.trim() == "") {
        pnameName.style.borderColor = "red";
        text9 = "Please enter the product name in the field";
        label9.innerHTML = text9;
        return false;
    } else if (pdescName.value.trim() == "") {
        pdescName.style.borderColor = "red";
        text10 = "Please enter product description";
        label10.innerHTML = text10;
        return false;
    } else {
        return true;
    }
    // $("#btn_register").click(function () {
    //     $("#div1").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
    //         if (statusTxt == "success")
    //             alert("External content loaded successfully!");
    //         if (statusTxt == "error")
    //             alert("Error: " + xhr.status + ": " + xhr.statusText);
    //     });
    // });
}

// $(document).ready(function () {
//     // $("#btn_register").click(function () {
//     //     $("#tab_default_2").trigger('click');
//     //     alert("alert here");
//     // });

//     $('#btn_register').click(function(e){
//         e.preventDefault();
//         $('#mytabs a[href="#tab_default_2"]').tab('show');
//         alert ("alert when next button is clicked in tab 1");
//     });   

// });

// function switchTab2(){
//     $("#tab_default_2").trigger('click');
//     alert ("adajdhajs");
// }

//bootstrap modal