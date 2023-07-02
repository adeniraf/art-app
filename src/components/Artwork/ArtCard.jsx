import './ArtCard.css'
import Modal from 'react-modal'
import { useState } from 'react'

const ArtCard = ({ id, name, imageSrc, description }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const setModalTrue = () => {
		setModalIsOpen(true)
	}
	const setModalFalse = () => {
		setModalIsOpen(false)
	}

	// const handleClick = (e) => {
	// 	;(function isClicked() {
	// 		console.log(`Button clicked has ID: ${id}`)
	// 	})()
	// }
	return (
		<>
			<div className='art-card'>
				<img
					src={imageSrc}
					alt=''
					className=''
					width='200px'
				/>
				<h3 className='text-wrap'>{name}</h3>
				<button onClick={setModalIsOpen}>INFO</button>

				<Modal isOpen={modalIsOpen}>
					<button onClick={setModalFalse}>X</button>
					<div>
						<img
							src={imageSrc}
							alt=''
							className=''
							width='200px'
						/>
						<h3 className='text-wrap'>{name}</h3>
						<button onClick={setModalTrue}>INFO</button>
					</div>
				</Modal>
			</div>
		</>
	)
}

export default ArtCard
