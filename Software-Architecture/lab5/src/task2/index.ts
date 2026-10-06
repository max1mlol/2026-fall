import { SavingsAccount } from "./accounts/SavingsAccount";
import { CheckingAccount } from "./accounts/CheckingAccount";

console.log("=== БАНКНЫ СИСТЕМ ТЕСТ ===\n");

// 1. Create accounts
const savings = new SavingsAccount("SA1001", "Болд", 5000);
const checking = new CheckingAccount("CA2001", "Сүрэн", 2000, 3000);

// 2. Get Account Info
console.log("--- 1. Дансны мэдээлэл авах ---");
console.log(savings.getAccountInfo());
console.log(checking.getAccountInfo());
console.log();

// 3. Check Balance
console.log("--- 2. Үлдэгдэл шалгах ---");
savings.checkBalance();
checking.checkBalance();
console.log();

// 4. Deposit
console.log("--- 3. Мөнгө байршуулах ---");
savings.deposit(2000);
checking.deposit(1000);
console.log();

// 5. Withdraw
console.log("--- 4. Мөнгө зарлагадах ---");
savings.withdraw(5500); // Pass
savings.withdraw(1000); // Fail

checking.withdraw(2500); // Pass
checking.withdraw(2000); // Pass (Overdraft)
checking.withdraw(5000); // Fail
console.log();

// 6. Calculate Interest (SavingsAccount)
console.log("--- 5. Жилийн хүү тооцох ---");
savings.calculateInterest(8);
console.log();

// 7. Check Overdraft Limit (CheckingAccount)
console.log("--- 6. Зээлийн хязгаар шалгах ---");
checking.checkOverdraftLimit();
