import React, { useState, useEffect } from "react";
import Header from "../Commons/header";
import getDate from "../../utilities/get-date";
import BusinessService from "../../services/business.service";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);
  const [colors] = useState([
    "color-pink",
    "color-blue",
    "color-light-blue",
    "color-yellow",
    "color-brown",
    "color-purple",
  ]);
  const loadBusinesses = async () => {
    const result = await BusinessService.findAllBusinesses();
    if (result.data && result.data) {
      setBusinesses(result.data["businesss"]);

      console.log("businesses", result.data["businesss"]);
    }
  };

  const previewBusiness = () => {
      
  }
  useEffect(() => {
    loadBusinesses();
  }, []);
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="home-page__title">
          <h2 className="home-page__title__heading">Featured Businesses</h2>
          <h2 className="home-page__title__sub-heading">
            Discover businesses and find out what people are talking about them
          </h2>
        </div>
        <div className="home-page__posts">
          {businesses.map((business, index) => (
            <div className="home-page__posts__post">
              <div className="home-page__posts__post__top">
                <figure
                  className={`home-page__posts__post__icon ${colors[index]}`}
                >
                  {business.businessName[0].toUpperCase()}
                </figure>
                <span className="home-page__posts__post__title">
                  <span className="home-page__posts__post__title__date">
                    {getDate(business.date)}
                  </span>
                  <span className="home-page__posts__post__title__title">
                    {business.businessName}
                  </span>
                </span>
              </div>
              <div className="home-page__posts__post__bottom">
                <button className="btn btn--publish" onClick={previewBusiness}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
