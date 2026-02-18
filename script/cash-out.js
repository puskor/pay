const balanceInput = document.getElementById("balance");

document.getElementById("cash_out_btn").addEventListener("click", function () {
    const balance = parseInt(balanceInput.innerText);
    const agentNumber = getValue("agent_number");
    const amount = getValue("amount");
    const pin = getValue("pin");



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


            const container = document.getElementById("container");

            const history = document.createElement("div");
            history.innerHTML = `
            <div class="navbar bg-base-100 border-1 border-gray-300 rounded-xl flex justify-between">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-gray-100">
                            <img src="assets/opt-2.png" alt="">
                        </div>
                        <div class="pl-3">
                            <h1 id="nameT" class="text-[18px] font-extrabold">Cash out : ${amount}</h1>
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

            setNull("agent_number");
            setNull("amount");
            setNull("pin");
            alert(`success to cash out amount : ${amount}`);
            return;
        }
    }

})

