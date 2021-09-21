import React from "react";
import { Person } from "../../Components";
import { useSelector } from "react-redux";
import "./Main.css";
const Main = () => {
  const people = useSelector((state) => state.people);
  return (
    <div className="main">
      <div className="main__top">
        <h1>Search Results</h1>
        <small className="main__number_of_results">
          {people?.length} results
        </small>
      </div>
      <div className="main__results">
        {people?.length === 0 ? (
          <div className="main__nopeople">
            <h1>Opps!!, No results found.</h1>
            <img
              src="https://lh3.googleusercontent.com/proxy/g2FQnsZWSoDRIkpuc2OvBxFA-rqONxmNIC7yWWPHwjO94cLH0mQgAvZdlTF0LKSCZpS0hsYWCii7iPPM_xFisaaIDfWr4y-rWDOB4Sjfnd2NMWuOs-HWLeVpYR1OT8W7"
              alt="no results found"
            />
          </div>
        ) : (
          people?.map((person, index) => {
            return <Person person={person} key={index} />;
          })
        )}
      </div>
    </div>
  );
};

export default Main;
