import React, { useEffect, useState } from 'react'
import db from '../firebase/config'

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([])

	useEffect(() => {
		db.collection('shahzodDev').onSnapshot(snapshot =>
			setPortfolios(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return <div></div>
}

export default AboutInfo
