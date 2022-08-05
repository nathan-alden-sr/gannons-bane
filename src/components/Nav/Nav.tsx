import { Link } from "react-router-dom";
import { buildHomeRouteUrl, buildOverworldMapExplorerRouteUrl } from "../../helpers/RouteHelper";
import zelda1GannonTriforceYellow from "../../assets/images/zelda-1-gannon-triforce-yellow.png";
import zelda1OverworldScreen43 from "../../assets/images/zelda-1-overworld-screen-43.png";
import "./Nav.scss";

type NavElementProps = JSX.IntrinsicElements["nav"];

const Nav: React.FC<NavElementProps> = (props: NavElementProps) => {
  return (
    <nav {...props} className={`Nav ${props.className}`}>
      <Link className="Nav-TitleLink" to={buildHomeRouteUrl()}>
        <img src={zelda1GannonTriforceYellow} />
        Home
      </Link>
      <Link className="Nav-TitleLink" to={buildOverworldMapExplorerRouteUrl()}>
        <img className="Nav-OverworldMapExplorerImage" src={zelda1OverworldScreen43} />
        Overworld Map Explorer
      </Link>
    </nav>
  );
};

export default Nav;
