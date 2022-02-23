import React, { useEffect, useState } from 'react'
import db from '../firebase/config'

const Main = () => {
	const [activityData, setActivityData] = useState([])

	useEffect(() => {
		db.collection('activity').onSnapshot(snapshot =>
			setActivityData(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<div className='ActivityMain'>
			{activityData.map((activity, index) => (
				<>
					<div className='title'> {activity.title} </div>
					<div className='subtitle'> {activity.subtitle} </div>
					<div className='photoWrapper'>
						<div>
							<img src={activity.img1} alt='photo one' className='photoOne' />
							<p className='commentText'>{activity.img1Text}</p>
						</div>
						<div>
							<img src={activity.img2} alt='photo two' className='photoTwo' />
							<p className='commentText'>{activity.img2Text}</p>
						</div>
					</div>
				</>
			))}
		</div>
	)
}

export default Main
