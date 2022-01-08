import React, { useEffect, useState } from 'react'
import db from '../firebase/config'
import { Col, Container, Row } from 'reactstrap'

const BlogContent = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		db.collection('blog').onSnapshot(snapshot =>
			setBlogs(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<>
			<Container>
				{/* <h1 style={{ color: 'white' }}>Coming Soon</h1> */}
				<Row>
					{blogs.map((blog, index) => (
						<Col md='12' key={index}>
							<a href='#lorem'>{blog.postName}</a>
							<div id='lorem'>{blog.postText}</div>
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default BlogContent
