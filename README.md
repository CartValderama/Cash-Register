# Cash Register

This is a JavaScript-based cash register project that calculates the change due from a transaction. It is part of FreeCodeCamp's certification requirements.

## Description

This project simulates a cash register that takes a purchase price and a payment amount as inputs and determines the change to be returned, if any. The cash register checks the available cash in the drawer (`cid`) and returns the appropriate change, or notifies if the drawer does not have enough cash to provide the correct change.

## How It Works

1. **Input Validation:** The system ensures that the customer has provided enough cash to cover the purchase price.
2. **Change Calculation:** Based on the cash in the drawer and the change needed, the register calculates the exact amount of change using the highest denominations first.
3. **Output Status:**
   - **INSUFFICIENT_FUNDS:** If the drawer doesn't have enough money to return the required change.
   - **CLOSED:** If the cash in the drawer equals the exact change needed.
   - **OPEN:** If the register can provide the correct change.
   - **Exact Payment:** If the customer pays the exact amount, no change is returned.

## Usage

- Enter the amount of cash received from the customer.
- Click the "Pay" button to calculate the change due.
- The result will display whether the transaction is successful, if more funds are needed, or if no change is due.
