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