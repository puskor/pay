

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

            const container = document.getElementById("container");

            const history = document.createElement("div");
            history.innerHTML = `
            <div class="navbar bg-base-100 border-1 border-gray-300 rounded-xl flex justify-between">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-gray-100">
                            <img src="assets/opt-1.png" alt="">
                        </div>
                        <div class="pl-3">
                            <h1 id="nameT" class="text-[18px] font-extrabold">Add money : ${amount}</h1>
                            <h3 id="time" class="text-[14px] text-[#080808]/50">${new Date().toLocaleString()}</h3>
                        </div>
                    </div>
                    <div>
                        <a>
                            <i class="fa-solid fa-ellipsis rotate-90"></i>
                        </a>
                    </div>
                </div>
            `;
            container.append(history);

            setNull("account_number");
            setNull("amount_bank");
            setNull("pin_bank");
            alert(`success add money from ${bank} time ${new Date}`)
            return;
        }
    }

})
