export interface TaxRequest2023 {
    workedDays: number;
    totalIncome: number;
}

export interface TaxRequest2024 {
    dailyIncome: number;
}

export class TaxCalculator {
    /**
     * Татвар2023:
     * - 300-аас дээш хоног ажилласан бол нийт орлогын 15%
     * - Доош бол 10%
     */
    public static calculateTax2023(data: TaxRequest2023): number {
        const { workedDays, totalIncome } = data;
        const rate = workedDays > 300 ? 0.15 : 0.10;
        return totalIncome * rate;
    }

    /**
     * Татвар2024:
     * - Нэг өдрийн орлого > 20000 бол 10% аваад 365 хоногоор үржүүлнэ
     * - <= 20000 бол 5% аваад 365-аар үржүүлнэ
     */
    public static calculateTax2024(data: TaxRequest2024): number {
        const { dailyIncome } = data;
        const rate = dailyIncome > 20000 ? 0.10 : 0.05;
        return (dailyIncome * rate) * 365;
    }
}

