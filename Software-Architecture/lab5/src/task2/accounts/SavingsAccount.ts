import { Account } from "../abstract/Account";

export class SavingsAccount extends Account {
    private readonly MIN_BALANCE = 1000;

    constructor(accountNumber: string, owner: string, balance: number) {
        super(accountNumber, owner, balance);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Zarlagadakh dun 0-s ikh baikh ystoi.");
            return;
        }

        if (this.balance - amount < this.MIN_BALANCE) {
            console.log(`[Алдаа] ${this.accountNumber}: Dansand khamgiin bagadaa  ${this.MIN_BALANCE}₮ uldekh ystoi! (Odoogiin uldegdel: ${this.balance}₮)`);
        } else {
            this.balance -= amount;
            console.log(`[${this.accountNumber}] ${amount}₮ zarlagadlaa. Uldegdel: ${this.balance}₮`);
        }
    }

    calculateInterest(rate: number): number {
        const interest = (this.balance * rate) / 100;
        console.log(`[${this.accountNumber}] Jiliin khuu (${rate}%): ${interest}₮`);
        return interest;
    }
}
