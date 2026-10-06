import { Account } from "../abstract/Account";

export class CheckingAccount extends Account {
    constructor(
        accountNumber: string,
        owner: string,
        balance: number,
        public overdraftLimit: number
    ) {
        super(accountNumber, owner, balance);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Зарлагадах дүн 0-ээс их байх ёстой.");
            return;
        }

        const maxLimit = this.balance + this.overdraftLimit;

        if (amount > maxLimit) {
            console.log(`[Алдаа] ${this.accountNumber}: Зээлийн хязгаарт хүрэхгүй байна. Боломжит дээд дүн: ${maxLimit}₮`);
        } else {
            this.balance -= amount;
            console.log(`[${this.accountNumber}] ${amount}₮ зарлагадлаа. Шинэ үлдэгдэл: ${this.balance}₮`);
        }
    }

    checkOverdraftLimit(): void {
        console.log(`[${this.accountNumber}] Зээлийн хязгаар (Overdraft Limit): ${this.overdraftLimit}₮`);
    }
}
