import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase/config'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([])

	useEffect(() => {
		db.collection('shahzodDev').onSnapshot(snapshot =>
			setPortfolios(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	useEffect(() => {
		db.collection('shahzodDev').onSnapshot(snapshot =>
			setPortfolios(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<div className='aboutInfo'>
			{portfolios.map(portfolio => (
				<>
					<div className='side2'>
						<img src={portfolio.image} alt='My Image' />
					</div>
					<div className='side1'>
						<h1 className='name'>{portfolio.name}</h1>
						<p className='info'>{portfolio.info}</p>
						<div className='buttons'>
							<Link className='linkBtn' to='/'>
								About me
							</Link>
							<Link className='linkBtn' to='/'>
								Portfolio
							</Link>
						</div>
						<div className='socialNet'>
							<a href='#' target='_blank'>
								<YouTubeIcon className='youtube' />
							</a>
							<a href='#' target='_blank'>
								<GitHubIcon className='github' />
							</a>
							<a href='#' target='_blank'>
								<LinkedInIcon className='linkedin' />
							</a>
							<a href='#' target='_blank'>
								<FacebookIcon className='facebook' />
							</a>
							<a href='#' target='_blank'>
								<TelegramIcon className='telegram' />
							</a>
						</div>
					</div>
				</>
			))}

			{/* {portfolios.map(blog => (
				<>
					<div style={{ color: 'white' }}>
						{blog.data} <br />
						{blog.data1} <br />
						{blog.data2} <br />
						{blog.data3} <br />
						{blog.data4} <br />
						{blog.data5} <br />
						{blog.data6} <br />
						{blog.data7} <br />
						{blog.data8} <br />
						{blog.data9} <br />
					</div>
				</>
			))} */}
		</div>
	)
}

export default AboutInfo
