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
								<img
									className='projectImage'
									src={project.image}
									alt='project image'
								/>
								<div className='projectInfo'>
									<div className='projectAbout'>
										<h3 className='projectName'>{project.projectName}</h3>
										<p className='projectDesc'>{project.projectDesc}</p>
										{/* <img src={project.image} alt='project image' /> */}
									</div>
									<div className='projectButtons'>
										<a href={project.code} target='_blank' className='buttons'>
											Source <GitHubIcon />
										</a>
										<a href={project.demo} target='_blank' className='buttons'>
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
