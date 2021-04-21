import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Banner, Category, ListDesign, BestDesign } from "../components";
import "../assets/style/style.css";
import { fetchCategories } from "../redux/actions/categories";
import { fetchArt } from "../redux/actions/arts";

export default function Home() {
  const [category, setCategory] = useState("");
  const arts = useSelector((state) => state.arts);
  const dataCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchArt());
  }, []);

  if (arts.search !== "") {
    return (
      <div>
        <ListDesign arts={arts} category={category} />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div className="container">
        <Category
          dataCategories={dataCategories}
          setCategory={(id) => setCategory(id)}
        />
        <ListDesign arts={arts} category={category} />
        <BestDesign arts={arts} />
      </div>
    </div>
  );
}
