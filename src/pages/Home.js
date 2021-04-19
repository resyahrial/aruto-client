import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "./Error";

import {
  Banner,
  BestArtist,
  Category,
  ListDesign,
  BestDesign,
} from "../components";
import "../assets/style/style.css";
import { fetchCategories } from "../redux/actions/categories";
import { fetchArt } from "../redux/actions/arts";

export default function Home() {
  const [category, setCategory] = useState("");
  const { data, isLoading, error } = useSelector((state) => state.arts);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchArt());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <Banner />
      <div className="container">
        {/* <BestArtist users={users} /> */}
        <Category
          categories={categories}
          setCategory={(id) => setCategory(id)}
        />
        <ListDesign arts={data} category={category} />
        <BestDesign arts={data} />
      </div>
    </div>
  );
}
