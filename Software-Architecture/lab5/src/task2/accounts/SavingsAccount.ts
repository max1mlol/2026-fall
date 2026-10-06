import { Account } from "../abstract/Account";

export class SavingsAccount extends Account {
    private readonly MIN_BALANCE = 1000;

    constructor(accountNumber: string, owner: string, balance: number) {
        super(accountNumber, owner, balance);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Зарлагадах дүн 0-ээс их байх ёстой.");
            return;
        }

        if (this.balance - amount < this.MIN_BALANCE) {
            console.log(`[Алдаа] ${this.accountNumber}: Дансанд хамгийн багадаа ${this.MIN_BALANCE}₮ үлдэх ёстой! (Одоогийн үлдэгдэл: ${this.balance}₮)`);
        } else {
            this.balance -= amount;
            console.log(`[${this.accountNumber}] ${amount}₮ зарлагадлаа. Үлдсэн: ${this.balance}₮`);
        }
    }

    calculateInterest(rate: number): number {
        const interest = (this.balance * rate) / 100;
        console.log(`[${this.accountNumber}] Жилийн хүү (${rate}%): ${interest}₮`);
        return interest;
    }
}
