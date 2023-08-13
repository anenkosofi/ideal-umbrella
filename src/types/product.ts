export interface Product {
    _id: string;
    name: string;
    image: string;
    category: string;
    description: {
        s: string;
        l: string;
    };
    rating: number;
    price: number;
    discount: number;
    additional: string;
}
