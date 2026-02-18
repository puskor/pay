function getValue(id){
    const valu = document.getElementById(id);
    const result = valu.value;
    return result;
}


function setNull(id){
    const item = document.getElementById(id);
    item.value = "";
    return item;
}

function tagText(id)
{
    const data = document.getElementById(id);
    return data;
}


function showOnly(id)
{
    const cashOut = document.getElementById("cash_out");
    const addMoney = document.getElementById("add_money");
    const history = document.getElementById("payment_list");
    cashOut.classList.add("hidden");
    addMoney.classList.add("hidden");
    history.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}