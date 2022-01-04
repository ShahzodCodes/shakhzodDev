import React from 'react'
import HomeMain from './home/HomeMain'
import './styles/main.scss'
import './styles/animation.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/portfolio'
import About from './aboutMe/About'

function Routing() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={HomeMain} />
				<Route path='/portfolio' exact component={Portfolio} />
				<Route path='/about-me' exact component={About} />
			</Switch>
		</Router>
	)
}

export default Routing
