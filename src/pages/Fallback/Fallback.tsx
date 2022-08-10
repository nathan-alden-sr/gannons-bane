import zelda1GannonTriforce from "../../assets/images/zelda-1-gannon-triforce.gif";
import "./Fallback.scss";

const Fallback: React.FC = () => {
  return (
    <div className="FallbackPage">
      <img className="FallbackPage-Logo" src={zelda1GannonTriforce} title="It's dangerous to go alone!" />
      <span className="FallbackPage-Message">Loading...</span>
    </div>
  );
};

export default Fallback;
