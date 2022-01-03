import React from 'react'
import NavSec from '../home/NavSec'
import Reveal from 'react-reveal/Reveal'
import PageInfo from './PageInfo'
import Project from './Project'
import Footer from '../footer/Footer'

const Portfolio = () => {
	return (
		<>
			<Reveal effect='animNav' duration='750'>
				<NavSec />
			</Reveal>

			<Reveal effect='homeText' duration='1250'>
				<PageInfo />
			</Reveal>

			<Reveal effect='portfolioAnim' duration='1800'>
				<Project />
			</Reveal>
			<Footer />
		</>
	)
}

export default Portfolio
