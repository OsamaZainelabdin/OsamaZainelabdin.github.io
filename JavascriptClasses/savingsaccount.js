"use strict";
class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    } 

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        //deposits the interest amount into the account
        // The calculation for the amount is balance * interest / 100
        //alert(super.getBalance() + "  " + this._interest);
        let amount = super.getBalance() * this._interest / 100;
        //alert(super.getBalance() + "  " + this._interest + "  " + amount);
        super.deposit(amount);
        //alert(super.getBalance() + "  " + this._interest);
    }

    toString() {
        return "Savings Account Number: " + super.getNumber() + ", balance: $" + super.getBalance() + ", Interest " + this._interest + "%";
    }

    endOfMonth() {
        this.addInterest();
        return this.toString();
    }
}
