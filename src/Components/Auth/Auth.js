import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="blueBtn" onClick={LogIn}>Sign in</button> : null}
      {user && (
        <span>
          <Link to="/orders" className="username">{user.displayName}</Link>
        </span>
      )}
      {user && (
        <button className="icon">
          <Link to="/orders">
            <FaUser />
          </Link>
        </button>
      )}
      {user ? <button className="blueBtn" onClick={LogOut}>Sign out</button> : null}
    </div>
  );
}
