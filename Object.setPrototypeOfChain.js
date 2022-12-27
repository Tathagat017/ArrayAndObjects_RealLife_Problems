// use  Object.setPrototypeOf to re-use the same print function for all the objects created using the factory function.

let ob_prime = {
  print: function () {
    console.log(
      "Name: ",
      this.name,
      "Type: ",
      this.type,
      "Active: ",
      this.active,
      "Bal: ",
      this.balance
    );
  },
};

function createAccount(accountName, accountType, accountBalance, isActive) {
  let account = {
    name: accountName,
    type: accountType,
    balance: accountBalance,
    active: isActive,
  };
  Object.setPrototypeOf(account, ob_prime);
  return account;
}

const acc1 = createAccount("Vivek", "Saving", 100000, true);

acc1.print();

const acc2 = createAccount("Akash", "Premium", 200000, true);
acc2.print();
