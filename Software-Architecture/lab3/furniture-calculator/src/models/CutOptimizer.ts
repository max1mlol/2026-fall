import { Material } from "./Material"
export class CutOptimizer {
    static optimizeCutting(material: Material, items: { width: number, height: number }[]): boolean{
        let totalUsedArea = 0;
        items.forEach(item => {
            totalUsedArea += item.width * item.height;
        });
        return totalUsedArea <= material.getTotalArea();
    }
}