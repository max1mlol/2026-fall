export class Material {
    constructor(
        public name: string, 
        public pricePerUnit: number, //1 negj materialiin une
        public width: number, //Materialiin urgun
        public height: number //Materialiin undur
    
    ){}
    getTotalArea(): number{
        return this.width * this.height;
    }
}