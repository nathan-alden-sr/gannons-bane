import React from "react";
import { Link } from "react-router-dom";
import { buildHomeRouteUrl } from "../../helpers/RouteHelper";
import Zelda1HeartImage from "../../assets/images/zelda-1-heart.png";
import Zelda1LinkDeathImage from "../../assets/images/zelda-1-link-death.gif";
import "./NotFoundPage.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="NotFoundPage">
      <img className="NotFoundPage-LinkDeathImage" src={Zelda1LinkDeathImage} />
      <h1 className="NotFoundPage-Message">The page you requested could not be found.</h1>
      <Link className="NotFoundPage-ContinueLink" to={buildHomeRouteUrl()}>
        <img className="NotFoundPage-HeartImage" src={Zelda1HeartImage} />
        <span className="NotFoundPage-ContinueText">Continue</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
