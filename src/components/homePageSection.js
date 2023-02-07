import React from "react"
import HomePageCard from "./homePageCard"

const HomePageSection = ({ title, data }) => (
  <>
    <h2 className="font-raleway font-bold text-center m-10">{title}</h2>
    <div className="flex flex-wrap mx-auto justify-evenly mt-10 gap-10">
      {data.map((info, index) => (
        <HomePageCard key={index} info={info} />
      ))}
    </div>
  </>
)
export default HomePageSection
