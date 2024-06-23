export interface CategoryItem {
    categoryId: number;
    name: string;
}

export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    description?: string;
    price: number;
    rating?: number;
    isPublic: boolean;
    isFeatured?: boolean;
    categoryId: number;
}

export interface CategoryProps {
    categories: CategoryItem[];
}
