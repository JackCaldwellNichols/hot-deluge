import "./member.scss";
import { Link } from "react-router-dom";

const Member = ({ member }) => {
  return (
    <div className="member">
      <div className="memberCard">
        <Link to={`/member/${member.name}`}>
          <img src={member.img} alt={member.name} />
        </Link>
        <h5>{member.name}</h5>
      </div>
    </div>
  );
};

export default Member;
