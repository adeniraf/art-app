import artData from '../../../utils/artData'
import './ArtList.css'
import ArtCard from './ArtCard'

const ArtList = () => {
	const artElements = artData.map((artEl) => {
		return (
			<>
				<ArtCard
					key={artEl.id}
					id={artEl.id}
					name={artEl.name}
					description={artEl.description}
					imageSrc={artEl.imageSrc}
				/>
			</>
		)
	})

	console.log(artData)

	return (
		<>
			<div className='app-container art-div'>{artElements}</div>
		</>
	)
}

export default ArtList
