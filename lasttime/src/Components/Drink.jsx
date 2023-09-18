import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Topcurve from "./Topcurve";
import Bottomcurve from "./BottomCurve";
import { softDrink } from "../models/softdrink";
import { Cocktails } from "../models/cocktails";
import "../styles/salads.css";

const Drink = () => {
  return (
    <>

      <div className="margin-top">
        <Topcurve name={"SALADS"} />
        <div className="card-wrapper">
          {Cocktails?.map((items, index) => {
            const { image, title, description } = items;
            return (
              <div key={index}>
                <div className="card-container">
                  <img src={image} alt={"cooktails "} className="main-image" />
                  <AiOutlinePlusCircle className="plus-circle-icon" />
                </div>

                <h2 className="heading">{title}</h2>
                <p className="description">{description}</p>
              </div>
            );
          })}
        </div>
        <Bottomcurve />

        <br />
        <br />
        <br />
        <br />
        <div className="divider"></div>
        <Topcurve name={"SALADS"} />
        <div className="card-wrapper">
          {softDrink?.map((items, index) => {
            const { image, title, description } = items;
            return (
              <div key={index}>
                <div className="card-container">
                  <img src={image} alt={"softDrink"} className="main-image" />

                  <AiOutlinePlusCircle className="plus-circle-icon" />
                </div>

                <h2 className="heading">{title}</h2>
                <p className="description">{description}</p>
              </div>
            );
          })}
        </div>
        <Bottomcurve />
      </div>
    </>
  );
};

export default Drink;
