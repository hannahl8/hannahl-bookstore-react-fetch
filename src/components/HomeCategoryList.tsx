import {getCategories} from "../data";
import HomeCategoryListItem from "./HomeCategoryListItem";
import "./HomeCategoryList.css";

export default function HomeCategoryList() {
    const categoryList = getCategories();
    const firstFourCategories = categoryList.slice(0, 4);
    const categoryImageLinks = firstFourCategories.map((myCategory) => (
        <li key={myCategory.categoryId}>
            <HomeCategoryListItem category={myCategory}/>
        </li>
    ));
    return <div className="category-image-items"><ul>{categoryImageLinks}</ul></div>;
}
