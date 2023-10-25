import React from "react";
import NavBar from "../components/Navbar";
import Banner from "../components/Banner";

const NoPage = () => {
    return <React.Fragment>
      <Banner />
      <NavBar />
      <h1>404</h1>
    </React.Fragment>;
  };
  
  export default NoPage;