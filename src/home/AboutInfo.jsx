import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase/config'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Reveal } from 'react-reveal'

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
				<div className='wrapper'>
					<div className='side1'>
						<Reveal effect='homeText' duration='1250'>
							<h1 className='name'>{portfolio.name}</h1>
							<p className='info'>{portfolio.info}</p>
						</Reveal>
						<div className='buttons'>
							<Link className='linkBtn' to='/'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								About me
							</Link>
							<Link className='linkBtn' to='/'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Portfolio
							</Link>
							{/* <a href='#'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Neon button
							</a> */}
						</div>
						<div className='socialNet'>
							<a className='links' href='#' target='_blank'>
								<YouTubeIcon className='socialIcon' />
							</a>
							<a className='links' href='#' target='_blank'>
								<GitHubIcon className='socialIcon' />
							</a>
							<a className='links' href='#' target='_blank'>
								<LinkedInIcon className='socialIcon' />
							</a>
							<a className='links' href='#' target='_blank'>
								<FacebookIcon className='socialIcon' />
							</a>
							<a className='links' href='#' target='_blank'>
								<TelegramIcon className='socialIcon' />
							</a>
						</div>
					</div>

					<div className='side2'>
						<img className='myImage' src={portfolio.image} alt='My Image' />
					</div>
				</div>
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
