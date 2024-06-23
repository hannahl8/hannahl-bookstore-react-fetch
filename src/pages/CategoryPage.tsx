import CategoryNav from "../components/CategoryNav";
// import child components
import CategoryBookList from "../components/CategoryBookList";
import { CategoryProps} from "../types.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {apiUrl} from "../utils.ts";
// import CSS style file (note: no styles for this page)
// export component function
export default function CategoryPage(props: CategoryProps) {

    const {categoryName} = useParams ();

    useEffect(() => {
        axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
            .then((result) => console.log(result.data))
            .catch(console.error);
    }, [categoryName]);

    return (
        <div className="category-page">
            <CategoryNav categories={props.categories}/>
            <CategoryBookList/>
        </div>
    );
}
