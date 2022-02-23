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
					<div> {activity.title} </div>
				</>
			))}
		</div>
	)
}

export default Main
