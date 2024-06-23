import {BookItem, CategoryItem} from "../types";
import {getSlug, bookImagePrefix} from "../utils";
import "./CategoryBookListItem.css";

export default function CategoryBookListItem(props: { book: BookItem, categories: CategoryItem[] }) {
    const bookImageFileName = `${getSlug(props.book.title)}.jpg`;
    const category = props.categories.find((category) => category.categoryId === props.book.categoryId);
    return (
        <li className="book-box">
            <div className="book-title" title={props.book.title}>{props.book.title}</div>
            <div className="book-author">{props.book.author}</div>
            <div className="book-price">${(props.book.price / 100).toFixed(2)}</div>
            {props.book.isPublic && (
                <a className="book-open"><i className="fa-brands fa-readme"></i></a>
            )}

            <div className="book-image">
                <a href="#">
                    <img
                        src={`${bookImagePrefix}${bookImageFileName}`}
                        alt={props.book.title}
                    />
                </a>
            </div>
            <p className="book-quote" title={props.book.quote}><i className={category?.icon}></i> - {props.book.quote}</p>
            <button className="primary-button"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </li>
    );
}
