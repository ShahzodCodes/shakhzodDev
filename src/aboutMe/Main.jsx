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
			{aboutInfos.map(about => (
				<>
					<div className='firstData'>
						<img src={about.myPhoto} alt='my image' className='myPhoto' />
						<span>
							<p className='aboutMeText'>{about.name}</p>
							<p className='aboutMeText'>{about.mainText}</p>
							<p className='aboutMeText'>{about.lastText}</p>
						</span>
					</div>
					<div className='secondData'>
						<div>
							<img
								src={about.withTeacher}
								alt='Teacher image'
								className='withTeacher'
							/>
							<p className='commentText'>With my teacher, Sardor Muhtorov</p>
						</div>
						<div>Graduation Ceremony at PDP IT Academy</div>
						<div>
							{/* <img
								src={about.withGroup}
								alt='Teacher image'
								className='withGroup'
							/> */}
							<p className='commentText'>With my group, G96</p>
						</div>
					</div>
				</>
			))}
		</div>
	)
}

export default Main
