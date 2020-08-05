export class Product {
    public name: string;
    public specifications: string;
    public photo: string;

    constructor(name: string, specifications: string, photo: string) {
        this.name = name;
        this.specifications = specifications;
        this.photo = photo;
    }
}