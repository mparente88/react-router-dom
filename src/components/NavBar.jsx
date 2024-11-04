import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/pokemon/new">New Pokemon</Link>
        </li>
      </ul>
    </nav>
  )
}
