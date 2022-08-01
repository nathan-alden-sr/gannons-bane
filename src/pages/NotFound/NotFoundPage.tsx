import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import RouteUrls from "../../resources/RouteUrls";
import Zelda1HeartImage from "../../assets/images/zelda-1-heart.png";
import Zelda1LinkDeathImage from "../../assets/images/zelda-1-link-death.gif";

const NotFoundPage: React.FC = () => {
  /*
   *   const createRandomHexString = (size: Number) =>
   * [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
   */
  return (
    <div className="NotFoundPage">
      <img className="NotFoundPage-LinkDeathImage" src={Zelda1LinkDeathImage} />
      <h1 className="NotFoundPage-Message">The page you requested could not be found.</h1>
      <Link className="NotFoundPage-ContinueLink" to={RouteUrls.homePage}>
        <img className="NotFoundPage-HeartImage" src={Zelda1HeartImage} />
        <span className="NotFoundPage-ContinueText">Continue</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
