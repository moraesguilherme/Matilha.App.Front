import React from "react";
import CustomSidebar from '../components/CustomSidebar';
import Dashboard from '../components/Dashboard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <CustomSidebar />
      <div className="main-container">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;