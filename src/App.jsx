import Header from "./Components/Header";
import Entry from "./Components/Entry";
import data from "../data/data"

export default function App () {
  const dataArr = data.map((data)=>{
    return <Entry 
    key = {data.id}
    data = {data}


    // img = {data.img.src}
    // alt = {data.img.alt}
    // country = {data.country}
    // title = {data.title}
    // text = {data.text}
    // googleMaps = {data.googleMapsLink}
    // dates = {data.dates}
    />
  })

  return <>
    <Header />
    <main className="container">
      {dataArr}
    </main>
  </>

}