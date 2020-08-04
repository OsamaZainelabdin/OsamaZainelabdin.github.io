"use strict";
class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraft  = overdraftLimit;
    } 
    getOverdraft() {
        return this._overdraft ;
    }

    setOverdraft(amount) {
        this._overdraft = amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (super.getBalance() < -this._overdraft) {
            throw Error("Insufficient funds, you've excedded your overdraft limit!");
        }        
        this._overdraft -= amount;       
    }

   
    toString() {
        return "Checking Account: " + super.getNumber() + ", balance: " + super.getBalance() + ", Overdraft Limit: " + this._overdraft ;
    }

    endOfMonth() {
        if (super.getBalance() < 0) {
            return "Warning, low CheckingAccount " + super.getNumber() + ": balance: " + super.getBalance() + " overdraft limit: " + this._overdraft;
        }
        return "Checking Account EOM";
    }
}
