import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Footer = () => {
	return (
		<div className='footer'>
			<p>
				© ShahzodDev 2021 - {new Date().getFullYear()} | Made with
				<FavoriteIcon />
			</p>
		</div>
	)
}

export default Footer
