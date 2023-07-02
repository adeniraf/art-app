import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/Shop')
	}

	return (
		<>
			<section>
				<div className='hero-div container'>
					<h1>Discover the world</h1>
					<p>through Nadja&apos;s eyes</p>
					<button onClick={handleClick}>SHOP</button>
				</div>
			</section>
		</>
	)
}

export default Header
