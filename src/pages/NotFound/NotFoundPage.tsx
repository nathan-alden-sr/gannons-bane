import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import RouteUrls from "../../resources/RouteUrls";

const NotFoundPage: React.FC = () => {
  /*
   *   const createRandomHexString = (size: Number) =>
   * [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
   */
  return (
    <div className="NotFoundPage">
      <div className="NotFoundPage-LinkDeathImage" />
      <h1 className="NotFoundPage-Message">The page you requested could not be found.</h1>
      <Link className="NotFoundPage-ContinueLink" to={RouteUrls.homePage}>
        <div className="NotFoundPage-HeartImage" />
        <span className="NotFoundPage-ContinueText">Continue</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
