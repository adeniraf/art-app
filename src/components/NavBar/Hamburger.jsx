import './Hamburger.css'

const Hamburger = () => {
	return (
		<div>
			<ul className='hamburger-nav-list'>
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
	)
}

export default Hamburger
