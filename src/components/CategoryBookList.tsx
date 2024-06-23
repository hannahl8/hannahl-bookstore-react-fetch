// import types

import {useParams} from "react-router-dom";
import {getBooksForCategory} from "../data";
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookLIstItem";
import {BookItem, CategoryItem} from "../types";
import { getCategories } from "../data";

export default function CategoryBookList() {
    const {categoryName} = useParams();

    const bookList: BookItem[] = getBooksForCategory(categoryName as string);

    const categories: CategoryItem[] = getCategories();

    const bookBoxList = bookList.map((myBook) => (
        <CategoryBookListItem book={myBook} categories={categories}/>
    ));
    return <section className="category-book-list"><ul id="book-boxes">{bookBoxList}</ul></section>;
}
