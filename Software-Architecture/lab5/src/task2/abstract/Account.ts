export abstract class Account {
    constructor(
        protected accountNumber: string,
        protected owner: string,
        protected balance: number
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Bairshuulakh mungun tun 0-s ikh baikh ystoi.");
            return;
        }
        this.balance += amount;
        console.log(`[${this.accountNumber}] ${amount}₮ amjilttai bairluulla. Odoogiin uldegdel: ${this.balance}₮`);
    }

    abstract withdraw(amount: number): void;

    getAccountInfo(): string {
        return `Dansnii dugaar: ${this.accountNumber} | Ezemshigch: ${this.owner} | Uldegdel: ${this.balance}₮`;
    }

    checkBalance(): number {
        console.log(`[${this.accountNumber}] Uldegdel: ${this.balance}₮`);
        return this.balance;
    }
}
