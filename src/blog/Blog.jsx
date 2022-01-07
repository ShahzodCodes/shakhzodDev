import React from 'react'
import NavSec from '../home/NavSec'
import Reveal from 'react-reveal/Reveal'

const Blog = () => {
	return (
		<>
			<Reveal effect='animNav' duration='750'>
				<NavSec />
			</Reveal>
			<h1
				style={{
					color: 'white',
					textAlign: 'center'
				}}>
				BlogPage Coming soon...
			</h1>
		</>
	)
}

export default Blog
