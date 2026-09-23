import { CostCalculator } from "./CostCalculator";
import { Furniture } from "./Furniture";
export class ProfitEstimator {
    static estimateProfit(
        furnitureList: Furniture[],
        sellingPricePerUnit: number,
        durationInMonths: number
    ): number {
        let totalCost = CostCalculator.calculateTotalCost(furnitureList);
        let totalRevenue = furnitureList.length * sellingPricePerUnit;
        let profit = totalRevenue - totalCost;
        //Ashig hugatsaanaas hamaaraltaigaar usuh
        let growthFactor = 1 + durationInMonths * 0.02; //Sar bur 2%-iar usuh
        return profit * growthFactor;
    }
}