import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// add pagination to the link items later

const NavBar = () => {
	return (
		<>
			<header className='nav-header container'>
				<nav className='navbar'>
					<div>
						<h2 className='x-bold'>ARTIFY</h2>
					</div>
					<div>
						<ul className='nav-list'>
							<li>
								<Link to=''>HOME</Link>
							</li>
							<li>
								<a href=''>ABOUT</a>
							</li>
							<li>
								<a href=''>PROJECTS</a>
							</li>
						</ul>
					</div>
					<div>
						<FaShoppingCart
							onClick={() => {
								console.log('Opening cart')
							}}
						/>
						<button className='nav-btn'>CONTACT ME</button>
					</div>
				</nav>
			</header>
		</>
	)
}

export default NavBar
