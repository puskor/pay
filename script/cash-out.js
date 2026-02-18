const balanceInput = document.getElementById("balance");

document.getElementById("cash_out_btn").addEventListener("click", function () {
    const balance = parseInt(balanceInput.innerText);
    const agentNumber = getValue("agent_number");
    const amount = getValue("amount");
    const pin = getValue("pin");

    console.log("cash_out");


    if (pin != "1234" || agentNumber.length != 11 || balance < 0) {
        alert("Some this wrong . Pin or Number or amount");
        return;
    }
    else {
        if (balance < amount) {
            alert("Your amount over the balance")
            return;
        }
        else {
            const newBalance = balance - amount;
            balanceInput.innerText = newBalance;

            setNull("agent_number");
            setNull("amount");
            setNull("pin");
            return;
        }
    }

})

