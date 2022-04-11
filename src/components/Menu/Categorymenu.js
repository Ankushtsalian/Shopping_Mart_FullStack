import Categoryitem from "../category-item/category-item";
import "./menu-container.styles.scss";
import { categories } from "./categories-JSON";
const Categorymenu = () => {
  return (
    <div className="categorie-container">
      {categories.map((category) => (
        <Categoryitem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categorymenu;
