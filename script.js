let price = 19.5;
let cid = [["PENNY", 1.00], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

const cashInput = document.getElementById('cash');
const purchaseButton = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.10],
      ["QUARTER", 0.25],
      ["ONE", 1.00],
      ["FIVE", 5.00],
      ["TEN", 10.00],
      ["TWENTY", 20.00],
      ["ONE HUNDRED", 100.00]
    ];

    let changeNeeded = cash - price
    const totalCID = cid.reduce((sum, drawerCash) => sum += drawerCash[1], 0)
    const changeArray = []


    if(totalCID < changeNeeded ){
        changeDue.innerText = `Status: INSUFFICIENT_FUNDS`
        return
    }

    if(totalCID === changeNeeded){
        const tempChange = cid
        .filter(c => c[1] > 0)
        .map(c => `${c[0]}: $${c[1].toFixed(2)}`)
        .join(" ");

        changeDue.innerText = `Status: CLOSED ${tempChange}`
        return
    }

    for(let i = currencyUnit.length - 1; i>= 0; i--){
        let currencyName = currencyUnit[i][0]
        let currencyValue = currencyUnit[i][1]
        let cashInDrawer = cid[i][1]
        let amountToReturn = 0

        console.log(cashInDrawer)

        while(changeNeeded >= currencyValue && cashInDrawer > 0){
            changeNeeded -= currencyValue
            changeNeeded = parseFloat(changeNeeded.toFixed(2));
            cashInDrawer -= currencyValue
            amountToReturn += currencyValue
            amountToReturn = parseFloat(amountToReturn.toFixed(2));
        }

        if(amountToReturn > 0){
            changeArray.push([`${currencyName}: `, `$${amountToReturn}`].join(" "))
        }
    }

    if (changeNeeded > 0) {
        changeDue.innerText = `Status: INSUFFICIENT_FUNDS`
        return
    }

    changeDue.innerText = `Status: OPEN ${changeArray.join(" ")}`
}  

purchaseButton.addEventListener("click", () => {
    const cashValue = parseFloat(cashInput.value);

    if(cashValue < price) {
        alert("Customer does not have enough money to purchase the item")
        return
    }

    if(cashValue == price) {
       changeDue.textContent = "No change due - customer paid with exact cash"
       return
    }

    checkCashRegister(price, cashValue, cid)
})
