import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCategoriesMap } from "../../store/categories/categoryAction";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

const Shop = () => {
  const dispatch = useDispatch();
  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    dispatch(setCategoriesMap(categoryMap));
  };

  useEffect(() => getCategoriesMap(), []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
