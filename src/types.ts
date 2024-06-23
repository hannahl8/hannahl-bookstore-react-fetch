export interface CategoryItem {
    categoryId: number;
    name: string;
    icon?: string;
}

export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    price: number;
    isPublic: boolean;
    quote: string;
    categoryId: number;
}

export interface CategoryProps {
    categories: CategoryItem[];
}
