import "./HeaderDropdown.css";
import "./CategoryNav.css";
import CategoryNavLinks from "./CategoryNavLinks.tsx";
import {CategoryProps} from "../types.ts";

export default function CategoryNav(props: CategoryProps) {
    return (
        <div className="category-nav">
            <CategoryNavLinks categories={props.categories}/>
        </div>
    );
}