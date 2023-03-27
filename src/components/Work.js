import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
         {/*Mapping through each object in the WorkCardData array and rendering a WorkCard component for each object*/}
         {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard 
                key={ind}
                //assigning for the project card
                imgsrc={val.imgsrc} 
                title={val.title}
                text={val.text}
                view={val.view}
                url={val.url}
            />
            );
         })}
        </div>
    </div>
   
  );
};

export default Work;