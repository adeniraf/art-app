import './App.css'

import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'

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
