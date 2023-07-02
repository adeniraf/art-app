import ArtList from '../components/Artwork/ArtList'
import Header from '../components/Header/Header'
// import NavBar from '../components/NavBar/NavBar'

const HomePage = () => {
	return (
		<>
			<div className='page-container'>
				<Header />
				<ArtList />
			</div>
		</>
	)
}

export default HomePage
