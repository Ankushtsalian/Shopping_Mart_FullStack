import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { selectCtegoriesMap } from "../../store/categories/categorySelector";

import "./category.styles.scss";
const Category = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const { categoriesMap } = useSelector(selectCtegoriesMap);

  const { category } = useParams();
  // const [products, setProducts] = useState(categoriesMap[category]);

  const products = categoriesMap[category];

  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [categoriesMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
