import React, { useEffect, useState } from 'react'
import db from '../firebase/config'
import { Col, Container, Row } from 'reactstrap'
import countapi from 'countapi-js'

// countapi.visits().then(result => {
// 	console.log('Coming from CountAPI: ' + result.value)
// })

const BlogContent = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		db.collection('blog').onSnapshot(snapshot =>
			setBlogs(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	countapi.visits('global').then(result => {
		console.log('Coming from CountAPI: ' + result.value)
	})

	return (
		<>
			<Container>
				<Row>
					{blogs.map((blog, index) => (
						<>
							<Col md='12' key={index}>
								<a href='#lorem'>{blog.postName}</a>
								<div id='lorem'>{blog.postText}</div>
							</Col>
							<div>TEST {}</div>
						</>
					))}
				</Row>
			</Container>
		</>
	)
}

export default BlogContent
