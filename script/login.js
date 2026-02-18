// const number = document.getElementById("number").innerText;
// const pin = document.getElementById("pin").innerText;




document.getElementById("loginBtn").addEventListener("click", function (even) {
    const numberInput = document.getElementById("number");
    const pinInput = document.getElementById("pin");

    const number = numberInput.value;
    const pin = pinInput.value;

    if(number == "123456789" && pin=="1234")
    {
        numberInput.value = " ";
        window.location.assign("/home.html");
    }
    else{
        numberInput.value = " ";
        pinInput.value="";
        alert("You give something wrong")
        return;
    }

})