import React from "react";
import Categori from '../components/Categori'
import BestArtist from '../components/BestArtist'
import ListDesign from '../components/LIstDesign'
import BestDesign from '../components/BestDesign'
import Banner from '../components/Banner'
import '../assets/style/style.css'

export default function Home() {
  return (
  <div>
    <Banner />
    <div className="container">
    <BestArtist />
    <Categori />
    <ListDesign />
    <BestDesign/>
  </div>
  </div>
  )
}
