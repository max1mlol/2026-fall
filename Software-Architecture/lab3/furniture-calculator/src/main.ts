import { Material } from "./models/Material";
import { Chair, Table } from "./models/Furniture";
import { CutOptimizer } from "./models/CutOptimizer";
import { CostCalculator } from "./models/CostCalculator";
import { ProfitEstimator } from "./models/ProfitEstimator";

//Material uusgeh
const wood = new Material("Mod", 5000, 200, 100); //Materialiin ner, une, urgun, undur
//Sandal bolon shiree uusgeh
const chair1 = new Chair("Sandal", wood, 40, 40);
const chair2 = new Chair("Sandal", wood, 45, 45);
const table1 = new Table("Shiree", wood, 120, 60);

//Materialiin zuseltiig onovchloh
const isOptimized = CutOptimizer.optimizeCutting(wood, [
    {width: chair1.requiredWidth, height: chair1.requiredHeight},
    {width: chair2.requiredWidth, height: chair2.requiredHeight},
    {width: table1. requiredWidth, height: table1.requiredHeight},
]);

console.log(`Material onovchtoi zussen uu? ${isOptimized ? "Tiim" : "Ugui"}`);
//Zardliin tootsoolol
const totalCost = CostCalculator.calculateTotalCost([chair1, chair2, table1]);
console.log(`Niit zardal: ${totalCost}MNT`);

//Ashgiin tootsoo (1 sariin daraah)
const estimateProfit = ProfitEstimator.estimateProfit([chair1, chair2, table1], 15000, 1);
console.log(`1 sariin daraah borluulaltiin ashig: ${estimateProfit.toFixed(2)}MNT`);
