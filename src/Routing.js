import React from 'react'
import HomeMain from './home/HomeMain'
import './styles/main.scss'
import './styles/responsive.scss'
import './styles/animation.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/portfolio'
import About from './aboutMe/About'
import Blog from './blog/Blog'
import Activity from './activity/activity'

function Routing() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={HomeMain} />
				<Route path='/portfolio' exact component={Portfolio} />
				<Route path='/blog' exact component={Blog} />
				<Route path='/about' exact component={About} />
				<Route path='/activity' exact component={Activity} />
			</Switch>
		</Router>
	)
}

export default Routing
