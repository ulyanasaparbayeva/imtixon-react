import './Nav.scss'
import {Container} from "../../utils/Utils";
import logo from '../../images/logo.png'
import Country from "../country/Country";
import {Link} from "react-router-dom";


const Nav = () => {
 return (
   <div className="header">
     <Container>
      <ul className="header__items">
        <li className="images-header">
          <Link to="/">
       <img src={logo}/>
        </Link>
        </li>
        <ul  className="items">
          <li>
              HOME
          </li>
          <li>
            TV-SHOWS
          </li>
          <li>
            MOVIES
          </li>
          <li>
            NEW
          </li>
          <li>
            <Link to="/partners">
              PARTNERS
            </Link>
          </li>
        </ul>
        <ul className="navbar__flex">
          <Country/>
        </ul>
      </ul>
     </Container>
   </div>
 )
}
export default Nav