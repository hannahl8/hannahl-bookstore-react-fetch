import {NavLink} from "react-router-dom";
import {CategoryProps} from "../types.ts";
import {icons} from "../utils.ts";

export default function CategoryNavLinks(props: CategoryProps) {
    const categoryNavLinks = props.categories.map((category) => {
        const icon = category.name in icons ? icons[category.name] : '';
        return (
            <li key={category.categoryId}>
                <NavLink to={`/category/${category.name}`}>{category.name} <i className={icon}></i></NavLink>
            </li>
        );
    });

    return <ul>{categoryNavLinks}</ul>;
}
