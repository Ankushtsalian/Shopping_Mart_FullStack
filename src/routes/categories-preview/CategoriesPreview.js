import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { selectCtegoriesMap } from "../../store/categories/categorySelector";

const CategoriesPreview = () => {
  const { categoriesMap } = useSelector(selectCtegoriesMap);

  return (
    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
