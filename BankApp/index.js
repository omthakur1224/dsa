const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Withdrawal of ${amount} successful`;
      } else {
        return "Insufficient balance";
      }
    }
  };
  
  // Call deposit method with amount of 500
  bankAccount.deposit(500);
  
  // Call withdraw method with amount of 200
  const withdrawalMessage = bankAccount.withdraw(200);
  
  // Log the resulting balance and withdrawal message
  console.log(`New balance: ${bankAccount.balance}`);
  console.log(`Withdrawal message: ${withdrawalMessage}`);
  bankAccount.deposit(2000);
  console.log(`New balance: ${bankAccount.balance}`);
  let x=bankAccount.withdraw(15000);
  console.log(`Withdrawal message: ${x}`);
  console.log(`New balance: ${bankAccount.balance}`);