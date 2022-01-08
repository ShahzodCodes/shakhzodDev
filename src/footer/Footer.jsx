import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Footer = () => {
	return (
		<div className='footer'>
			<p>
				©
				<a target='_blank' href='https://www.facebook.com/ShahzodDev/'>
					ShahzodDev
				</a>{' '}
				2021 - {new Date().getFullYear()} | Made with
				<FavoriteIcon />
			</p>
		</div>
	)
}

export default Footer
