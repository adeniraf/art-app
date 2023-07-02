import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<section>
				<div className='hero-div container'>
					<h1>Discover the world</h1>
					<p>through Nadja&apos;s eyes</p>
					<button>
						<Link to='/Shop'>SHOP</Link>
					</button>
				</div>
			</section>
		</>
	)
}

export default Header
