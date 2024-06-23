import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
import {CategoryProps} from "../types.ts";

export default function HeaderDropdown(props: CategoryProps) {
    return (
        <div className="header-dropdown">
            <button className="button"><i className="fa-solid fa-bars"></i> MENU</button>
            <CategoryNavLinks categories={props.categories}/>
        </div>
    );
}
