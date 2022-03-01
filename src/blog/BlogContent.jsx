import React, { useEffect, useState } from 'react'
import db from '../firebase/config'
import { Col, Container, Row } from 'reactstrap'
import EastIcon from '@mui/icons-material/East'

const BlogContent = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		db.collection('blog').onSnapshot(snapshot =>
			setBlogs(snapshot.docs.map(doc => doc.data()))
		)
	}, [])

	return (
		<>
			<Container className='blogWrapper'>
				{blogs.map((blog, index) => (
					<>
						<div className='blog' key={index}>
							<p className='blogDef'>
								Men bu yerda o'zimni bilim va tajribamdan kelib chiqqan holda,
								turli mavzularda maqola ko'rinishidagi har xil qiziqarli postlar
								joylab borishga harakat qilaman. Agar siz bu yozganlarimdan
								o'zingiz uchun biror bir foydali ma'lumot olsangiz, iltimos
								ota-onam haqqiga duo qiling va albatta boshqalar bilan ham
								ulashing.
							</p>
							<a className='link' href={blog.postLink} target='_blank'>
								<div>
									<div className='date'> {blog.date} </div>
									{blog.postName}
								</div>
								<EastIcon className='next' />
							</a>
						</div>
					</>
				))}
			</Container>
		</>
	)
}

export default BlogContent
