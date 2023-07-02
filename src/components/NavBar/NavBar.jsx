import './NavBar.css'
// add pagination to the link items later

const NavBar = () => {
	return (
		<>
			<header className='container'>
				<nav className='navbar'>
					<div>
						<h2 className='x-bold'>ARTIFY</h2>
					</div>
					<div>
						<ul className='nav-list'>
							<li>
								<a href=''>HOME</a>
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
						<button className='nav-btn'>CONTACT ME</button>
					</div>
				</nav>
			</header>
		</>
	)
}

export default NavBar
