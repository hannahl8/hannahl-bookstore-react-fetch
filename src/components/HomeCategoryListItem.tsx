import {CategoryItem} from "../types";
import {getSlug} from "../utils";
import {categoryImagePrefix} from "../utils";
import {Link} from "react-router-dom";
import "./HomeCategoryListItem.css";

export default function HomeCategoryListItem(props: {
    category: CategoryItem;
}) {
    const categoryImageFilename = `${getSlug(props.category.name)}.jpg`;

    return (
        <Link to={`/category/${props.category.name}`}>
            <img
                src={`${categoryImagePrefix}${categoryImageFilename}`}
                alt={props.category.name}
            />
            <div className="overlay">{props.category.name}</div>
        </Link>
    );
}
