import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


function Header(){
  const numberOfItemsInCart = useSelector((state) => state.cart.cartItemsCount)
	return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    AMINE SHOP
    <img src="https://yard.onl/sitecollege/cours/html5css3/lib/NouvelElement118.png" alt="brand-logo" className="float-left" width="50" height="50"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
      <div className="count">
      <span className="material-icons-two-tone">shopping_cart</span>
      <div className="items-count-In-Cart">{numberOfItemsInCart}</div>
      </div>
    </div>
  </div>
</nav>

		)
}

export default Header ;