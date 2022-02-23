import React, { useEffect, useState } from 'react'
import db from '../firebase/config'

const Main = () => {
	const [aboutInfos, setAboutInfos] = useState([])

	useEffect(() => {
		db.collection('about').onSnapshot(snapshot =>
			setAboutInfos(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<div className='aboutMeMain'>
			{aboutInfos.map((about, index) => (
				<>
					<div className='firstData' key={index}>
						<img src={about.myPhoto} alt='my image' className='myPhoto' />
						<span>
							<p className='aboutMeText'>{about.name}</p>
							<p className='aboutMeText'>{about.mainText}</p>
							<p className='aboutMeText'>{about.lastText}</p>
						</span>
					</div>
				</>
			))}
		</div>
	)
}

export default Main
