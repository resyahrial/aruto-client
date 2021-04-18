import React, { useEffect } from "react";
import "../assets/style/style.css";
import { fetchCategories } from "../redux/actions/categories";
import { useSelector, useDispatch } from "react-redux";


export default function Category() {
  const dispatch = useDispatch()
  const { categories, isLoading, error } = useSelector(state => state.categories)
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  if(isLoading) <h1>Loading</h1>
  if(error) <h1>error</h1>
  return (
    <div className="mt-content">
      <h3 className="font-weight-bold">Categories</h3>
      <div className="row mt-5  justify-content-between">
        {
          categories?.map(category => {
            return(
              <div key={category._id} className="col-3 justify-content-center d-flex px-0 position-relative">
              <img
                className="w-75"
                src={category.image_url}
                alt=""
              />
              <h5 className="text-white position-absolute font-weight-bold center-absolute my-0">
                {category.title}
              </h5>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}
