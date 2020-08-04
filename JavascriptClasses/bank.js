class Bank {
    constructor() {
        this._Accounts = [];
        this._count = 0;
    }

    static nextNumber = 1000;

    addAccount() {
        this._count++;
        let number = Bank.nextNumber;
        this._Accounts.push(new Account(number));        
        ++Bank.nextNumber;
        return number;
    }

    addSavingsAccount(interest) {
        this._count++;
        let number = Bank.nextNumber;
        this._Accounts.push(new SavingsAccount(Bank.nextNumber, interest));
        ++Bank.nextNumber;
        return number;
    }

    addCheckingAccount(overdraft) {
        this._count++;
        let number = Bank.nextNumber;
        this._Accounts.push(new CheckingAccount(Bank.nextNumber, overdraft));
        ++Bank.nextNumber;        
        return number;
    }
    accountReport() {
        this._Accounts.forEach((acc) => console.log(acc.toString()));
    }
    closeAccount(number) {
        this._Accounts.splice(this._Accounts.findIndex((acc) => acc._number === number), 1);
        --this._count;
    }

    getAccountByNumber(number) {        
        return this._Accounts.find((acc) => acc._number === number);
    }
    endOfMonth() {
        let EOMStr = ''
        this._Accounts.forEach((acc) => { EOMStr += acc.endOfMonth() + ".  " });
        console.log(EOMStr);
        return EOMStr;
        
    }
}