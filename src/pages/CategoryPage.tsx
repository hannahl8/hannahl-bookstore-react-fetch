import CategoryNav from "../components/CategoryNav";
// import child components
import CategoryBookList from "../components/CategoryBookList";
import { CategoryProps} from "../types.ts";
export default function CategoryPage(props: CategoryProps) {
    return (
        <div className="category-page">
            <CategoryNav categories={props.categories}/>
            <CategoryBookList categories={props.categories}/>
        </div>
    );
}
