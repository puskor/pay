

const balanceIn = tagText("balance");
document.getElementById("add_money_btn").addEventListener("click", function () {
    const bank = getValue("option");
    console.log(bank);

    const balance = parseInt(balanceIn.innerText);
    const agentNumber = getValue("account_number");
    const amount = getValue("amount_bank");
    const pin = getValue("pin_bank");
    console.log("add_money");
    if (pin != "1234" || agentNumber.length != 11 || balance < 0) {
        alert("Some this wrong . Pin or Number or amount");
        return;
    }
    else {
        if (bank == "Pick a browser") {
            alert("Choice any Bank")
            return;
        }
        else {
            const newBalance = balance + Number(amount);
            balanceIn.innerText = newBalance;
            setNull("account_number");
            setNull("amount_bank");
            setNull("pin_bank");
            alert(`success add money from ${bank} time ${new Date}`)
            return;
        }
    }

})
