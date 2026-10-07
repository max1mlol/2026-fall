import { SavingsAccount } from "./accounts/SavingsAccount";
import { CheckingAccount } from "./accounts/CheckingAccount";

console.log("=== БАНКНЫ СИСТЕМ ТЕСТ ===\n");

const savings = new SavingsAccount("SA1001", "Болд", 5000);
const checking = new CheckingAccount("CA2001", "Сүрэн", 2000, 3000);

console.log("--- 1. Dansnii medeelel avakh ---");
console.log(savings.getAccountInfo());
console.log(checking.getAccountInfo());
console.log();

console.log("--- 2. Uldegdel shalgakh ---");
savings.checkBalance();
checking.checkBalance();
console.log();

console.log("--- 3. Mungu bairshuulakh ---");
savings.deposit(2000);
checking.deposit(1000);
console.log();

console.log("--- 4. Mungu zarlagadakh ---");
savings.withdraw(5500); 
savings.withdraw(1000); 

checking.withdraw(2500); 
checking.withdraw(2000);
checking.withdraw(5000);
console.log();

console.log("--- 5. Jiliin khuu tootsokh ---");
savings.calculateInterest(8);
console.log();

console.log("--- 6. Zeeliin hyzgaar shalgakh ---");
checking.checkOverdraftLimit();
