import { useState } from 'react'
import axios from 'axios'
import './ArtList.css'

const ArtList = () => {
	const [search, setSearch] = useState('')

	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	async function fetchData() {
	// 		const URL = `https://musicbrainz.org/doc/Cover_Art_Archive/API/release/${}`
	// 		try {
	// 			const response = await axios.get(URL)
	// 			console.log(`Data: ${response}`)
	// 		} catch (err) {
	// 			console.log(`Error: ${err}`)
	// 		}
	// 	}
	// }

	return (
		<>
			<form
				className='form-container'
				onSubmit='{handleSubmit}'>
				<input
					type='text'
					className='search-input'
					onChange={(e) => {
						setSearch(e.target.value)
					}}
					value={search}
				/>
			</form>
		</>
	)
}

export default ArtList
