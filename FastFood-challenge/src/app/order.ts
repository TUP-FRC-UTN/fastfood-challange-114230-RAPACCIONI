export class Order {
    
    name: string;
    description: string;
    number: number;
    date: Date;

    constructor(name: string, descripcion: string){
        this.name = name;
        this.description = descripcion;
        this.number = Math.floor(Math.random() * 1000) + 1;
        this.date = new Date();
    }

}
