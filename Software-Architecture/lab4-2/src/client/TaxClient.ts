export class TaxClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async calculate2023(workedDays: number, totalIncome: number): Promise<number> {
        const response = await fetch(`${this.baseUrl}/api/tax/2023`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ workedDays, totalIncome })
        });
        const result = (await response.json()) as { tax: number };
        return result.tax;
    }

    public async calculate2024(dailyIncome: number): Promise<number> {
        const response = await fetch(`${this.baseUrl}/api/tax/2024`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dailyIncome })
        });
        const result = (await response.json()) as { tax: number };
        return result.tax;
    }
}

async function run() {
    const client = new TaxClient('http://localhost:3000');

    const tax2023 = await client.calculate2023(320, 10000000);
    console.log(`[Client Output] 2023 Tax: ${tax2023} MNT`);

    const tax2024 = await client.calculate2024(25000);
    console.log(`[Client Output] 2024 Tax: ${tax2024} MNT`);
}

run().catch(console.error);