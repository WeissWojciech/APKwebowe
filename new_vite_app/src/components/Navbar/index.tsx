import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/about'>About us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar