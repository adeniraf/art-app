import './App.css'
import ArtList from './components/Artwork/ArtList'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Modal from './components/Modal/Modal'
import { useState } from 'react'

function App() {
	const [isModalOpen, setIsModalOpen] = useState(true)
	console.log(isModalOpen)

	return (
		<>
			<NavBar
				setIsModalOpen={setIsModalOpen}
				open={isModalOpen}
			/>
			<Header />
			<ArtList />
		</>
	)
}

export default App
