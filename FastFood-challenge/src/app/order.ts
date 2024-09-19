export class Order {
    
    number: number;
    name: string;
    description: string;
    date: Date;

    constructor(name: string, descripcion: string){
        this.number = Math.floor(Math.random() * 1000) + 1;
        this.name = name;
        this.description = descripcion;
        this.date = new Date();
    }

}
