import Categoryitem from "../category-item/category-item";
import "./container.styles.scss";
import { categories } from "./categories";
const Categorymenu = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Categoryitem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categorymenu;
