import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import Spinner from "../../components/spinner/Spinner";
import {
  selectCtegoriesIsLoading,
  selectCtegoriesMap,
} from "../../store/categories/categorySelector";

const CategoriesPreview = () => {
  const { categoriesMap } = useSelector(selectCtegoriesMap);
  const isLoading = useSelector(selectCtegoriesIsLoading);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
