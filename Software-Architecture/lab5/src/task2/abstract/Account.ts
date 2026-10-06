export abstract class Account {
    constructor(
        protected accountNumber: string,
        protected owner: string,
        protected balance: number
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Байршуулах мөнгөн дүн 0-ээс их байх ёстой.");
            return;
        }
        this.balance += amount;
        console.log(`[${this.accountNumber}] ${amount}₮ амжилттай байршууллаа. Одоогийн үлдэгдэл: ${this.balance}₮`);
    }

    abstract withdraw(amount: number): void;

    getAccountInfo(): string {
        return `Дансны дугаар: ${this.accountNumber} | Эзэмшигч: ${this.owner} | Үлдэгдэл: ${this.balance}₮`;
    }

    checkBalance(): number {
        console.log(`[${this.accountNumber}] Үлдэгдэл: ${this.balance}₮`);
        return this.balance;
    }
}
