import React, { useState } from "react";

import Header from "../Commons/header";
import LeftNavigation from "../Commons/left-navigation";
import MainContent from "./main-content";
import Businesses from "./businesses";
import Reviews from "./reviews"
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("businesses");

  const setMenu = (name) => {
    setActiveMenu(name);
  };
  return (
    <>
      <Header />

      <div className="display">
        <LeftNavigation setMenu={setMenu} />

        {activeMenu === "main" && <MainContent setMenu={setMenu} />}
        {activeMenu === "businesses" && <Businesses setMenu={setMenu} />}
        {activeMenu === "reviews" && <Reviews setMenu={setMenu} />}

      </div>
    </>
  );
};
export default Dashboard;
