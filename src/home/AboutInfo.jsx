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

	const [links, setLinks] = useState([])

	useEffect(() => {
		db.collection('socialLinks').onSnapshot(snapshot =>
			setLinks(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<div className='aboutInfo'>
			{portfolios.map(portfolio => (
				<>
					<div className='side2'>
						<img className='myImage' src={portfolio.image} alt='My Image' />
					</div>
					<div className='side1'>
						<Reveal effect='homeText' duration='1250'>
							<h1 className='name'>{portfolio.name}</h1>
							<p className='info'>{portfolio.info}</p>
						</Reveal>
						<div className='buttons'>
							<Link className='linkBtn' to='/about'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								About me
							</Link>
							<Link className='linkBtn' to='/portfolio'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Portfolio
							</Link>
						</div>
						<div className='socialNet'>
							{links.map(media => (
								<>
									<a className='links' href={media.facebook} target='_blank'>
										<FacebookIcon className='socialIcon' />
									</a>
									<a className='links' href={media.linkedin} target='_blank'>
										<LinkedInIcon className='socialIcon' />
									</a>
									<a className='links' href={media.gitHub} target='_blank'>
										<GitHubIcon className='socialIcon' />
									</a>
									<a className='links' href={media.telegram} target='_blank'>
										<TelegramIcon className='socialIcon' />
									</a>
									<a className='links' href={media.youTuBe} target='_blank'>
										<YouTubeIcon className='socialIcon' />
									</a>
								</>
							))}
						</div>
					</div>
				</>
			))}
		</div>
	)
}

export default AboutInfo
