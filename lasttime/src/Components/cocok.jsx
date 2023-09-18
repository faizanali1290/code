import { AiOutlinePlusCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { salads } from "../models/salads";
import { burger } from "../models/burger";
import Bottomcurve from "./BottomCurve";
import { AiOutlineHome } from "react-icons/ai";
import Topcurve from "./Topcurve";
import "../styles/salads.css";

const Salads = () => {
  return (
    <>
      <div className="margin-top">
        <Topcurve name={"SALADS"} />
        <div className="card-wrapper">
          {salads?.map((items, index) => {
            const { image, title, description, Link, alt } = items;
            return (
              <div key={index}>
                <div className="card-container">
                  <img src={image} alt={alt} className="main-image" />

                  <AiOutlinePlusCircle className="plus-circle-icon" />
                  <NavLink
                    to={Link}
                    target="_blanks"
                    className={"view-imgage-link"}
                  >
                    <img
                      src="./assest/images/3d.png"
                      className="d-icon-link"
                      alt="SALADS "
                    />
                  </NavLink>
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

        {/*  */}
        <Topcurve name={"SALADS"} />
        <div className="card-wrapper">
          {burger?.map((items, index) => {
            const { image, title, description, Link, alt } = items;
            return (
              <div key={index}>
                <div className="card-container">
                  <img src={image} alt={alt} className="main-image" />

                  <AiOutlinePlusCircle className="plus-circle-icon" />
                  <NavLink
                    to={Link}
                    target="_blanks"
                    className={"view-imgage-link"}
                  >
                    <img
                      src="./assest/images/3d.png"
                      className="d-icon-link"
                      alt="SALADS "
                    />
                  </NavLink>
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

export default Salads;
