import React from 'react'
import HomeMain from './home/HomeMain'
import './styles/main.scss'
import './styles/animation.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/portfolio'

function Routing() {
	return (
		<Router>
			<Switch>
				|<Route path='/' exact component={HomeMain} />
				<Route path='/portfolio' exact component={Portfolio} />
			</Switch>
		</Router>
	)
}

export default Routing
