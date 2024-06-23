import HomeCategoryListItem from "./HomeCategoryListItem";
import "./HomeCategoryList.css";
import { CategoryProps} from "../types.ts";

export default function HomeCategoryList(props: CategoryProps) {
    const firstFourCategories = props.categories.slice(0, 4);
    const categoryImageLinks = firstFourCategories.map((myCategory) => (
        <li key={myCategory.categoryId}>
            <HomeCategoryListItem category={myCategory}/>
        </li>
    ));
    return <div className="category-image-items"><ul>{categoryImageLinks}</ul></div>;
}
