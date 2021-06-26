import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [tabs,setTabs] = useState([]);
  const [tabNo,setTabNo] = useState(0);

  const fetchTabs = async () => {
    const responses = await fetch(url);
    const newTabs = await responses.json();
    setIsLoading(false);
    setTabs(newTabs);
  }
  useEffect(()=>{
    fetchTabs();
  },[]);

  if(isLoading){
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }
  
  // console.log(tabs);
  const { company, dates, duties, title } = tabs[0];
  
  return (
    <section className="section">

      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">

        <div className="btn-container">
          {
            tabs.map((item,index)=>{
              return (
                <button key={item.id} onClick={()=>setTabNo(index)} className={`job-btn ${index===tabNo && "active-btn"}`}>{item.company}</button>
              );
            })
          }
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-data">{dates}</p>
          {
            duties.map((duty,index)=>{
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"/>
                  <p>{duty}</p>
                </div>
              );
            })
          }
        </article>

      </div>

    </section>
  )
}

export default App
