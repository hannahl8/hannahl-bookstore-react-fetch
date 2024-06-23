import { NavLink } from "react-router-dom";
import {CategoryProps} from "../types.ts";
export default function CategoryNavLinks(props: CategoryProps) {
  // const categoryList = getCategories();
  const categoryNavLinks = props.categories.map((category) => (
    <li key={category.categoryId}>
      <NavLink to={`/category/${category.name}`}>{category.name} <i className={category?.icon}></i></NavLink>
    </li>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
