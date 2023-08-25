import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <span className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    InfoUsers
                </NavLink>
                <NavLink to="/countdown" activeClassName="active">
                    CountDown
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
            </span>
        </>
    );
};
export default Nav;
