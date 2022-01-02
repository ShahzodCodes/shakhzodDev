import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
import db from '../firebase/config'
import { Link } from 'react-router-dom'

const Project = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		db.collection('project').onSnapshot(snapshot =>
			setProjects(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<>
			<Container>
				<Row>
					{projects.map((project, index) => (
						<Col md='12' key={index}>
							<div className='projectCard'>
								{/* <img src={project.image} alt='project image' /> */}
								<div className='cardSide'>
									<div className='projectAbout'>
										<h3>{project.projectName}</h3>
										<p>{project.projectDescription}</p>
										<img src={project.image} alt='project image' />
									</div>
									<div className='projectButtons'>
										<a href='#' target='_blank'>
											Source <GitHubIcon />
										</a>
										<a href='#' target='_blank'>
											Demo <LinkIcon />
										</a>
									</div>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default Project
