export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    images: [];
    price: number;
    category: Category;
    description: string
}