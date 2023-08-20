import React from "react";
import Card from "../card/Card";
const Home = ({ isLogin }) => {
  return (
    <div>
      <Card isLogin={isLogin} />
    </div>
  );
};

export default Home;
