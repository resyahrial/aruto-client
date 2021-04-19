import React, { useEffect, useState } from "react";
import { fetchCategories } from "../redux/actions/categories";
import { fetchArt } from "../redux/actions/arts";
import { fetchUser } from "../redux/actions/users";
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

export default function Home() {
  const dispatch = useDispatch()
  const [ category, setCategory] = useState('')
  const { arts, isLoading, error } = useSelector(state => state.arts)
  const { categories } = useSelector(state => state.categories)
  const { users } = useSelector(state => state.users)
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchArt())
    dispatch(fetchUser())
  }, [dispatch])
  if(isLoading){
    return <h1>Loading</h1>
  }
  if(error){
    return <Error />
  }
  return (
    <div>
      <Banner />
      <div className="container">
        <BestArtist users={users} />
        <Category categories={categories} setCategory={(id) => setCategory(id)} /> 
        <ListDesign arts={arts} category={category} /> 
        <BestDesign arts={arts}/>   
      </div>
    </div>
  );
}
