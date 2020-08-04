let savingsAccount = new SavingsAccount(1,10);
let checkingAccount = new CheckingAccount(2,5000);
let bank = new Bank();

describe('Savings Account', function() {
  describe('Make Deposit', function() {
    it('savings account balance should return 9000 after deposit', function() {
        savingsAccount.deposit(10000);
      assert.equal(savingsAccount.getBalance(), 10000);
    });
  });
});

describe('Savings Account', function() {
  describe('Add Interest', function() {
    it('Savings Account balance should return 11000 after 10% interest appliance', function() {
        savingsAccount.addInterest();
      assert.equal(savingsAccount.getBalance(), 11000);
    });
  });
}); 

describe('Overdraft Account', function() {
  describe('Overdraft Limit', function() {
      it('Overdraft limit should be: 1000 ', function () {
          assert.equal(checkingAccount.getOverdraft(), 5000);
    });
  });
}); 

describe('Overdraft Account', function() {
  describe('Withdraw method', function() {
      it('Overdraft balance should be 1000 after withdrawing 4000', function () {
          checkingAccount.withdraw(4000);
          assert.equal(checkingAccount.getOverdraft(), 1000);
    });
  });
}); 

describe('Bank Class', function() {
  describe('Add New Accounts', function() {
    it('Should expect 1000 as the first Number of the AddAccount function', function() {
      assert.equal(bank.addAccount(), 1000);
    });
  });
});

describe('Bank Class', function() {
  describe('Add Savings Account', function() {
      it('Should expect 1001 as the second Number of the addSavingsAccount function', function() {
      assert.equal(bank.addSavingsAccount(10), 1001);
    });
  });
}); 

describe('Bank Class', function() {
  describe('Add Checking Account', function() {
      it('Should expect 1002 as the second Number of the AddCheckingAccount function', function() {
          assert.equal(bank.addCheckingAccount(5000), 1002);
    });
  });
}); 

describe('Bank Class', function() {
    describe('End of the Month', function () {
        let msg = 'Account EOM is N/A.  Added interest amount to saving account:10.  Checking Account EOM.  ';
        it(msg, function () {
        bank.getAccountByNumber(1001).deposit(1000);
        bank.getAccountByNumber(1002).withdraw(4000);
            
            assert.equal(bank.endOfMonth(), msg);
    });
  });
}); 

