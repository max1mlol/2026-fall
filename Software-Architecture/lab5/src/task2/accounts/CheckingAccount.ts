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
            console.log("Zarlagadakh dun 0-s ikh baikh ystoi.");
            return;
        }

        const maxLimit = this.balance + this.overdraftLimit;

        if (amount > maxLimit) {
            console.log(`[Aldaa] ${this.accountNumber}: Zeeliin hyzgaar hurehgui baina. Bolomjit deed dun: ${maxLimit}₮`);
        } else {
            this.balance -= amount;
            console.log(`[${this.accountNumber}] ${amount}₮ zarlagadlaa. Shine uldegdel: ${this.balance}₮`);
        }
    }

    checkOverdraftLimit(): void {
        console.log(`[${this.accountNumber}] Zeeliin hyzgaar: ${this.overdraftLimit}₮`);
    }
}
