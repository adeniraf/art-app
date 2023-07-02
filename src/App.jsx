import './App.css'
// import ArtList from './components/Artwork/ArtList'
// import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
// import Modal from './components/Modal/Modal'
// import { useState } from 'react'

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/Shop'
					element={<Shop />}
				/>
			</Routes>
		</>
	)
}

export default App
