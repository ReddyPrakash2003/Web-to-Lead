function formDataHandle()
{
    let indate = document.querySelector(".inputdate");
    let outdate = document.querySelector(".outputdate");
    console.log(typeof indate.value);
    let formmatedDate = new Date(indate.value).toLocaleDateString('en-US');
    console.log(formmatedDate);
    outdate.value = formmatedDate;
    //console.log(outdate);
}

 function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        } } setInterval(timestamp, 500);