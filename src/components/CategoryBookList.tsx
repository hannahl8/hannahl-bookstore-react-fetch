// import types

import {useParams} from "react-router-dom";
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookLIstItem";
import {CategoryProps} from "../types";
import {useEffect, useState} from "react";
import axios from "axios";
import {apiUrl} from "../utils.ts";

export default function CategoryBookList(props: CategoryProps) {

    const {categoryName} = useParams();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
            .then((result) => setBooks(result.data))
            .catch(console.error);
    }, [categoryName]);

    const bookBoxList = books.map((myBook) => (
        <CategoryBookListItem book={myBook} categories={props.categories}/>
    ));
    return <section className="category-book-list">
        <ul id="book-boxes">{bookBoxList}</ul>
    </section>;
}
