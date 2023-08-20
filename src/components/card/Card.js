import React, { useState, useEffect } from "react";
import world from "./world.jpg";
import "./Card.css";
const Card = ({ isLogin }) => {
  const [card, setCard] = useState();

  const defautcreateCard = () => {
    const defaultRowCount = 4;
    const newRows = [];
    for (let i = 0; i < defaultRowCount; i++) {
      const newRow = {
        id: i + 1,
      };
      newRows.push(newRow);
    }

    setCard(newRows);
  };
  const addToDeals = () => {
    if (isLogin) {
      alert("Now You can add the deals");
    } else {
      alert("Please login for add the deals");
    }
  };
  const checkDetails = () => {
    if (isLogin) {
      alert("Now You can check the details");
    } else {
      alert("Please login for check the details");
    }
  };
  useEffect(() => {
    defautcreateCard();
  }, []);
  return (
    <div className="container top_cards">
      <div className="row">
        {card?.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card">
              <img src={world} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="deals_btn">
                  <a className="btn btn-primary" onClick={addToDeals}>
                    Add to Deals
                  </a>
                  <a className="btn btn-primary" onClick={checkDetails}>
                    Check Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
