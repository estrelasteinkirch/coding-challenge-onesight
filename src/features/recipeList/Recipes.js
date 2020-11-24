import { useSelector, useDispatch } from "react-redux";
import { saveCategoriesAsync, selectCategories } from "./categoriesSlice";
import Select from "react-select";
import { useEffect } from "react";

export default function Recipes() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCategoriesAsync());
  }, [categories, dispatch]);

  return (
    <div>
      <Select options={categories} />
    </div>
  );
}
