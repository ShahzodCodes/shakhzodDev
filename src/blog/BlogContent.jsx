import React, { useEffect, useState } from 'react'
import db from '../firebase/config'
import { Col, Container, Row } from 'reactstrap'
import countapi from 'countapi-js'
import VisibilityIcon from '@mui/icons-material/Visibility'

countapi.visits().then(result => {
	console.log('From CountApi', result.value)
})

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
				{blogs.map((blog, index) => (
					<div className='blog' key={index}>
						<div className='postName'>{blog.postName}</div>
						<a className='link' href={blog.postLink} target='_blank'>
							Read the article here
						</a>
					</div>
				))}
			</Container>
		</>
	)
}

export default BlogContent
